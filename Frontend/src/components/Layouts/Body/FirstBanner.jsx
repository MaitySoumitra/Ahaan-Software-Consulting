import React, { useState, useEffect, useRef } from "react";
import { Container, Row } from "react-bootstrap";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaDatabase, FaShopify, FaWordpress, FaFigma } from "react-icons/fa"; // Import necessary icons
import "./FirstBanner.css";
import { SiCanva, SiMongodb } from "react-icons/si";
const generateBalls = (count, containerWidth, containerHeight) => {
  const icons = [
    { name: 'React', color: 'linear-gradient(45deg, #61DAFB, #000000)', icon: <FaReact size={30} color="#fff" /> },
    { name: 'MongDB', color: 'linear-gradient(45deg, #47A248, #000000)', icon: <SiMongodb  size={30} color="#fff" /> },
    { name: 'Node.js', color: 'linear-gradient(45deg,rgb(82, 117, 44), #000000)', icon: <FaNodeJs size={30} color="#fff" /> },
    { name: 'HTML', color: 'linear-gradient(45deg, #E34F26, #000000)', icon: <FaHtml5 size={30} color="#fff" /> },
    { name: 'CSS', color: 'linear-gradient(45deg, #2965F1, #000000)', icon: <FaCss3Alt size={30} color="#fff" /> },
    { name: 'SQL', color: 'linear-gradient(45deg, #47A248, #000000)', icon: <FaDatabase size={30} color="#fff" /> },
    { name: 'Shopify', color: 'linear-gradient(45deg, #96BF48, #000000)', icon: <FaShopify size={30} color="#fff" /> },
    { name: 'WordPress', color: 'linear-gradient(45deg, #21759B, #000000)', icon: <FaWordpress size={30} color="#fff" /> },
    { name: 'Figma', color: 'linear-gradient(45deg, #F24E1E, #000000)', icon: <FaFigma size={30} color="#fff" /> },
    { name: 'Canva', color: 'linear-gradient(45deg, #00C6A4, #000000)', icon: <SiCanva size={30} color="#fff" /> }
  ];

  return Array.from({ length: count }).map((_, index) => {
    const icon = icons[index % icons.length];
    return {
      color: icon.color,
      size: Math.random() * 30 + 30,
      startX: Math.random() * (containerWidth - 60),
      startY: Math.random() * (containerHeight - 60),
      velocityX: (Math.random() - 0.5) * 10,
      velocityY: (Math.random() - 0.5) * 10,
      icon: icon.icon
    };
  });
};

const FloatingBalls = () => {
  const containerRef = useRef(null);
  const [balls, setBalls] = useState([]);
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        setContainerSize({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight
        });
      }
    };

    updateSize();

    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  useEffect(() => {
    if (containerSize.width && containerSize.height) {
      setBalls(generateBalls(10, containerSize.width, containerSize.height));
    }
  }, [containerSize]);

  useEffect(() => {
    const interval = setInterval(() => {
      setBalls((prevBalls) =>
        prevBalls.map((ball, i, arr) => {
          let newX = ball.startX + ball.velocityX;
          let newY = ball.startY + ball.velocityY;

          if (newX > containerSize.width - ball.size || newX < 0) ball.velocityX *= -1;
          if (newY > containerSize.height - ball.size || newY < 0) ball.velocityY *= -1;

          arr.forEach((otherBall, j) => {
            if (i !== j) {
              const dx = newX - otherBall.startX;
              const dy = newY - otherBall.startY;
              const distance = Math.sqrt(dx * dx + dy * dy);
              if (distance < (ball.size + otherBall.size) / 2) {
                const angle = Math.atan2(dy, dx);
                const speed1 = Math.sqrt(ball.velocityX ** 2 + ball.velocityY ** 2);
                const speed2 = Math.sqrt(otherBall.velocityX ** 2 + otherBall.velocityY ** 2);
                ball.velocityX = speed2 * Math.cos(angle);
                ball.velocityY = speed2 * Math.sin(angle);
                otherBall.velocityX = speed1 * Math.cos(angle + Math.PI);
                otherBall.velocityY = speed1 * Math.sin(angle + Math.PI);
              }
            }
          });

          return { ...ball, startX: newX, startY: newY };
        })
      );
    }, 50);

    return () => clearInterval(interval);
  }, [containerSize]);

  const handleBallClick = (index) => {
    setBalls((prevBalls) =>
      prevBalls.map((ball, i) => {
        if (i === index) {
          const newVelocityX = ball.velocityX * 5.5; 
          const newVelocityY = ball.velocityY * 5.5;
          return {
            ...ball,
            velocityX: newVelocityX,
            velocityY: newVelocityY
          };
        }
        return ball;
      })
    );
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center position-relative overflow-hidden bg-dark"
      style={{ height: "500px" }}
      ref={containerRef}
    >
      <div className="background"></div>
      <Container>
        <Row className="banner1" style={{ position: "relative", zIndex: 2 }}>
          <h1 className="fw-bold banner1-heading-offshore text-center text-white">
            Redefine Possibilities Pioneering Innovative Development
          </h1>
          <p className="mt-3 banner1-content text-white text-center">
            Fuelled by innovation and cutting-edge technology, our developers craft web and mobile experiences that captivate customers.
          </p>
        </Row>
      </Container>

      {balls.map((ball, index) => (
        <div
          key={index}
          className="ball"
          style={{
            background: ball.color,
            width: ball.size,
            height: ball.size,
            left: `${ball.startX}px`,
            top: `${ball.startY}px`,
            animation: `ballMove 0.05s linear forwards`,
            zIndex: 1,
            position: "absolute"
          }}
          onClick={() => handleBallClick(index)}
        >
         <div
  className="ball-icon"
  style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',      // Set width to 50% of the ball
    height: '50%',     // Set height to 50% of the ball
    opacity: 0.7,
    position: 'absolute',  // Ensure it's positioned absolutely within the ball
    top: '25%',            // Center the icon vertically (50% - 25%)
    left: '25%',           // Center the icon horizontally (50% - 25%)
  }}
>
  {ball.icon} {/* Render the icon */}
</div>

        </div>
      ))}
    </div>
  );
};

export default FloatingBalls;

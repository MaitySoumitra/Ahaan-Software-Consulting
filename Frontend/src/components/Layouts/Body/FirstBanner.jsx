import React, { useState, useEffect, useRef } from "react";
import "./FirstBanner.css";
import { Container, Row } from "react-bootstrap";

const generateBalls = (count, containerWidth, containerHeight) => {
  return Array.from({ length: count }).map(() => ({
    color: `linear-gradient(45deg, #C7892B, #000000)`,
    size: Math.random() * 30 + 30,
    startX: Math.random() * (containerWidth - 60),
    startY: Math.random() * (containerHeight - 60), 
    velocityX: (Math.random() - 0.5) * 10,
    velocityY: (Math.random() - 0.5) * 10,
    imageUrl: `https://ahaansoftware.com/uploadedimage/fav.png`,
  }));
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
          height: containerRef.current.offsetHeight,
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
            velocityY: newVelocityY,
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
            background: `linear-gradient(45deg, #C7892B, #000000)`,
            width: ball.size,
            height: ball.size,
            left: `${ball.startX}px`,
            top: `${ball.startY}px`,
            animation: `ballMove 0.05s linear forwards`,
            zIndex: 1,
            position: "absolute",
            "--x": `${ball.velocityX}px`,
            "--y": `${ball.velocityY}px`,
          }}
          onClick={() => handleBallClick(index)} 
        >
          <div
            className="ball-image"
            style={{
              backgroundImage: `url(${ball.imageUrl})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "50%",
              height: "50%",
              opacity: 0.4, 
              position: "absolute",
              top: "25%",
              left: "25%",
            }}
          ></div>
        </div>
      ))}
    </div>
  );
};

export default FloatingBalls;

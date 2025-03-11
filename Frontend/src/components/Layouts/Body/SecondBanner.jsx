import React, {useState, useEffect} from "react";
import { motion } from "framer-motion";
import { FiPhoneCall } from "react-icons/fi";
import { Container } from "react-bootstrap";
import './SecondBanner.css';
const CallToAction = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet]= useState(false);
  const [isOnlyMObile, setIsOnlyMobile]=useState(false)

  useEffect(() => {
    const handaleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      setIsTablet(window.innerWidth<=1000)
      setIsOnlyMobile(window.innerWidth<=450)
    };
    handaleResize();

    window.addEventListener("resize", handaleResize);
    return () => window.removeEventListener("resize", handaleResize);
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      whileHover={{
        background: [
          "radial-gradient(circle at center, #000428, #433978,#8065BB)",
          "radial-gradient(circle at center,#8065BB, #433978, #000428)",
        ],
        transition: { duration: 1.5, repeat: Infinity, repeatType: "reverse" },
      }}
      className="second-banner-req-call"
      
    >
      <Container
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "20px",
        }}
      >
        <div className="second-banner-call"
          style={{
            
          }}
        >
          <motion.div
            animate={{ x: [-2, 2, -2] }}
            transition={{ duration: 0.1, repeat: Infinity }}
          >
            <FiPhoneCall className="second-banner-calling-icon" />
          </motion.div>
          <div className="second-banner-call-details">
            <h3>
              { isMobile ?  "": "Call For More Info"}
            </h3>
            <p
              onClick={() => (window.location.href = "tel:+13214210740")}
            >
              { isMobile ? "": "+13214210740  /" }
            </p><p
              onClick={() => (window.location.href = "tel:+919830371143")}
            >
              +919830371143
            </p>
          </div>
        </div>

        <motion.p
        className="second-banner-label"
          style={{
            fontSize: "32px",
            margin: "10px 0",
            letterSpacing: "2px",
          }}
        >
          { (isOnlyMObile ? "Let’s Request" : ( isMobile ? "Schedule Free Consultation" : "Let’s Request A Schedule For Free Consultation"))
            .split("")
            .map((char, index) => (
              <motion.span
                key={index}
                whileHover={{ color: ["#33ffc1", "#ffff", "#000428"] }}
                transition={{
                  duration: 0.3,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                {char}
              </motion.span>
            ))}
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          whileHover={{
            backgroundColor: "#433978",
            scale: 1.1,
            color: "#ffff",
            border: "2px solid #ffff",
            borderRadius:"20px",
            fontWeight:"600"
          }}
          whileTap={{ scale: 0.8 }}
          style={{
            padding: "10px 20px",
            backgroundColor: "#fff",
            color: "#6200ea",
            fontWeight:"600",
            border: "none",
            borderRadius: "5px",
            fontSize: "16px",
            cursor: "pointer",
            transition: "background-color 0.1s ease",
          }}
        >
          Contact
        </motion.button>
      </Container>
    </motion.div>
  );
};

export default CallToAction;

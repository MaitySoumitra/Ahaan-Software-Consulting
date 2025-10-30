import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiPhoneCall } from "react-icons/fi";
import { Container } from "react-bootstrap";
import { useNavigate, useLocation } from 'react-router-dom';
import "./Secondbanner.css";
const CallToAction = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isOnlyMObile, setIsOnlyMobile] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    const handaleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      setIsTablet(window.innerWidth <= 1000);
      setIsOnlyMobile(window.innerWidth <= 450);
    };
    handaleResize();

    window.addEventListener("resize", handaleResize);
    return () => window.removeEventListener("resize", handaleResize);
  }, []);
  const handleGoToContact = () => {
    navigate('/contact'); // Navigate to the contact page
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      whileHover={{
        background: [
          "radial-gradient(circle at center, #000,rgb(14, 14, 15),#CD912A)",
          "radial-gradient(circle at center,#CD912A,rgb(0, 0, 0), #000)",
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
       <div className="second-banner-call">
  <motion.div
    animate={{ x: [-2, 2, -2] }}
    transition={{ duration: 0.1, repeat: Infinity }}
  >
    <FiPhoneCall
      className="second-banner-calling-icon"
      onClick={() => (window.location.href = "https://wa.me/919830371143")}
    />
  </motion.div>
  <div className="second-banner-call-details">
    <h3>{isMobile ? "" : "Call For More Info"}</h3>
    <p
      onClick={() => (window.location.href = "https://wa.me/13214210740")}
      style={{ cursor: "pointer" }}
    >
      {isMobile ? "" : "+13214210740 /"}
    </p>
    <p
      onClick={() => (window.location.href = "https://wa.me/919830371143")}
      style={{ cursor: "pointer" }}
    >
      {isMobile ? "" : "+919830371143 /"}
    </p>
    <p
      onClick={() => (window.location.href = "https://wa.me/6590745876")}
      style={{ cursor: "pointer" }}
    >
      {isMobile ? "" : "+6590745876"}
    </p>
  </div>
</div>


        <motion.p className="second-banner-label" style={{}}>
          {(isOnlyMObile
            ? "Let’s Request"
            : isMobile
            ? "Schedule Free Consultation"
            : "Let’s Request A Schedule For Free Consultation"
          )
            .split("")
            .map((char, index) => (
              <motion.span
                key={index}
                whileHover={{ color: ["#EB5B00", "#ffff", "#000428"] }}
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

        <motion.a
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          whileHover={{
            backgroundColor: "#000",
            scale: 1.1,
            color: "#ffff",
            border: "2px solid #ffff",
            borderRadius: "20px",
            fontWeight: "600",
          }}
          whileTap={{ scale: 0.8 }}
          className="second-banner-contact-button"
          href="/contact"
        >
          {isOnlyMObile? "Contact" : "Contact Now"  }
          
        </motion.a>
      </Container>
    </motion.div>
  );
};

export default CallToAction;

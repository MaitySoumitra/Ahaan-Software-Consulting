import React from "react";
import { motion } from "framer-motion";
import { FiPhoneCall } from "react-icons/fi";
import { Container } from "react-bootstrap";

const CallToAction = () => {
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
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        background:
          "radial-gradient(circle at center,rgb(219, 219, 224), #433978,#8065BB)",
        borderRadius: "8px",
        height: "200px",
        margin: "20px auto",
        width: "100%",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        color: "#fff",
        padding: "20px",
        overflow: "hidden",
      }}
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
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            justifyContent: "center",
          }}
        >
          <motion.div
            animate={{ x: [-2, 2, -2] }}
            transition={{ duration: 0.1, repeat: Infinity }}
          >
            <FiPhoneCall size={34} color="white" />
          </motion.div>
          <div
            style={{
              display: "flex",
              flexDirection: "column", // Align the content vertically
              justifyContent: "center", // Center the content vertically
              alignItems: "center", // Center the content horizontally
              textAlign: "center", // Ensure the text is centered
              height: "100%", // Ensure the div takes full height of its parent
            }}
          >
            <h3 style={{ margin: "5px 0", fontSize: "22px" }}>
              Call For More Info
            </h3>
            <p
              style={{
                fontSize: "16px",
                fontWeight: "400",
                cursor: "pointer",
              }}
              onClick={() => (window.location.href = "tel:+13214210740")}
            >
              +13214210740
            </p>
          </div>
        </div>

        <motion.p
          style={{
            fontSize: "32px",
            margin: "10px 0",
            letterSpacing: "2px",
          }}
        >
          {"Let’s Request A Schedule For Free Consultation"
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
          Contact Us
        </motion.button>
      </Container>
    </motion.div>
  );
};

export default CallToAction;

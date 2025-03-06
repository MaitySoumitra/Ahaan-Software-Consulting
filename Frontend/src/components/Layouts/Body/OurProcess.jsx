import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BsForward } from "react-icons/bs";
import { Container } from "react-bootstrap";
import "./OurProcess.css"; 

const sdlcSteps = [
  { id: 1, title: "Planning", color: "#6D28D9" },
  { id: 2, title: "Requirements", color: "#F59E0B" },
  { id: 3, title: "Design", color: "#9333EA" },
  { id: 4, title: "Development", color: "#22C55E" },
  { id: 5, title: "Testing", color: "#EF4444" },
  { id: 6, title: "Deployment", color: "#3B82F6" },
  { id: 7, title: "Maintenance", color: "#EAB308" },
];

const OurProcess = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % sdlcSteps.length);
    }, 1000); // Change every second

    return () => clearInterval(interval);
  }, []);

  return (
    <Container>
    <div className="sdlc-container">
    {sdlcSteps.map((step, index) => (
      <div key={step.id} className="sdlc-step-wrapper">
        <motion.div
          className={`sdlc-step ${index === activeIndex ? "animate" : ""}`}
          style={{ borderColor: step.color }}
        >
          <div className="step-number">{index + 1}</div>
          <span>{step.title}</span>
        </motion.div>
  
       
        {index < sdlcSteps.length - 1 && (
          <svg class="arrow-svg">
          
          <polygon class="arrow" points="15,8 20,15 15,22 30,22 35,15 30,8" fill="#433978"/>
      </svg>
        )}
      </div>
    ))}
  </div>
  
  </Container>
  );
};

export default OurProcess;

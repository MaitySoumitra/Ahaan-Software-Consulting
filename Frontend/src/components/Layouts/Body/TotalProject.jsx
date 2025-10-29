import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { FaUsers, FaUserTie, FaCheckCircle, FaSmile } from "react-icons/fa";
import "./TotalProject.css";

const sdlcSteps = [
  { id: 5, label: "International Awards", color: "#6D28D9", icon: <FaUsers /> },
  { id: 30, label: "Our Teams", color: "#F59E0B", icon: <FaUserTie /> },
  { id: 100, label: "Completed Projects", color: "#22C55E", icon: <FaCheckCircle /> },
  { id: 125, label: "Happy Clients", color: "#3B82F6", icon: <FaSmile /> },
];

const TotalProject = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % sdlcSteps.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <Container className="my-5">
      

      <div className="iso-timeline-container">
        {sdlcSteps.map((step, index) => (
          <div key={step.id} className="iso-step-wrapper">
            <div className="iso-icon-top">
              <div className="iso-icon-line"></div>
              <div className="iso-icon-circle" style={{ borderColor: step.color }}>
                <span style={{ fontSize: "1.5rem", color: step.color }}>{step.icon}</span>
              </div>
            </div>

            <div
              className={`iso-block ${index === activeIndex ? "active" : ""}`}
              style={{ "--block-color": step.color }}
            >
              <div className="iso-block-top">
                <span className="step-number">{`${step.id}`}</span>
              </div>
              <div className="iso-block-front"></div>
              <div className="iso-block-side"></div>
            </div>

            <div
              className={`iso-step-square ${index === activeIndex ? "active-square" : ""}`}
              style={{
                backgroundColor: index === activeIndex ? step.color : "#f5f5f5",
                color: index === activeIndex ? "#fff" : "#333",
              }}
            >
              <h5>{step.label}</h5>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default TotalProject;

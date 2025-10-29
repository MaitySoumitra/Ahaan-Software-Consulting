import React from 'react';
import { FaPen, FaCogs, FaRocket, FaBrain } from 'react-icons/fa'; // React icons
import './OurProcess.css'; // Your CSS file

const OurProcess = () => {
  const steps = [
    {
      id: 1,
      title: "Discovery & Planning",
      description: "Define goals, scope, audience, and create a wireframe.",
      icon: <FaPen size={40} />,
    },
    {
      id: 2,
      title: "Design & Prototyping",
      description: "Craft visual aesthetics, UI/UX, and create interactive mockups.",
      icon: <FaBrain size={40} />,
    },
    {
      id: 3,
      title: "Development & Testing",
      description: "Full-stack coding, functionality integration, and rigorous QA.",
      icon: <FaCogs size={40} />,
    },
    {
      id: 4,
      title: "Launch & Growth",
      description: "Deploy to live servers, SEO setup, and post-launch monitoring.",
      icon: <FaRocket size={40} />,
    },
  ];

  return (
    <div className="process-container">
      <div className="process-timeline">
        {steps.map((step) => (
          <div key={step.id} className="process-step">
            <div className="icon-container">{step.icon}</div>
            <div className="step-title">{step.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurProcess;

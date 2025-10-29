import React from 'react';
import { FaPen, FaCogs, FaRocket, FaBrain } from 'react-icons/fa'; // React icons
import './OurProcess.css'; // Your updated CSS file

const OurProcess = () => {
  const steps = [
    {
      id: 1,
      title: "Discovery & Planning",
      description: "Define goals, scope, audience, and create a wireframe.",
      icon: <FaPen size={40} className='discovery -planning-icons'/>,
      baseClass: 'process-step-1-color', // Unique class for step 1
    },
    {
      id: 2,
      title: "Design & Prototyping",
      description: "Craft visual aesthetics, UI/UX, and create interactive mockups.",
      icon: <FaBrain size={40} className='design-prototyping-icons'/>,
      baseClass: 'process-step-2-color', // Unique class for step 2
    },
    {
      id: 3,
      title: "Development & Testing",
      description: "Full-stack coding, functionality integration, and rigorous QA.",
      icon: <FaCogs size={40} className='development-testing-icons'/>,
      baseClass: 'process-step-3-color', // Unique class for step 3
    },
    {
      id: 4,
      title: "Launch & Growth",
      description: "Deploy to live servers, SEO setup, and post-launch monitoring.",
      icon: <FaRocket size={40} className='launch-growth-icons'/>,
      baseClass: 'process-step-4-color', // Unique class for step 4
    },
  ];

  return (
    <div className="container process-section">
      <div className="process-row">
        {steps.map((step) => (
          <div 
            key={step.id} 
            className={`we-do-col-div ${step.baseClass}`}
          >
            <div className="webe-inner-div">
              <div className="icon-container">{step.icon}</div>
              <div className="step-title">{step.title}</div>
              <div className="step-description">{step.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurProcess;

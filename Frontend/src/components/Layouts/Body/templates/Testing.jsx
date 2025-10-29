import React, {useState} from 'react'
import { FiX } from "react-icons/fi";
import "./templates.css";

const Testing = () => {
   const [selectedCube, setSelectedCube] = useState(null);

    const cubePositions = [
      
        { className: "cube33", icon: "https://ahaanmedia.com/asc/technology/Jest.png", heading: "Jest", heading2: "Jest", heading3: "Jest", color: "#99425B", description: "Jest is a JavaScript testing framework developed by Facebook. It provides a simple, zero-config setup for unit testing, snapshot testing, and mocking. Jest is widely used for testing React applications and offers features like parallel test execution and code coverage." },
        { className: "cube34", icon: "https://ahaanmedia.com/asc/technology/Mocha.png", heading: "Mocha", heading2: "Mocha", heading3: "Mocha", color: "#8D6748", description: "Mocha is a JavaScript testing framework for Node.js and browser-based applications. It provides a flexible and feature-rich environment for unit testing, with support for asynchronous testing, assertions, and mock functions. Mocha is widely used for test-driven development (TDD)." },
        { className: "cube35", icon: "https://ahaanmedia.com/asc/technology/Selenium.png", heading: "Sele", heading2: "nium", heading3: "Selenium", color: "#00B400", description: "Selenium is an open-source tool for automating web browsers. It supports multiple programming languages and browsers, enabling developers to create automated tests for web applications. Selenium is widely used for functional testing and continuous integration in software development." },
        { className: "cube36", icon: "https://ahaanmedia.com/asc/technology/Cypress.png", heading: "Cy", heading2: "Press", heading3: "Cypress", color: "#349278", description: "Cypress is a JavaScript-based end-to-end testing framework for web applications. It provides fast, reliable testing with real-time browser interaction, automatic waiting, and easy setup. Cypress is ideal for writing, running, and debugging tests for modern web applications." },
        { className: "cube37", icon: "https://ahaanmedia.com/asc/technology/Postman.png", heading: "Post", heading2: "Man", heading3: "Postman", color: "#EE6D3F", description: "Postman is an API development and testing tool that allows users to create, test, and document APIs. It offers features like request building, automation, and collaboration, making it ideal for developers and teams working on RESTful services and APIs." },
        { className: "cube38", icon: "https://ahaanmedia.com/asc/technology/BrowserStack.png", heading: "Browser", heading2: "Stack", heading3: "Browser Stack", color: "#349278", description: "BrowserStack is a cloud-based testing platform that enables users to test websites and mobile applications across various browsers, operating systems, and devices. It provides real-time access to a wide range of environments, simplifying cross-browser and cross-device testing." },
      ];

      const handleCubeClick = (cube) => {
        setSelectedCube(cube);
      };
    
      const closeModal = () => {
        setSelectedCube(null);
      };
    
  return (
    <div className="multi-cube-wrapper">
      {/* Cube Ring */}
      {cubePositions.map((cube, index) => (
        <div key={index} className={`cube-container ${cube.className}`} onClick={() => handleCubeClick(cube)}>
          <div className="cube">
            <div className="face top"></div>
            <div className="face left"></div>
            <div className="face right">
              <img src={cube.icon} alt="icon" className="icon-top" />
            </div>
            <div className="face bottom-left" style={{ color: cube.color }}>{cube.heading}</div>
            <div className="face bottom-right" style={{ color: cube.color }}>{cube.heading2}</div>
          </div>
        </div>
      ))}
      {/* Connector Lines */}
      {cubePositions.map(({ className }, index) => (
        <div key={`line-${index}`} className={`connector-line ${className}-line`} />
      ))}

      {/* Center Laptop */}
      <div className="laptop-center">
        <img src="https://ahaanmedia.com/asc/All/Laptop.gif" alt="Laptop" className="laptop-image" />
      </div>

      {/* Modal */}
{selectedCube && (
  <div className="popup-overlay" onClick={closeModal}>
    <div className="popup-content" onClick={(e) => e.stopPropagation()}>
      <img src={selectedCube.icon} alt={selectedCube.heading} className="popup-icon" />
      <h2 style={{ color: selectedCube.color }}>{selectedCube.heading3}</h2>
      <p>{selectedCube.description}</p>
      <FiX className="popup-close-icon animated-close" onClick={closeModal} />
    </div>
  </div>
)}

    </div>
  )
}

export default Testing
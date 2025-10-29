import React, { useState } from 'react'
import { FiX } from "react-icons/fi";
import "./templates.css";

const Devops = () => {

  const [selectedCube, setSelectedCube] = useState(null);

    const cubePositions = [
        { className: "cube27", icon: "https://ahaanmedia.com/asc/technology/Hostinger.png", heading: "Hosti", heading2: "Nger", color: "#673EE5", heading3: "Hostinger", description: "Hostinger is a web hosting provider offering affordable, high-performance hosting solutions, including shared, VPS, and cloud hosting. It provides fast loading times, excellent customer support, and an easy-to-use interface, making it ideal for both beginners and experienced website owners." },
        { className: "cube28", icon: "https://ahaanmedia.com/asc/technology/AWS.png", heading: "AWS", heading2: "AWS", color: "#FD9801", heading3: "AWS", description: "Amazon Web Services (AWS) is a cloud computing platform offering a wide range of services, including computing power, storage, databases, machine learning, and analytics. It helps businesses scale, innovate, and manage infrastructure efficiently with flexible, pay-as-you-go pricing." },
        { className: "cube29", icon: "https://ahaanmedia.com/asc/technology/Kuberneties.png", heading: "Kuber", heading2: "Neties", color: "#326CE4", heading3: "Kuberneties", description: "Kubernetes is an open-source container orchestration platform that automates the deployment, scaling, and management of containerized applications. It ensures high availability, load balancing, and efficient resource management, making it ideal for managing complex, distributed systems in cloud environments." },
        { className: "cube30", icon: "https://ahaanmedia.com/asc/technology/Docker.png", heading: "Docker", heading2: "Docker", color: "#2F7081", heading3: "Docker", description: "Docker is an open-source platform that automates the deployment, scaling, and management of applications within lightweight, portable containers. It enables consistent environments across development, testing, and production, streamlining workflows and improving application performance and scalability." },
        { className: "cube31", icon: "https://ahaanmedia.com/asc/technology/GCP.png", heading: "GCP", heading2: "GCP", color: "#D34237", heading3: "GCP", description: "Google Cloud Platform (GCP) is a suite of cloud computing services offering infrastructure, data storage, machine learning, and analytics tools. It enables businesses to build, deploy, and scale applications with high performance, security, and reliability on Google's global infrastructure." },
        { className: "cube32", icon: "https://ahaanmedia.com/asc/technology/Plesk.png", heading: "Plesk", heading2: "Plesk", color: "#50B3E2", heading3: "Plesk", description: "Plesk is a web hosting control panel that simplifies website and server management. It offers a user-friendly interface for managing domains, email accounts, databases, and security, making it easy for web professionals to automate tasks and streamline hosting operations." },
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

export default Devops
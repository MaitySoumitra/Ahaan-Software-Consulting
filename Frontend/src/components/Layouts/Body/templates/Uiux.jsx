import React, { useState } from 'react';
import { FiX } from "react-icons/fi";
import "./templates.css";

const Uiux = () => {
  const [selectedCube, setSelectedCube] = useState(null);

  const cubePositions = [
    { className: "cube9", icon: "https://ahaanmedia.com/asc/technology/Figma.png", heading: "Figma", heading2: "Figma", heading3: "Figma", color: "#FF3737", description: "Figma is a web-based design and prototyping tool that enables real-time collaboration. It allows teams to create, share, and iterate on user interfaces, wireframes, and prototypes efficiently. Figma supports vector editing, components, version control, and developer handoff in one platform." },
    { className: "cube10", icon: "https://ahaanmedia.com/asc/technology/Photoshop.png", heading: "Photo", heading2: "Shop", heading3: "Photoshop", color: "#001E36", description: "Photoshop is a powerful image editing and graphic design software developed by Adobe. It offers advanced tools for photo retouching, digital painting, and compositing. Widely used by designers and artists, Photoshop enables creative visual content for web, print, and multimedia." },
    { className: "cube11", icon: "https://ahaanmedia.com/asc/technology/Wix.png", heading: "Wix", heading2: "Wix", heading3: "Wix", color: "#080808", description: "Wix is a user-friendly website builder that allows anyone to create professional websites without coding. It offers customizable templates, drag-and-drop tools, and integrated features like SEO, e-commerce, and blogging, making it ideal for businesses, creatives, and entrepreneurs." },
    { className: "cube12", icon: "https://ahaanmedia.com/asc/technology/Canva.png", heading: "Canva", heading2: "Canva", heading3: "Canva", color: "#4A43E7", description: "Canva is a versatile online design tool that enables users to create stunning graphics, presentations, social media posts, and more. With its drag-and-drop interface, templates, and design elements, Canva is perfect for both beginners and professionals seeking quick, beautiful designs." },
    { className: "cube13", icon: "https://ahaanmedia.com/asc/technology/Framer.png", heading: "Framer", heading2: "Framer", heading3: "Framer", color: "#00AAFF", description: "Framer is a web-based design and prototyping tool that enables designers to create interactive, high-fidelity websites and interfaces. With real-time collaboration, animations, and code capabilities, Framer is ideal for building modern, responsive designs without needing extensive coding knowledge." },
    { className: "cube14", icon: "https://ahaanmedia.com/asc/technology/Adobe.png", heading: "Adobe", heading2: "Adobe", heading3: "Adobe", color: "#FA0700", description: "Adobe is a leading software company known for its creative tools like Photoshop, Illustrator, Premiere Pro, and Acrobat. It provides powerful solutions for design, video editing, web development, and document management, empowering creatives and professionals across various industries worldwide." },
  ];

  const handleCubeClick = (cube) => {
    setSelectedCube(cube);
  };

  const closeModal = () => {
    setSelectedCube(null);
  };

  return (
    <div className="multi-cube-wrapper">
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
  );
};

export default Uiux;

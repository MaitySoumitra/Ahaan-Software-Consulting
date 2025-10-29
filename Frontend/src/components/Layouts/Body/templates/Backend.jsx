import React, { useState } from 'react'
import { FiX } from "react-icons/fi";
import "./templates.css";

const Backend = () => {

  const [selectedCube, setSelectedCube] = useState(null);

    const cubePositions = [
        { className: "cube15", icon: "https://ahaanmedia.com/asc/technology/Node.png", heading: "Node", heading2: "JS", color: "#5BAF4A", heading3: "Node Js", description: "Node.js is a JavaScript runtime built on Chrome's V8 engine, enabling server-side development. It allows developers to use JavaScript for both front-end and back-end, offering fast, scalable applications, especially for real-time, data-intensive services like APIs and web servers." },
        { className: "cube16", icon: "https://ahaanmedia.com/asc/technology/Python.png", heading: "Python", heading2: "Python", color: "#336C99",  heading3: "Python", description: "Python is a versatile, high-level programming language known for its readability and simplicity. It supports multiple programming paradigms and is widely used in web development, data science, automation, machine learning, and scripting, making it ideal for both beginners and professionals." },
        { className: "cube17", icon: "https://ahaanmedia.com/asc/technology/Mysql.png", heading: "Mysql", heading2: "Mysql", color: "#CC9338",  heading3: "MySql", description: "MySQL is an open-source relational database management system (RDBMS) used for storing and managing structured data. It uses SQL queries for data manipulation and is widely used in web applications, offering scalability, reliability, and robust performance for various projects." },
        { className: "cube18", icon: "https://ahaanmedia.com/asc/technology/Mongodb.png", heading: "Mongo", heading2: "DB", color: "#489C3A",  heading3: "Mongo DB", description: "MongoDB is a NoSQL, document-based database designed for handling large volumes of unstructured or semi-structured data. It stores data in flexible, JSON-like documents, offering scalability, high performance, and ease of use for modern applications and real-time analytics." },
        { className: "cube19", icon: "https://ahaanmedia.com/asc/technology/Express.png", heading: "Express", heading2: "JS", color: "#1C3A62",  heading3: "Express JS", description: "Express.js is a lightweight, flexible Node.js web application framework. It simplifies routing, middleware management, and HTTP request handling, making it easier to build scalable, fast, and maintainable server-side applications, particularly for APIs and RESTful services."},
        { className: "cube20", icon: "https://ahaanmedia.com/asc/technology/Php.png", heading: "Php", heading2: "Php", color: "#8892BD",  heading3: "Php", description: "PHP is a server-side scripting language used for web development, enabling dynamic content generation. It is widely used to create interactive websites, handle forms, and interact with databases. PHP is embedded within HTML and offers extensive frameworks for rapid development." },
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

export default Backend
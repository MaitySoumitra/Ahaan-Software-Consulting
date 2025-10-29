import React, { useState } from 'react'
import { FiX } from "react-icons/fi";
import "./templates.css";

const Cms = () => {

  const [selectedCube, setSelectedCube] = useState(null);

    const cubePositions = [
        { className: "cube21", icon: "https://ahaanmedia.com/asc/technology/Wordpress.png", heading: "Word", heading2: "Press", color: "#00749A", heading3: "Wordpress", description: "WordPress is a popular open-source content management system (CMS) used for building websites and blogs. It offers customizable themes, plugins, and an intuitive interface, allowing users to create and manage content easily without extensive technical knowledge." },
        { className: "cube22", icon: "https://ahaanmedia.com/asc/technology/Shopify.png", heading: "Shopify", heading2: "Shopify", color: "#4C812A", heading3: "Shopify", description: "Shopify is an e-commerce platform that enables businesses to create, manage, and scale online stores. It offers customizable templates, secure payment processing, and integrated tools for inventory management, marketing, and sales, making it ideal for entrepreneurs and enterprises alike." },
        { className: "cube23", icon: "https://ahaanmedia.com/asc/technology/Woo.png", heading: "Woo", heading2: "Woo", color: "#9A5C8E",  heading3: "Woo-commerce", description: "WooCommerce is an open-source WordPress plugin that transforms a website into a fully functional e-commerce store. It offers customizable features for product management, payments, shipping, and inventory, making it an ideal solution for small to large online businesses." },
        { className: "cube24", icon: "https://ahaanmedia.com/asc/technology/Odoo.png", heading: "Odoo", heading2: "Odoo", color: "#A85291", heading3: "Odoo", description: "Odoo is an open-source suite of business applications that includes modules for accounting, inventory, sales, CRM, and more. It offers an integrated, customizable platform to streamline business operations, improve efficiency, and scale across various industries and company sizes." },
        { className: "cube25", icon: "https://ahaanmedia.com/asc/technology/Webflow.png", heading: "Web", heading2: "flow", color: "#146EF5", heading3: "Webflow", description: "Webflow is a web design and development platform that allows users to create responsive websites visually. It combines design, CMS, and e-commerce capabilities with a powerful no-code editor, enabling designers to build fully functional sites without coding knowledge." },
        { className: "cube26", icon: "https://ahaanmedia.com/asc/technology/Magento.png", heading: "Magento", heading2: "Magento", color: "#F15D23", heading3: "Magento", description: "Magento is an open-source e-commerce platform that provides businesses with customizable solutions for building and managing online stores. It offers advanced features like product management, SEO optimization, and multi-store capabilities, making it ideal for large-scale and complex e-commerce websites." },
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

export default Cms
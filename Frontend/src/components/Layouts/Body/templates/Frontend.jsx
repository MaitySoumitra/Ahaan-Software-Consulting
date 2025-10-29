import React,{ useState } from 'react'
import { FiX } from "react-icons/fi";
import "./templates.css";

const Frontend = () => {

  const [selectedCube, setSelectedCube] = useState(null);

    const cubePositions = [
        { className: "cube1", icon: "https://ahaanmedia.com/asc/technology/Next.png", heading: "Next", heading2: "JS", color: "#000000", heading3: "Next Js", description: "Next.js is a powerful React framework for building fast, scalable web applications. It offers server-side rendering, static site generation, and API routes. With built-in SEO optimization and performance features, Next.js simplifies modern web development for developers and businesses alike." },
        { className: "cube2", icon: "https://ahaanmedia.com/asc/technology/JS.png", heading: "Java", heading2: "Script", color: "#D3B62A", heading3: "Java Script", description: "JavaScript is a versatile programming language used for web development to create interactive and dynamic websites. It enables client-side scripting, allowing developers to build responsive features, manipulate HTML/CSS, and enhance user experience across browsers and devices." },
        { className: "cube3", icon: "https://ahaanmedia.com/asc/technology/React.png", heading: "React", heading2: "JS", color: "#4eb1cc", heading3: "React Js", description: "React.js is a JavaScript library for building user interfaces, primarily for single-page applications. It allows developers to create reusable components, manage application state, and efficiently update the UI, offering a fast, responsive, and scalable approach to front-end development."  },
        { className: "cube4", icon: "https://ahaanmedia.com/asc/technology/HTML.png", heading: "HTML 5", heading2: "HTML 5", color: "#e34c26", heading3: "HTML ", description: "HTML (HyperText Markup Language) is the standard language used to create and structure web pages. It defines the elements and content, such as text, images, and links, to be displayed in a web browser, forming the backbone of web development." },
        { className: "cube5", icon: "https://ahaanmedia.com/asc/technology/CSS.png", heading: "CSS 3", heading2: "CSS 3", color: "#2161AE",heading3: "CSS", description: "CSS (Cascading Style Sheets) is a stylesheet language used to control the presentation of HTML documents. It defines the layout, colors, fonts, and overall design, enhancing the visual appearance of web pages while separating content from styling." },
        { className: "cube6", icon: "https://ahaanmedia.com/asc/technology/Tailwind.png", heading: "Tail", heading2: "Wind", color: "#16B6B8", heading3: "Tailwind", description: "Tailwind CSS is a utility-first CSS framework that allows developers to design custom user interfaces quickly. It provides pre-defined classes for styling elements directly in HTML, enabling rapid development and reducing the need for writing custom CSS." },
        { className: "cube7", icon: "https://ahaanmedia.com/asc/technology/TS.png", heading: "Type", heading2: "Script", color: "#007acc", heading3: "Type Script", description: "TypeScript is a superset of JavaScript that adds static typing and advanced features to enhance code quality and maintainability. It compiles to JavaScript, offering improved error checking, better tooling, and support for large-scale applications and modern development practices." },
        { className: "cube8", icon: "https://ahaanmedia.com/asc/technology/Nuxt.png", heading: "Nuxt", heading2: "JS", color: "#00c58e", heading3: "Nuxt JS", description: "Nuxt.js is a framework built on top of Vue.js for creating server-side rendered (SSR) applications. It simplifies development with features like automatic routing, static site generation, and optimized performance, making it ideal for building fast, SEO-friendly web apps." },
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

export default Frontend
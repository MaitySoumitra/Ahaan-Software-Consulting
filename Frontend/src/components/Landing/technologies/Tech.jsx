import React from 'react';
import './Tech.css';

const images = [
  { src: "https://ahaanmedia.com/asc/Landing/html.jpeg", alt: 'HTML' },
  { src: "https://ahaanmedia.com/asc/Landing/css.jpeg", alt: 'CSS' },
  { src: "https://ahaanmedia.com/asc/Landing/javascript.jpeg", alt: 'JavaScript' },
  { src: "https://ahaanmedia.com/asc/Landing/bootstrap.jpeg", alt: 'Bootstrap' },
  { src: "https://ahaanmedia.com/asc/Landing/php.jpeg", alt: 'PHP' },
  { src: "https://ahaanmedia.com/asc/Landing/figma.jpeg", alt: 'Figma' },
  { src: "https://ahaanmedia.com/asc/Landing/node.jpeg", alt: 'Node.js' },
  { src: "https://ahaanmedia.com/asc/Landing/react.jpeg", alt: 'React' },
  { src: "https://ahaanmedia.com/asc/Landing/mongo.jpeg", alt: 'MongoDB' },
  { src: "https://ahaanmedia.com/asc/Landing/oddo.jpeg", alt: 'Oddo' },
  { src: "https://ahaanmedia.com/asc/Landing/shopify.jpeg", alt: 'Shopify' },
  { src: "https://ahaanmedia.com/asc/Landing/webflow.jpeg", alt: 'Webflow' },
  { src: "https://ahaanmedia.com/asc/Landing/wordpress.jpeg", alt: 'WordPress' },
];

const Tech = () => {
  return (
    <div className="tech-section py-5">
      <div className="container">
        <h2 className="tech-heading text-center mb-4">Technologies We Use</h2>
        <div className="marquee-carousel">
          <div className="marquee-container">
            {/* Duplicate images for smooth infinite scrolling */}
            {[...images, ...images].map((image, index) => (
              <div className="marquee-item" key={index}>
                <img src={image.src} alt={image.alt} className="marquee-image-tech" />
                <p className='marquee-text-tech'>{image.alt}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tech;

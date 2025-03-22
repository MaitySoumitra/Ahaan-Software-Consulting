import React from 'react';
import html from '../../../assets/Tech/html.png';
import css from '../../../assets/Tech/css.png';
import js from '../../../assets/Tech/javascript.png';
import php from '../../../assets/Tech/php.png';
import wordpress from '../../../assets/Tech/wordpress.png';
import react from '../../../assets/Tech/react.png';
import mongodb from '../../../assets/Tech/mongo.png';
import shopify from '../../../assets/Tech/shopify.png';
import framer from '../../../assets/Tech/framer.png';
import webflow from '../../../assets/Tech/webflow.png';
import oddo from '../../../assets/Tech/oddo.png';
import node from '../../../assets/Tech/node.png';
import bootstrap from '../../../assets/Tech/bootstrap.png';
import figma from '../../../assets/Tech/figma.png';
import './Tech.css';

const images = [
  { src: html, alt: 'HTML' },
  { src: css, alt: 'CSS' },
  { src: js, alt: 'JavaScript' },
  { src: bootstrap, alt: 'Bootstrap' },
  { src: php, alt: 'PHP' },
  { src: figma, alt: 'Figma' },
  { src: node, alt: 'Node.js' },
  { src: react, alt: 'React' },
  { src: mongodb, alt: 'MongoDB' },
  { src: oddo, alt: 'Oddo' },
  { src: shopify, alt: 'Shopify' },
  { src: webflow, alt: 'Webflow' },
  { src: framer, alt: 'Framer' },
  { src: wordpress, alt: 'WordPress' },
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

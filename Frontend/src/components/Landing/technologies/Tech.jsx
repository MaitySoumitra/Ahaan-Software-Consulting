import React from 'react';
import html from '../../../assets/html.webp';
import css from '../../../assets/css.webp';
import js from '../../../assets/js.webp';
import jquery from '../../../assets/jquery.webp';
import php from '../../../assets/php.webp';
import mysql from '../../../assets/mysql.webp';
import nodejs from '../../../assets/nodejs.webp';
import react from '../../../assets/react.webp';
import mongodb from '../../../assets/mongo-db.webp';
import angularjs from '../../../assets/angularjs.webp';
import shopify from '../../../assets/shopify.webp';
import wordpress from '../../../assets/wordpress.webp';
import './Tech.css';

const images = [
  { src: html, alt: 'HTML' },
  { src: css, alt: 'CSS' },
  { src: js, alt: 'JavaScript' },
  { src: jquery, alt: 'jQuery' },
  { src: php, alt: 'PHP' },
  { src: mysql, alt: 'MySQL' },
  { src: nodejs, alt: 'Node.js' },
  { src: react, alt: 'React' },
  { src: mongodb, alt: 'MongoDB' },
  { src: angularjs, alt: 'Angular' },
  { src: shopify, alt: 'Shopify' },
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
                <img src={image.src} alt={image.alt} className="marquee-image" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tech;

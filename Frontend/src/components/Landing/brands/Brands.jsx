import React from 'react';
import './Brands.css';

const images = [
  { src: "https://ahaanmedia.com/asc/Landing/14.png", alt: 'Alen' },
  { src: "https://ahaanmedia.com/asc/Landing/20.png", alt: 'Hill' },
  { src: "https://ahaanmedia.com/asc/Landing/12.png", alt: 'Heli' },
  { src: "https://ahaanmedia.com/asc/Landing/13.png", alt: 'EK' },
  { src: "https://ahaanmedia.com/asc/Landing/11.png", alt: 'JN' },
  { src: "https://ahaanmedia.com/asc/Landing/17.png", alt: 'LJ' },
  { src: "https://ahaanmedia.com/asc/Landing/18.png", alt: 'Wolf' },
  { src: "https://ahaanmedia.com/asc/Landing/15.png", alt: 'IndOil' },
  { src: "https://ahaanmedia.com/asc/Landing/16.png", alt: 'ONGC' },
  { src: "https://ahaanmedia.com/asc/Landing/19.png", alt: 'HP' },
];

const Brands = () => {
  return (
    <div className="brands-section py-5">
      <div className="container">
        <h2 className="brands-heading text-center mb-4">Brands Trusted with Us</h2>
        <div className="marquee-carousel">
          <div className="marquee-container">
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

export default Brands;

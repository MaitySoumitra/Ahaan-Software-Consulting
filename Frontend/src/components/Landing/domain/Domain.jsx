import React from 'react';
import './Domain.css';

const images = [
  { src: "https://ahaanmedia.com/asc/Landing/4.png", alt: 'Automobile', text: 'Automobile' },
  { src: "https://ahaanmedia.com/asc/Landing/5.png", alt: 'BPO Sectors', text: 'BPO Sectors' },
  { src: "https://ahaanmedia.com/asc/Landing/6.png", alt: 'Ecommerce', text: 'Ecommerce' },
  { src: "https://ahaanmedia.com/asc/Landing/7.png", alt: 'Education', text: 'Education' },
  { src: "https://ahaanmedia.com/asc/Landing/9.png", alt: 'Healthcare', text: 'Healthcare' },
  { src: "https://ahaanmedia.com/asc/Landing/8.png", alt: 'Real Estate', text: 'Real Estate' },
  { src: "https://ahaanmedia.com/asc/Landing/1.png", alt: 'Manufacture', text: 'Manufacture' },
  { src: "https://ahaanmedia.com/asc/Landing/10.png", alt: 'Public Sector', text: 'Public Sector' },
  { src: "https://ahaanmedia.com/asc/Landing/3.png", alt: 'Sports', text: 'Sports' },
  { src: "https://ahaanmedia.com/asc/Landing/2.png", alt: 'Tours & Travels', text: 'Tours & Travels' },
];

const Domain = () => {
  return (
    <div className="domain-section py-5">
      <div className="container">
        <h2 className="domain-heading text-center mb-4">Explore Our Domains</h2>
        <div className="marquee-carousel">
          <div className="marquee-container">
            {/* Duplicate images for smooth infinite scrolling */}
            {[...images, ...images].map((image, index) => (
              <div className="marquee-item" key={index}>
                <img src={image.src} alt={image.alt} className="marquee-image-domain" />
                <p className='domain-text'>{image.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Domain;

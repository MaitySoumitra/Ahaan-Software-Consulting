import React from 'react';
import automobile from '../../../assets/4.png';
import bpo from '../../../assets/5.png';
import ecom from '../../../assets/6.png';
import education from '../../../assets/7.png';
import estate from '../../../assets/9.png';
import health from '../../../assets/8.png';
import manufacture from '../../../assets/1.png';
import people from '../../../assets/10.png';
import sports from '../../../assets/3.png';
import travel from '../../../assets/2.png';
import './Domain.css';

const images = [
  { src: automobile, alt: 'Automobile', text: 'Automobile' },
  { src: bpo, alt: 'BPO Sectors', text: 'BPO Sectors' },
  { src: ecom, alt: 'Ecommerce', text: 'Ecommerce' },
  { src: education, alt: 'Education', text: 'Education' },
  { src: health, alt: 'Healthcare', text: 'Healthcare' },
  { src: estate, alt: 'Real Estate', text: 'Real Estate' },
  { src: manufacture, alt: 'Manufacture', text: 'Manufacture' },
  { src: people, alt: 'Public Sector', text: 'Public Sector' },
  { src: sports, alt: 'Sports', text: 'Sports' },
  { src: travel, alt: 'Tours & Travels', text: 'Tours & Travels' },
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

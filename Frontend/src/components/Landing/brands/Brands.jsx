import React from 'react';
import alen from '../../../assets/14.png';
import hill from '../../../assets/20.png';
import heli from '../../../assets/12.png';
import ek from '../../../assets/13.png';
import lj from '../../../assets/11.png';
import indoil from '../../../assets/17.png';
import jn from '../../../assets/18.png';
import wolf from '../../../assets/15.png';
import ongc from '../../../assets/16.png';
import hp from '../../../assets/19.png';
import './Brands.css';

const images = [
  { src: alen, alt: 'Alen' },
  { src: hill, alt: 'Hill' },
  { src: heli, alt: 'Heli' },
  { src: ek, alt: 'EK' },
  { src: jn, alt: 'JN' },
  { src: lj, alt: 'LJ' },
  { src: wolf, alt: 'Wolf' },
  { src: indoil, alt: 'IndOil' },
  { src: ongc, alt: 'ONGC' },
  { src: hp, alt: 'HP' },
];

const Brands = () => {
  return (
    <div className="brands-section py-5">
      <div className="container">
        <h2 className="brands-heading text-center mb-4">Brands Trusted with Us</h2>
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

export default Brands;

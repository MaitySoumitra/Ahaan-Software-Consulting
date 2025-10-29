import React, { useState, useEffect } from 'react';
import './CarouselComponent.css';

const CarouselComponent = () => {
  const images = [
    { src: 'https://ahaanmedia.com/asc/gallery/gallery1.jpg', alt: 'Slide 1' },
    { src: 'https://ahaanmedia.com/asc/gallery/gallery2.jpg', alt: 'Slide 2' },
    { src: 'https://ahaanmedia.com/asc/gallery/gallery3.jpg', alt: 'Slide 3' },
    { src: 'https://ahaanmedia.com/asc/gallery/gallery4.jpg', alt: 'Slide 4' },
    { src: 'https://ahaanmedia.com/asc/gallery/gallery5.jpg', alt: 'Slide 5' },
    { src: 'https://ahaanmedia.com/asc/gallery/gallery6.jpg', alt: 'Slide 6' },
  ];

  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 4;

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setStartIndex((prevIndex) =>
      (prevIndex - 1 + images.length) % images.length
    );
  };

  const getVisibleImages = () => {
    const extended = [...images, ...images];
    return extended.slice(startIndex, startIndex + visibleCount);
  };

  return (
    <div className="custom-carousel-wrapper position-relative">
      <div className="carousel-header text-center">
        <h2 className="carousel-title">The Asia Business Show Singapore 2024</h2>
        <p className="carousel-subtitle">
        Driven to be future-ready, and push beyond the building blocks of technology, digital, and marketing, Ahaan Software Consulting proudly participated in The Asia Business Show 2024 in Singapore—the powerhouse of innovation and enterprise!
        </p>
      </div>

      <button className="carousel-control prev" onClick={handlePrev}>
        &#8249;
      </button>

      <div className="carousel-track">
        {getVisibleImages().map((image, index) => (
          <div className="carousel-slide" key={index}>
            <img src={image.src} alt={image.alt} className="carousel-img" />
          </div>
        ))}
      </div>

      <button className="carousel-control next" onClick={handleNext}>
        &#8250;
      </button>
    </div>
  );
};

export default CarouselComponent;

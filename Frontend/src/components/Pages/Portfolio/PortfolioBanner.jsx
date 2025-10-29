import React, { useState, useEffect } from 'react';
import './PortfolioBanner.css';

// Messages in the bubble
const messages = ['Thinking...', 'Analyzing...', 'Innovating...', 'Building...'];

// Responsive bubble positions
const bubblePositionsDesktop = [
  { top: '20%', right: '75%' },
  { top: '10%', right: '85%' },
  { top: '5%', right: '65%' },
  { top: '25%', right: '45%' },
];

const bubblePositionsTablet = [
  { top: '18%', right: '65%' },
  { top: '8%', right: '68%' },
  { top: '3%', right: '45%' },
  { top: '20%', right: '35%' },
];

const bubblePositionsPhone = [
  { top: '22%', right: '70%' },
  { top: '5%', right: '60%' },
  { top: '2%', right: '40%' },
  { top: '25%', right: '40%' },
];

// Custom hook to detect device type
const useDeviceType = () => {
  const [device, setDevice] = useState('desktop');

  useEffect(() => {
    const updateDevice = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setDevice('phone');
      } else if (width < 992) {
        setDevice('tablet');
      } else {
        setDevice('desktop');
      }
    };

    updateDevice();
    window.addEventListener('resize', updateDevice);
    return () => window.removeEventListener('resize', updateDevice);
  }, []);

  return device;
};

const PortfolioBanner = () => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [positionIndex, setPositionIndex] = useState(0);
  const device = useDeviceType();

  // Select bubble positions based on device
  const bubblePositions =
    device === 'phone'
      ? bubblePositionsPhone
      : device === 'tablet'
      ? bubblePositionsTablet
      : bubblePositionsDesktop;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndex((prev) => (prev + 1) % messages.length);
      setPositionIndex((prev) => (prev + 1) % bubblePositions.length);
    }, 2000); // change every 2 seconds

    return () => clearInterval(interval);
  }, [bubblePositions]);

  const currentStyle = bubblePositions[positionIndex];

  return (
    <section className="portfolio-banner d-flex align-items-center">
      <div className="container">
        <div className="row align-items-center">

          {/* Left Text */}
          <div className="col-lg-8 text-white text-section">
            <h1 className="banner-title">
              Empowering Ideas with <span className="highlight">Technological Excellence</span>
            </h1>
            <p className="banner-subtext">
              In today’s competitive business, the demand for efficient and cost-effective IT
              solutions has never been more critical.
            </p>
            <a href="/" className="btn btn-primary explore-btn">Explore More</a>
          </div>

          {/* Right Image + Bubble */}
          <div className="col-lg-4 text-center position-relative">
            <img
              src="https://ahaanmedia.com/asc/All/guy.png"
              alt="Banner Person"
              className="img-fluid banner-img"
            />
            <div className="thinking-bubble" style={currentStyle}>
              <p>{messages[currentMessageIndex]}</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PortfolioBanner;

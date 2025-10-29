import React, { useEffect, useState } from 'react';
import './Preloader.css';

const Preloader = () => {
  const [showPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPreloader(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (!showPreloader) return null;

  return (
    <div className="preloader-container">
      <div className="loader">
        <span>a</span>
        <span>h</span>
        <span>a</span>
        <span>a</span>
        <span>n</span>
      </div>
    </div>
  );
};

export default Preloader;

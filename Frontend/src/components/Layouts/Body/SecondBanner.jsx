import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import "./Secondbanner.css";

const CallToAction = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isOnlyMObile, setIsOnlyMobile] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      setIsOnlyMobile(window.innerWidth <= 450);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleGoToContact = () => {
    navigate('/contact');
  };

  return (
    <div className="second-banner-req-call">
      <div className="second-banner-container">
        <div className="second-banner-call-details">
          <h3 className="whychooseus-label">Ready to Innovate Your Business?</h3>
          <div className="second-banner-phone-numbers">
            <p target="_blank" onClick={() => window.open( "https://wa.me/13214210740", "_blank")}>
               +13214210740
            </p>
            <p onClick={() => window.open( "https://wa.me/919830371143", "_blank")}>
               +919830371143
            </p>
            <p onClick={() => window.open( "https://wa.me/6590745876", "_blank")}>
               +6590745876
            </p>
          </div>
        </div>

        <a className=" newsletter-button" href="/contact">
        <span>  {isOnlyMObile ? "Contact" : "Contact Now"} </span>
        </a>
      </div>
    </div>
  );
};

export default CallToAction;

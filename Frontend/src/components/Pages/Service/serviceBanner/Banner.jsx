import React from "react";
import { Container } from "react-bootstrap";
import "./Banner.css"; 
const Banner = () => {
  const bannerStyle = {
    backgroundImage: `url(https://ahaanmedia.com/asc/Banner/Service-Banner.jpg`,

  };

  return (
    <div className="banner" style={bannerStyle}>
      <Container>
        <h1 className="banner-heading">
          Our <span>Services</span>
        </h1>
      </Container>
    </div>
  );
};

export default Banner;

import React from "react";
import { Container } from "react-bootstrap";
import "./Banner.css";

const Banner = () => {
  const bannerStyle = {
  backgroundImage: `url("https://ahaanmedia.com/asc/Banner/Service-Banner.jpg")`,
};

  return (
    <section className="banner-section" style={bannerStyle}>
      {/* ---- 4 animated wave layers ---- */}
      <div className="wave wave1"></div>
      <div className="wave wave2"></div>
      <div className="wave wave3"></div>
      <div className="wave wave4"></div>

      {/* ---- Dark overlay ---- */}
      <div className="banner-overlay"></div>

      {/* ---- Text content ---- */}
      <Container className="service-banner-content">
        <h1 className="banner-heading">
          Our Services
        </h1>
      </Container>
    </section>
  );
};

export default Banner;
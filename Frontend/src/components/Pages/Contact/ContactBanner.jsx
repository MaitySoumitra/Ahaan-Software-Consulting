import React from "react";
import { Container } from "react-bootstrap";
import "./ContactBanner.css";

const ContactBanner = () => {
  const bannerStyle = {
    backgroundImage: `url(https://ahaanmedia.com/asc/Banner/contactus-Banner.png)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <section className="contact-banner-section" style={bannerStyle}>
      {/* 4 animated wave layers */}
      <div className="wave wave1"></div>
      <div className="wave wave2"></div>
      <div className="wave wave3"></div>
      <div className="wave wave4"></div>

      {/* Dark overlay */}
      <div className="banner-overlay"></div>

      {/* Text */}
      <Container className="contact-banner-content">
        <h1 className="banner-heading">
          Contact Us
        </h1>
      </Container>
    </section>
  );
};

export default ContactBanner;
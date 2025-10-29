import React from 'react';
import { Container } from 'react-bootstrap';
import './ContactBanner.css';

const ContactBanner = () => {
  const bannerStyle = {
    backgroundImage: `url(https://ahaanmedia.com/asc/Banner/contactus-Banner.png)`,
  };

  return (
    <div className="Contact-Banner text-white text-center" style={bannerStyle}>
      <Container>
        <h1 className="banner-heading">
          Contact <span>Us</span>
        </h1>
      </Container>
    </div>
  );
};

export default ContactBanner;

import React from 'react';
import { Container } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
  return (
    <div className="About-Banner">
      <Container className="text-center text-white">
        <h1 className="banner-heading">About <span> Us</span></h1>
      </Container>
    </div>
  );
};

export default Banner;

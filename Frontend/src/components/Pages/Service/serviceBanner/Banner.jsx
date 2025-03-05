import React from 'react';
import { Container } from 'react-bootstrap';
import bg from '../../../../assets/bg.png';
import './Banner.css';

const Banner = () => {
  return (
    <div className="banner">
      <Container className="text-center text-white">
        <h1 className="banner-heading">Our <span> Services</span></h1>
      </Container>
    </div>
  );
};

export default Banner;

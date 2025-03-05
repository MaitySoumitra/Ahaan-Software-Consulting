import React from 'react';
import { Container } from 'react-bootstrap';
import './IndustryBanner.css';
import "bootstrap/dist/css/bootstrap.min.css";
const IndustryBanner = () => {
  return (
    <>
    <div className="industry-banner">
      <Container className="text-center text-white">
        <h1 className="banner-heading">Our <span> Industry</span></h1>
      </Container>
      </div>
      <div className="container industry-section text-center">
      <h3 className="fw-bold industry-heading">
        Enterprise Software Development Services for Every Industry
      </h3>
      <p className="industry-text text-muted">
        Whether you require a complex enterprise software development solution or seamless software integration, we will take your business to the next level of success with IT consulting services & software development solutions.
      </p>
    </div>
    </>
    
  );
};

export default IndustryBanner;

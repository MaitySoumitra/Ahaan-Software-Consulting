import React from "react";
import { Container } from "react-bootstrap";
import "./IndustryBanner.css";
import "bootstrap/dist/css/bootstrap.min.css";
const IndustryBanner = () => {
  return (
    <>
      <div className="industry-banner">
        <Container className="text-center text-white">
          <h1 className="banner-heading">
            Our <span> Industry</span>
          </h1>
        </Container>
      </div>
      <div className="container industry-section text-center">
        <h3 className="fw-bold industry-heading">
          Enterprise Software Development Services for Every Industry
        </h3>
        <p className="industry-text text-muted">
          True success comes from software solutions that deliver real impact!
          Whether it's enterprise software development or seamless integration,
          we build solutions tailored to your business goals—ensuring measurable
          results across industries.
        </p>
      </div>
    </>
  );
};

export default IndustryBanner;

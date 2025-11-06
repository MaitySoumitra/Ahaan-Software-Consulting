import React from "react";
import { Container } from "react-bootstrap";
import "./IndustryBanner.css";

const IndustryBanner = () => {
  const bannerStyle = {
    backgroundImage: `url(https://ahaanmedia.com/asc/Banner/industry-Banner.png)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <>
      {/* BANNER WITH WAVES */}
      <section className="industry-banner-section" style={bannerStyle}>
        {/* 4 animated wave layers */}
        <div className="wave wave1"></div>
        <div className="wave wave2"></div>
        <div className="wave wave3"></div>
        <div className="wave wave4"></div>

        {/* Dark overlay */}
        <div className="banner-overlay"></div>

        {/* Text */}
        <Container className="industry-banner-content">
          <h1 className="industry-banner-heading" data-text="Our Industry">Our Industry</h1>
        </Container>
      </section>

      {/* BELOW BANNER SECTION */}
      <div className="container industry-section text-center section-header-tech">
        <h6 className="subtitle">
          Industry Service <span className="divider"></span>
        </h6>
        <h3 className="fw-bold industry-heading">
          Enterprise Software Development Services
        </h3>
        <p className="image-carousel-content">
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

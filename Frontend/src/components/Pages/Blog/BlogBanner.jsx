import React from "react";
import { Container } from "react-bootstrap";
import "./BlogBanner.css";

const BlogBanner = () => {
  const bannerStyle = {
    backgroundImage: `url(https://ahaanmedia.com/asc/Banner/blog-banner.jpg)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <section className="blog-banner-section" style={bannerStyle}>
      {/* 4 animated wave layers */}
      <div className="wave wave1"></div>
      <div className="wave wave2"></div>
      <div className="wave wave3"></div>
      <div className="wave wave4"></div>

      {/* Dark overlay */}
      <div className="banner-overlay"></div>

      {/* Text */}
      <Container className="blog-banner-content">
        <h1 className="banner-heading">
          Our Blogs
        </h1>
      </Container>
    </section>
  );
};

export default BlogBanner;
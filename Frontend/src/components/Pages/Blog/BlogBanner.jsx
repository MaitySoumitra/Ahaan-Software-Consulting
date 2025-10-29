import React from 'react';
import { Container } from 'react-bootstrap';
import './BlogBanner.css';

const BlogBanner = () => {
  const bannerStyle = {
    backgroundImage: `url(https://ahaanmedia.com/asc/Banner/blog-banner.jpg)`, // Replace with your blog banner image
  };

  return (
    <div className="Blog-Banner text-white text-center" style={bannerStyle}>
      <Container>
        <h1 className="banner-heading">
          Our <span>Blogs</span>
        </h1>
      </Container>
    </div>
  );
};

export default BlogBanner;

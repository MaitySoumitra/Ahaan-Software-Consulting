import React from 'react';
import { Container } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
  const bannerStyle = {
    backgroundImage: `url(https://ahaanmedia.com/asc/Banner/About-Banner.jpg)`
  };

  return (
    <div>
      <div className="About-Banner text-center text-white mb-5" style={bannerStyle}>
        <h1 className="banner-heading">About <span>Us</span></h1>
      </div>

      <Container>
        <div className="row align-items-center mb-5">
          <div className="col-md-6 team-discus-desktop">
            <img
              src="https://ahaanmedia.com/asc/All/group1.png"
              alt="Team Discussion"
              className="img-fluid rounded"
            />
          </div>
          <div className="col-md-6">
            <h2 className="title">Who Are We?</h2>
            <h3 className="subtitle">
              Your Tech, Development And Creative Transformation Partner!
            </h3>
            <p className="description">
              Welcome to Ahaan Software Consulting! With a crew of 50+ specialists, we’ve spent 6+ years crafting award-winning solutions for 200+ businesses worldwide. What defines us? We’re Tech Enthusiasts fuelled by passion, Brand Builders at heart, Creative Experts in execution, and Marketing Consultants at our core.
            </p>
            <p className="description">
              Innovation runs deep in our DNA, driving us to create tangible impact for your business. Fuelled by a passion for delivering real value, we collaborate with industry leaders, in-house specialists, and tech pioneers to push the boundaries of digital evolution.
            </p>
          </div>
          <div className="col-md-6 team-discus-mobile">
            <img
              src="https://ahaanmedia.com/asc/All/group2.png"
              alt="Team Discussion"
              className="img-fluid rounded"
            />
          </div>
        </div>

        <div className="row align-items-center">
          <div className="col-md-6">
            <h2 className="title">Our Mission & Vision</h2>
            <h4 className="mission-title">Mission</h4>
            <p className="description">
              Our mission is to deliver MORE—Growth, Revenue & Success! Aimed at driving your business forward, we optimize processes, people, and technology to create client-aligned solutions that reimagine workflows, modernize businesses, and transform experiences. Because when you win, we win!
            </p>
            <h4 className="vision-title">Vision</h4>
            <p className="description">
              We envision fostering a culture that shapes the way we create, collaborate, and innovate! Committed to delivering digital solutions with honesty, integrity, and accuracy, we uphold the highest standards of accountability, credibility, and ethical business practices. With excellence as our pursuit, we honor the dignity of labor, ensuring every effort creates meaningful impact and lasting success.
            </p>
          </div>
          <div className="col-md-6">
            <img
              src="https://ahaanmedia.com/asc/All/group2.png"
              alt="Business Vision"
              className="img-fluid rounded"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;

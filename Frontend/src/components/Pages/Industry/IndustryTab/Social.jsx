import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./TabContent.css";


  const gridcontent = [
    {
      imgSrc: "https://ahaanmedia.com/asc/Industry/SocialMediaPlatformDevelopment.png",
      title: 'Social Media Platform Development',
      description: 'Empower your network with feature-fit, scalable platforms. From real-time messaging and AI-driven content recommendations to seamless multimedia sharing, we build social networking solutions tailored for growth, engagement, and success.'
    },
    {
      imgSrc: "https://ahaanmedia.com/asc/Industry/ContentModeration&Compliance.webp",
      title: 'Content Moderation & Compliance ',
      description: 'Safeguard your users and maintain a safe digital space with AI-driven moderation, automated policy enforcement, and real-time threat detection—ensuring compliance with global regulations and platform integrity.'
    },
    {
      imgSrc: "https://ahaanmedia.com/asc/Industry/User-Engagement.webp",
      title: 'User Engagement & Monetization',
      description: 'Improve user retention and revenue with intelligent engagement tools. Our solutions include AI-powered ad targeting, gamification, and subscription-based models to boost user interaction and monetization potential.'
    },
    {
      imgSrc: "https://ahaanmedia.com/asc/Industry/DataSecurity&PrivacyProtection.jpg",
      title: 'Data Security & Privacy Protection',
      description: 'Establish user trust with enterprise-grade security solutions. We implement end-to-end encryption, blockchain-based identity management, and GDPR-compliant data handling to protect user information.'
    },

  ];

const Social = () => {
  return (
    <div className="ecommerce-section">
      <h2 className="fw-bold">Redefining Social Connectivity In Today’s Digital Age!</h2>
      <p className="text-muted">
      Social networking is the Internet, and businesses should adapt to stay ahead. From AI-powered engagement tools to immersive virtual experiences, our social media strategies and solutions empower platforms to create dynamic, personalized, and scalable digital communities. Let’s shape the future of social networking together!
      </p>
      <img src="https://ahaanmedia.com/asc/Industry/SocialNetworking.png" alt="E-Commerce" className="content-image" />

      <h2 className="fw-bold text-left Revitalize mt-3">
      Connect, Curate, And Communicate!   
      </h2>
      <p className="text-left text-muted">
      We help you tap beyond the social media boundaries. Leveraging next-gen technologies including, AI, Blockchain, and the metaverse, we maximize user engagement, streamline content moderation, and guarantee data privacy—creating a thriving and safe digital ecosystem. 
      </p>

      <h2 className="fw-bold text-left Revitalize mt-3">
      Create More Value With Our Solutions 
      </h2>
      {gridcontent.map((feature, index) => (
        <Row className="mb-4" key={index}>
          <Col md={6} className={index % 2 === 1 ? 'order-md-2' : ''}>
            <img src={feature.imgSrc} alt={feature.title} className="img-fluid" />
          </Col>
          <Col md={6} className={index % 2 === 1 ? 'order-md-1' : ''}>
            <h2 className="grids-heading">{feature.title}</h2>
            <p className="grids-content">{feature.description}</p>
          </Col>
        </Row>
      ))}
    </div>
  );
};

export default Social;

import React from "react";
import Constructions from "../../../../assets/images/banner2/banner2.png";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaHeadset, FaChartLine, FaShippingFast, FaShoppingCart } from "react-icons/fa";
import "./TabContent.css";
import Ecom1 from "../../../../assets/grids-image1.png";
import Ecom2 from "../../../../assets/grids-image2.png";
import Ecom3 from "../../../../assets/grids-image3.png";
import Ecom4 from "../../../../assets/grids-image4.png";
import Ecom5 from "../../../../assets/grids-image5.png";

const features = [
    {
      icon: <FaHeadset className="feature-icon" />,
      title: "Customer Support",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
    },
    {
      icon: <FaChartLine className="feature-icon" />,
      title: "Scalable Excellence",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
    },
    {
      icon: <FaShippingFast className="feature-icon" />,
      title: "Easy Tracking",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
    },
    {
      icon: <FaShoppingCart className="feature-icon" />,
      title: "Streamlined Checkouts",
      description: "Our platform provides a systematic order management process and an effective workflow, guaranteeing your business's smooth and efficient functioning.",
    },
    {
        icon: <FaShoppingCart className="feature-icon" />,
        title: "Streamlined Checkouts",
        description: "Our platform provides a systematic order management process and an effective workflow, guaranteeing your business's smooth and efficient functioning.",
      },
  ];

  const gridcontent = [
    {
      imgSrc: Ecom1,
      title: 'Social Media Platform Development',
      description: 'Empower your network with feature-fit, scalable platforms. From real-time messaging and AI-driven content recommendations to seamless multimedia sharing, we build social networking solutions tailored for growth, engagement, and success.'
    },
    {
      imgSrc: Ecom2,
      title: 'Content Moderation & Compliance ',
      description: 'Safeguard your users and maintain a safe digital space with AI-driven moderation, automated policy enforcement, and real-time threat detection—ensuring compliance with global regulations and platform integrity.'
    },
    {
      imgSrc: Ecom3,
      title: 'User Engagement & Monetization',
      description: 'Improve user retention and revenue with intelligent engagement tools. Our solutions include AI-powered ad targeting, gamification, and subscription-based models to boost user interaction and monetization potential.'
    },
    {
      imgSrc: Ecom4,
      title: 'Data Security & Privacy Protection',
      description: 'Establish user trust with enterprise-grade security solutions. We implement end-to-end encryption, blockchain-based identity management, and GDPR-compliant data handling to protect user information.'
    },
    // {
    //   imgSrc: Ecom5,
    //   title: 'Efficient Administration',
    //   description: 'Ensure an easy and smart integration with your current systems to achieve an efficient and error-free process.'
    // }
  ];

const Social = () => {
  return (
    <div className="ecommerce-section">
      <h2 className="fw-bold">Redefining Social Connectivity In Today’s Digital Age!</h2>
      <p className="text-muted">
      Social networking is the Internet, and businesses should adapt to stay ahead. From AI-powered engagement tools to immersive virtual experiences, our social media strategies and solutions empower platforms to create dynamic, personalized, and scalable digital communities. Let’s shape the future of social networking together!
      </p>
      <img src={Constructions} alt="E-Commerce" className="content-image" />

      <h2 className="fw-bold text-left Revitalize">
      Connect, Curate, And Communicate!   
      </h2>
      <p className="text-left text-muted">
      We help you tap beyond the social media boundaries. Leveraging next-gen technologies including, AI, Blockchain, and the metaverse, we maximize user engagement, streamline content moderation, and guarantee data privacy—creating a thriving and safe digital ecosystem. 
      </p>

      {/* <Row className="mt-4">
        {features.slice(0, 3).map((feature, index) => (
          <Col md={4} key={index}>
            <Card className="feature-card">
              <Card.Body>
                {feature.icon}
                <h5 className="fw-bold mt-3">{feature.title}</h5>
                <p className="text-muted">{feature.description}</p>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Row className="mt-3">
        {features.slice(3).map((feature, index) => (
          <Col md={6} key={index}>
            <Card className="feature-card horizontal">
            <Card.Body>
                {feature.icon}
                <h5 className="fw-bold mt-3">{feature.title}</h5>
                <p className="text-muted">{feature.description}</p>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row> */}

      <h2 className="fw-bold text-left Revitalize">
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
            <p className="grids-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
          </Col>
        </Row>
      ))}
    </div>
  );
};

export default Social;

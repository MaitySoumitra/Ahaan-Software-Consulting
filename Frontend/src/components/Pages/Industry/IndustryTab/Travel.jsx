import React from "react";
import TravelImage from "../../../../assets/images/banner2/Travel.png"
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaHeadset, FaChartLine, FaShippingFast, FaShoppingCart } from "react-icons/fa";
import "./TabContent.css";
import Ecom1 from "../../../../../public/Industry/Aviation.jpg";
import Ecom2 from "../../../../../public/Industry/Restaurant Services.jpeg";
import Ecom3 from "../../../../../public/Industry/Real Estate.jpg";

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
      title: 'Aviation',
      description: 'Driven by a mission to shape the future of air travel, we help aviation companies embrace industry shifts with advanced technologies. From enhancing passenger experiences and optimizing airline operations to revolutionizing MRO services and strengthening back-office processes, we deliver solutions that boost modern aviation businesses.'
    },
    {
      imgSrc: Ecom2,
      title: 'Restaurant Services ',
      description: 'With unmatched expertise in agile development, mobile app development, and digital transformation, we can empower your business to excel, thrive, and stay resilient in an ever-evolving market.'
    },
    {
      imgSrc: Ecom3,
      title: 'Real Estate ',
      description: 'Effortlessly manage your complex real estate or property portfolio with real-time analytics, automated workflows, and self-learning AI systems. Our expert consultants deliver comprehensive solutions across franchising, brokerage, facility management, and more!'
    },
    // {
    //   imgSrc: Ecom4,
    //   title: 'Adaptable Scalability',
    //   description: 'Ensure an easy and smart integration with your current systems to achieve an efficient and error-free process.'
    // },
    // {
    //   imgSrc: Ecom5,
    //   title: 'Efficient Administration',
    //   description: 'Ensure an easy and smart integration with your current systems to achieve an efficient and error-free process.'
    // }
  ];

const Travel = () => {
  return (
    <div className="ecommerce-section">
      <h2 className="fw-bold">Redefine Your Customer Experience in Travel & Hospitality</h2>
      <p className="text-muted">
      As the travel and hospitality sectors evolve, digital innovation is the key to ultimate success. From self-learning booking platforms to AI-powered chatbots, businesses can boost customer experiences while reducing costs. As India’s leading software development and consultancy company, we can help you navigate new opportunities and reinvent customer experience.
      </p>
      <img src={TravelImage} alt="E-Commerce" className="content-image" />

      {/* <h2 className="fw-bold text-left Revitalize">
      Comprehensive Solutions for Travel & Hospitality
      </h2>
      <p className="text-left text-muted">
        Our cutting-edge e-commerce solutions can revolutionize your in-store experience.
        Our clever solutions make online retail simple and entertaining, improving every
        stage of the buying experience, from smooth checkouts to real-time tracking.
        Watch your sales skyrocket as you enter a world where innovation and convenience collide!
      </p> */}

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

      <h2 className="fw-bold text-left Revitalize mt-3">
      Your Business Needs To Stay Dynamic In A Ecosystem
      </h2>
      {gridcontent.map((feature, index) => (
        <Row className="mb-4" key={index}>
          <Col md={6} className={index % 2 === 1 ? 'order-md-2' : ''}>
            <img src={feature.imgSrc} alt={feature.title} className="img-fluid" />
          </Col>
          <Col md={6} className={index % 2 === 1 ? 'order-md-1' : ''}>
            <h2 className="grids-heading">{feature.title}</h2>
            <p className="grids-content">{feature.description}</p>
            {/* <p className="grids-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p> */}
          </Col>
        </Row>
      ))}
    </div>
  );
};

export default Travel;

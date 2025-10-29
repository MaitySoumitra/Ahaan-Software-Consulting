import React from "react";

import { Container, Row, Col, Card } from "react-bootstrap";
import { FaHeadset, FaChartLine, FaShippingFast, FaShoppingCart } from "react-icons/fa";
import "./TabContent.css";


  const gridcontent = [
    {
      imgSrc: "https://ahaanmedia.com/asc/Industry/grids-image1.png",
      title: 'Industrial Manufacturing Solutions ',
      description: 'To stay infallible against digital disruption, shifting customer demands, and evolving markets, manufacturing leaders must embrace smarter, more connected products and transition from selling physical goods to service-driven models. Ahaan Software Consulting empowers you to leverage cutting-edge technologies like machine learning, analytics, IoT, and blockchain for a future-ready manufacturing ecosystem.'
    },
    {
      imgSrc: "https://ahaanmedia.com/asc/Industry/grids-image2.png",
      title: 'Process Manufacturing Solutions ',
      description: 'At Ahaan Software Consulting, we help process manufacturers transition from isolated automation systems to fully connected, intelligent operations. Our solutions streamline production, reduce costs, optimize plant efficiency, and minimize environmental impact for a smarter, more sustainable future.'
    },
  ];

const Manufacturing = () => {
  return (
    <div className="ecommerce-section">
      <h2 className="fw-bold">Make The Digital Transition To Manufacturing</h2>
      <p className="text-muted">
      Automation, analytics, AI, integrated systems, and smart factories—our advanced digital manufacturing solutions empower modern manufacturers to make data-driven decisions in real time. Partner with us to build a more human-centric, sustainable, and resilient manufacturing enterprise!
      </p>
      <img src="https://ahaanmedia.com/asc/Industry/Manufacturing.png" alt="E-Commerce" className="content-image" />

      <h2 className="fw-bold text-left Revitalize mt-3">
      Creating A Transformative, Sustainable Ecosystem
      </h2>
      <p className="text-left text-muted">
      Ahaan Software Consulting partners with global manufacturers to adapt and thrive with future-forward solutions. Harnessing robust technologies like quantum computing, GenAI, etc., we strive to foster sustainable resilience, growth, and innovation, shaping a purpose-led manufacturing ecosystem. 
      </p>

      <h2 className="fw-bold text-left Revitalize">
      Your Challenges, Our Solutions!
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

export default Manufacturing;

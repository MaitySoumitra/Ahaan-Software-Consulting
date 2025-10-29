import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaHeadset, FaChartLine, FaShippingFast, FaShoppingCart } from "react-icons/fa";
import "./TabContent.css";



  const gridcontent = [
    {
      imgSrc: "https://ahaanmedia.com/asc/Industry/grids-image1.png",
      title: 'Supply Chain Management Solutions',
      description: 'Enhance efficiency, visibility, and coordination across your supply chain with real-time tracking, demand forecasting, and AI-powered analytics.'
    },
    {
      imgSrc: "https://ahaanmedia.com/asc/Industry/grids-image2.png",
      title: 'Fleet & Transportation Management',
      description: 'Optimize route planning, reduce fuel costs, and boost fleet performance with GPS tracking, automated dispatching, predictive maintenance solutions, and more! '
    },
    {
      imgSrc: "https://ahaanmedia.com/asc/Industry/grids-image3.png",
      title: 'Warehouse & Inventory Management',
      description: 'Improve inventory accuracy, reduce storage costs, and streamline warehouse operations with IoT-enabled tracking, automated stock management, and cloud-based solutions.'
    },
    {
      imgSrc: "https://ahaanmedia.com/asc/Industry/grids-image4.png",
      title: 'Last-Mile Delivery Optimization',
      description: 'Ensure faster, more efficient deliveries with AI-driven route optimization, real-time tracking, and automated proof-of-delivery solutions.'
    },
  ];

const Logistics = () => {
  return (
    <div className="ecommerce-section">
      <h2 className="fw-bold">On The Road To Transformation With Future-Ready Logistics </h2>
      <p className="text-muted">
      By harnessing the power of logistics, transportation, and digital innovation, industry leaders are gaining real-time visibility into their supply chains, accessing critical data instantly, and accelerating order fulfillment worldwide. We help you leap ahead by leveraging the latest technologies like machine learning, IoT, blockchain, and predictive analytics for smarter, more efficient logistics operations.
      </p>
      <img src="https://ahaanmedia.com/asc/Industry/Logistics.png" alt="E-Commerce" className="content-image" />

      <h2 className="fw-bold text-left Revitalize mt-3">
      Leap Ahead In The Modern Logistics Ecosystem 
      </h2>
      <p className="text-left text-muted">
      Driven by quality and results, we modernize even the most complex logistical systems with advanced, data-driven solutions! Our targeted digital transportation technology solutions empower providers for unparalleled growth and limitless success.
      </p>

      <h2 className="fw-bold text-left Revitalize mt-3">
      Compete Against Industry Giants With Our Solutions 
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

export default Logistics;

import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaHeadset, FaChartLine, FaShippingFast, FaShoppingCart } from "react-icons/fa";
import "./TabContent.css";


  const gridcontent = [
    {
      imgSrc: "https://ahaanmedia.com/asc/Industry/grids-image1.png",
      title: 'Project Management Solutions',
      description: 'Enhance efficiency with advanced project management software, ensuring seamless scheduling, planning, and real-time collaboration for improved productivity and on-time delivery.'
    },
    {
      imgSrc: "https://ahaanmedia.com/asc/Industry/grids-image2.png",
      title: 'Construction Site Automation',
      description: 'Leverage automation and IoT-driven solutions to streamline site operations, monitor equipment, and enhance workforce productivity with real-time insights and predictive maintenance.'
    },
    {
      imgSrc: "https://ahaanmedia.com/asc/Industry/grids-image3.png",
      title: 'Building Information Modelling (BIM) Solutions',
      description: 'Optimize design, planning, and execution with cutting-edge BIM solutions, allowing for cost estimation, better visualization, and coordination across construction teams.'
    },
    {
      imgSrc: "https://ahaanmedia.com/asc/Industry/grids-image4.png",
      title: 'Safety & Compliance Management',
      description: 'Ensure workplace safety and regulatory compliance with AI-powered risk assessment tools, real-time safety monitoring, and automated reporting systems to minimize hazards.'
    },
  ];

const Construction = () => {
  return (
    <div className="ecommerce-section">
      <h2 className="fw-bold">Streamline Construction Operations With Smart Digital Solutions!</h2>
      <p className="text-muted">
      Achieve new level of agility with our tech-powered solutions, precisely tailored to the construction industry. Whether you're streamlining project management, optimizing resource allocation, or enhancing site safety, our custom solutions help you build smarter, faster, and safer! 
      </p>
      <img src="https://ahaanmedia.com/asc/Industry/Construction.png" alt="E-Commerce" className="content-image" />

      <h2 className="fw-bold text-left Revitalize mt-3">
      Embrace The Tech-Powered Future Of Construction
      </h2>
      <p className="text-left text-muted">
      Scaling tech transformation for construction companies is no longer optional – it’s necessary! At Ahaan Software Consulting, we go beyond just providing construction technology solutions—we empower contractors, engineers and developers with advanced digital tools to optimize workflows, reduce costs, and drive project success.
      </p>

      <h2 className="fw-bold text-left Revitalize">
      Unlock Big Uplifts In Construction With Our Solutions 
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

export default Construction;

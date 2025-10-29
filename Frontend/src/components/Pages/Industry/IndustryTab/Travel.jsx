import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaHeadset, FaChartLine, FaShippingFast, FaShoppingCart } from "react-icons/fa";
import "./TabContent.css";


  const gridcontent = [
    {
      imgSrc: "https://ahaanmedia.com/asc/Industry/Aviation.jpg",
      title: 'Aviation',
      description: 'Driven by a mission to shape the future of air travel, we help aviation companies embrace industry shifts with advanced technologies. From enhancing passenger experiences and optimizing airline operations to revolutionizing MRO services and strengthening back-office processes, we deliver solutions that boost modern aviation businesses.'
    },
    {
      imgSrc: "https://ahaanmedia.com/asc/Industry/RestaurantServices.jpeg",
      title: 'Restaurant Services ',
      description: 'With unmatched expertise in agile development, mobile app development, and digital transformation, we can empower your business to excel, thrive, and stay resilient in an ever-evolving market.'
    },
    {
      imgSrc: "https://ahaanmedia.com/asc/Industry/RealEstate.jpg",
      title: 'Real Estate ',
      description: 'Effortlessly manage your complex real estate or property portfolio with real-time analytics, automated workflows, and self-learning AI systems. Our expert consultants deliver comprehensive solutions across franchising, brokerage, facility management, and more!'
    },
  ];

const Travel = () => {
  return (
    <div className="ecommerce-section">
      <h2 className="fw-bold">Redefine Your Customer Experience in Travel & Hospitality</h2>
      <p className="text-muted">
      As the travel and hospitality sectors evolve, digital innovation is the key to ultimate success. From self-learning booking platforms to AI-powered chatbots, businesses can boost customer experiences while reducing costs. As India’s leading software development and consultancy company, we can help you navigate new opportunities and reinvent customer experience.
      </p>
      <img src="https://ahaanmedia.com/asc/Industry/Travel.png" alt="E-Commerce" className="content-image" />

   

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
          </Col>
        </Row>
      ))}
    </div>
  );
};

export default Travel;

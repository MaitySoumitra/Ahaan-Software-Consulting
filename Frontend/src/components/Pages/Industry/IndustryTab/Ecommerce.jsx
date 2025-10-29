import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./TabContent.css";

  const gridcontent = [
    {
      imgSrc: "https://ahaanmedia.com/asc/Industry/BoostYourGrowth.webp",
      title: 'Boost Your Growth ',
      description: 'Boost your retail stores digital presence and meet evolving market demands with our innovative, user-centric e-commerce development services—designed to scale your business.'
    },
    {
      imgSrc: "https://ahaanmedia.com/asc/Industry/GainMoreOnlineVisibility.webp",
      title: 'Gain More Online Visibility ',
      description: 'We create lucrative, visually compelling e-storefronts that enhance your retail store’s digital presence, attract millennial shoppers, and redefine their shopping experience.'
    },
    {
      imgSrc: "https://ahaanmedia.com/asc/Industry/StreamlineComplexInventoryOperations.png",
      title: 'Streamline Complex Inventory Operations ',
      description: 'Get a customized e-store and inventory management solution to monitor, manage, and procure store items in real-time. Stay ahead of the competition by streamlining retail processes and enhancing operational efficiency.'
    },
    {
      imgSrc: "https://ahaanmedia.com/asc/Industry/FlexiblePaymentOptions.jpg",
      title: 'Flexible Payment Options ',
      description: 'Empower your customers with flexible payment options through seamless payment gateway integration, boosting sales closure rates with our e-commerce app and software development services.'
    },
    {
      imgSrc: "https://ahaanmedia.com/asc/Industry/RedefineBuyingExperience.webp",
      title: 'Redefine Buying Experience ',
      description: 'Leverage AI-powered product search to display personalized buying options based on user activity, improving their overall shopping experience with custom-tailored recommendations.'
    }
  ];

const Ecommerce = () => {
  return (
    <div className="ecommerce-section">
      <h2 className="fw-bold">Your Trusted Growth Partner for E-commerce Development Solutions</h2>
      <p className="text-muted">
      As the experience economy evolves, we envision a future where online shopping transcends mere transactions—transforming into interactive, immersive experiences that captivate, engage, and inspire. In this next-generation E-store, each visit is more than just a purchase; it’s a personalized experience that redefines digital retail. 
      </p>
      <img src="https://ahaanmedia.com/asc/Industry/Ecomm.png" alt="E-Commerce" className="content-image" />

      <h2 className="fw-bold text-left Revitalize mt-3">
      Unlock Your Retail Business’ Full Potential 
      </h2>
      <p className="text-left text-muted">
      Whether you need an e-commerce app to enhance B2C engagement, a B2B portal to connect manufacturers and wholesalers, or a powerful retail ERP to streamline operations, we’ve got you covered! Partner with us to expand your e-business reach and grow your market share with scalable, flexible e-commerce solutions!
      </p>

      <h2 className="fw-bold text-left Revitalize">
      Conquer Retail Challenges With Custom E-Commerce Solutions
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

export default Ecommerce;

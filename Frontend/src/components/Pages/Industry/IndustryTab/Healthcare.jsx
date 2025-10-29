import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaHeadset, FaChartLine, FaShippingFast, FaShoppingCart } from "react-icons/fa";
import "./TabContent.css";


  const gridcontent = [
    {
      imgSrc: "https://ahaanmedia.com/asc/Industry/grids-image1.png",
      title: 'EHR Development  ',
      description: 'Empower healthcare experts with seamless access to patient medical history, past treatments and diagnosis reports through our cutting-edge EHR or Electronic Health Records Development Services. As a leading software provider, we streamline healthcare operations with automated workflows, real-time patient insights, and more! '
    },
    {
      imgSrc: "https://ahaanmedia.com/asc/Industry/grids-image2.png",
      title: 'Online Consultation  ',
      description: 'Revolutionize patient care with our software solutions for online consultation and telemedicine! Enable patients to connect with healthcare experts, receive remote care, and order medicines online – anytime, anywhere.'
    },
    {
      imgSrc: "https://ahaanmedia.com/asc/Industry/grids-image3.png",
      title: 'Medical Billing Software',
      description: 'Streamline your billing process with our medical billing software solution, ensuring secure payments and error-free transactions. Empower patients to track expenses and plan treatments effortlessly. '
    },
    {
      imgSrc: "https://ahaanmedia.com/asc/Industry/grids-image1.png",
      title: 'Hospital Management Software',
      description: 'Redefine patient experience and reimagine hospital operations with our hospital management software. From hassle-free digital appointment booking to secure billing, real-time inventory management, and smooth patient-doctor communication, we’ve got everything covered!'
    },
  ];

const Healthcare = () => {
  return (
    <div className="ecommerce-section">
      <h2 className="fw-bold">Improving Healthcare With Value-Centric Solutions! </h2>
      <p className="text-muted">
      We are revolutionizing modern healthcare operations with innovative digital solutions, making them more agile and effective. Focused on driving digital transformation in healthcare, we enhance care coordination while empowering staff. Collaborate with us to elevate the quality of healthcare for both providers and patients.
      </p>
      <img src="https://ahaanmedia.com/asc/Industry/Healthcare.png" alt="E-Commerce" className="content-image" />

      <h2 className="fw-bold text-left Revitalize mt-3">
      Our Healthcare Development Solutions 
      </h2>
      <p className="text-left text-muted">
      Enhance patient outcomes and optimize healthcare efficiency with our comprehensive healthcare software development services. By digitizing your healthcare operations, we streamline clinical administration, ensuring your venture stays ahead of industry changes and challenges.
      </p>

      

      <h2 className="fw-bold text-left Revitalize">
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

export default Healthcare;

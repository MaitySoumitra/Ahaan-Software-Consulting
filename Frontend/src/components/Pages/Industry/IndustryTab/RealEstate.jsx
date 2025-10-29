import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaHeadset, FaChartLine, FaShippingFast, FaShoppingCart } from "react-icons/fa";
import "./TabContent.css";


  const gridcontent = [
    {
      imgSrc: "https://ahaanmedia.com/asc/Industry/grids-image1.png",
      title: 'Integrated Property Management Systems',
      description: 'Streamline operations with our comprehensive solutions, including property management, CRM, marketing automation, asset/portfolio management, and more! '
    },
    {
      imgSrc: "https://ahaanmedia.com/asc/Industry/grids-image2.png",
      title: 'Analytics & Reporting',
      description: 'We leverage advanced dashboards for performance tracking, market analysis, lease metrics, and financial insights, empowering data-driven decision-making.'
    },
    {
      imgSrc: "https://ahaanmedia.com/asc/Industry/grids-image3.png",
      title: 'Security & Compliance',
      description: 'We provide robust security measures, data encryption, and compliance support with industry standards like GDPR and the Fair Housing Act, ensuring tenant privacy and regulatory adherence.'
    },

  ];

const RealEstate = () => {
  return (
    <div className="ecommerce-section">
      <h2 className="fw-bold">Transform Real Estate With Cutting-Edge Digital Solutions</h2>
      <p className="text-muted">
      The real estate and property management industry revolves around property transactions, asset management, and driving rental business growth worldwide. Ahaan Software Consulting specializes in crafting bespoke tech, IT, and custom software solutions designed to empower property managers, real estate agencies, and developers.
      </p>
      <img src="https://ahaanmedia.com/asc/Industry/RealEstate.png" alt="E-Commerce" className="content-image" />

      <h2 className="fw-bold text-left Revitalize mt-3">
      Innovate. Elevate. Collaborate. Bring Your Real Estate Vision To Life!
      </h2>
      <p className="text-left text-muted">
      Partner with us to enhance real estate operations with real-time monitoring, predictive maintenance, and smart building solutions. Leveraging IoT, mobile apps, and digital innovations, we forge customer satisfaction with elevated efficiency and excellence. Strengthen security with robust cybersecurity, access control, and cloud solutions to protect data, assets, and tenant privacy.
      </p>

      <h2 className="fw-bold text-left Revitalize">
      Some Of The Key Features Of Our Offerings!
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

export default RealEstate;

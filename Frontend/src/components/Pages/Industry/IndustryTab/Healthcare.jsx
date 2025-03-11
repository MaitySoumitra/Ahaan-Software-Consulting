import React from "react";
import HealthImage from "../../../../assets/images/banner2/Healthcare.png"
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
      title: 'EHR Development  ',
      description: 'Empower healthcare experts with seamless access to patient medical history, past treatments and diagnosis reports through our cutting-edge EHR or Electronic Health Records Development Services. As a leading software provider, we streamline healthcare operations with automated workflows, real-time patient insights, and more! '
    },
    {
      imgSrc: Ecom2,
      title: 'Online Consultation  ',
      description: 'Revolutionize patient care with our software solutions for online consultation and telemedicine! Enable patients to connect with healthcare experts, receive remote care, and order medicines online – anytime, anywhere.'
    },
    {
      imgSrc: Ecom3,
      title: 'Medical Billing Software',
      description: 'Streamline your billing process with our medical billing software solution, ensuring secure payments and error-free transactions. Empower patients to track expenses and plan treatments effortlessly. '
    },
    {
      imgSrc: Ecom4,
      title: 'Hospital Management Software',
      description: 'Redefine patient experience and reimagine hospital operations with our hospital management software. From hassle-free digital appointment booking to secure billing, real-time inventory management, and smooth patient-doctor communication, we’ve got everything covered!'
    },
    // {
    //   imgSrc: Ecom5,
    //   title: 'Efficient Administration',
    //   description: 'Ensure an easy and smart integration with your current systems to achieve an efficient and error-free process.'
    // }
  ];

const Healthcare = () => {
  return (
    <div className="ecommerce-section">
      <h2 className="fw-bold">Improving Healthcare With Value-Centric Solutions! </h2>
      <p className="text-muted">
      We are revolutionizing modern healthcare operations with innovative digital solutions, making them more agile and effective. Focused on driving digital transformation in healthcare, we enhance care coordination while empowering staff. Collaborate with us to elevate the quality of healthcare for both providers and patients.
      </p>
      <img src={HealthImage} alt="E-Commerce" className="content-image" />

      <h2 className="fw-bold text-left Revitalize mt-3">
      Our Healthcare Development Solutions 
      </h2>
      <p className="text-left text-muted">
      Enhance patient outcomes and optimize healthcare efficiency with our comprehensive healthcare software development services. By digitizing your healthcare operations, we streamline clinical administration, ensuring your venture stays ahead of industry changes and challenges.
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

export default Healthcare;

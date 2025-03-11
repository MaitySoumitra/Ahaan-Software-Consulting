import React from "react";
import EcommerceImage from "../../../../assets/images/banner2/Ecomm.png";
import { Container, Row, Col, Card } from "react-bootstrap";
import {
  FaHeadset,
  FaChartLine,
  FaShippingFast,
  FaShoppingCart,
} from "react-icons/fa";
import "./TabContent.css";
import Ecom1 from "../../../../assets/grids-image1.png";
import Ecom2 from "../../../../assets/grids-image2.png";
import Ecom3 from "../../../../assets/grids-image3.png";
import Ecom4 from "../../../../assets/grids-image4.png";
import Ecom5 from "../../../../assets/grids-image5.png";

const features = [
  {
    icon: <FaHeadset className="feature-icon" />,
    title: "Boost Your Growth ",
    description:
      "Boost your retail store's digital presence and meet evolving market demands with our innovative, user-centric e-commerce development services—designed to scale your business.",
  },
  {
    icon: <FaChartLine className="feature-icon" />,
    title: "Gain More Online Visibility ",
    description:
      "We create lucrative, visually compelling e-storefronts that enhance your retail store’s digital presence, attract millennial shoppers, and redefine their shopping experience.",
  },
  {
    icon: <FaShippingFast className="feature-icon" />,
    title: "Streamline Complex Inventory Operations",
    description:
      "Get a customized e-store and inventory solution to monitor, manage, and procure items in real-time. Stay ahead by streamlining retail processes and boosting efficiency.",
  },
  {
    icon: <FaShoppingCart className="feature-icon" />,
    title: "Flexible Payment Options ",
    description:
      "Empower your customers with flexible payment options through seamless payment gateway integration, boosting sales closure rates with our e-commerce app and software development services.",
  },
  {
    icon: <FaShoppingCart className="feature-icon" />,
    title: "Redefine Buying Experience ",
    description:
      "Leverage AI-powered product search to display personalized buying options based on user activity, improving their overall shopping experience with custom-tailored recommendations.",
  },
  {
    icon: <FaShoppingCart className="feature-icon" />,
    title: "Data Privacy Ensured  ",
    description:
      "Protect customer data from threats while showcasing security certificates on payment pages to boost trust, all with a highly secure e-commerce software featuring multi-factor authentication.",
  },
];

  const gridcontent = [
    {
      imgSrc: Ecom1,
      title: 'Simple Integration',
      description: 'Ensure an easy and smart integration with your current systems to achieve an efficient and error-free process.'
    },
    {
      imgSrc: Ecom2,
      title: 'Strong Security',
      description: 'Ensure an easy and smart integration with your current systems to achieve an efficient and error-free process.'
    },
    {
      imgSrc: Ecom3,
      title: 'Quick Tracking',
      description: 'Ensure an easy and smart integration with your current systems to achieve an efficient and error-free process.'
    },
    {
      imgSrc: Ecom4,
      title: 'Adaptable Scalability',
      description: 'Ensure an easy and smart integration with your current systems to achieve an efficient and error-free process.'
    },
    {
      imgSrc: Ecom5,
      title: 'Efficient Administration',
      description: 'Ensure an easy and smart integration with your current systems to achieve an efficient and error-free process.'
    }
  ];

const Ecommerce = () => {
  return (
    <div className="ecommerce-section">
      <h2 className="fw-bold">E-Commerce & Marketplace</h2>
      <p className="text-muted">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur.
      </p>
      <img src={EcommerceImage} alt="E-Commerce" className="content-image" />

      <h2 className="fw-bold text-left Revitalize">
        Revitalize Shopping With Smart E-Commerce Features
      </h2>
      <p className="text-left text-muted">
        Our cutting-edge e-commerce solutions can revolutionize your in-store experience.
        Our clever solutions make online retail simple and entertaining, improving every
        stage of the buying experience, from smooth checkouts to real-time tracking.
        Watch your sales skyrocket as you enter a world where innovation and convenience collide!
      </p>

      <Row className="mt-4">
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
        {features.slice(0, 6).map((feature, index) => (
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
      </Row>

      <h2 className="fw-bold text-left Revitalize">
      Your Business Needs To Stay Dynamic In A Ecosystem
      </h2>
      {gridcontent.map((feature, index) => (
        <Row className="mb-4" key={index}>
          <Col md={6} className={index % 2 === 1 ? "order-md-2" : ""}>
            <img
              src={feature.imgSrc}
              alt={feature.title}
              className="img-fluid"
            />
          </Col>
          <Col md={6} className={index % 2 === 1 ? "order-md-1" : ""}>
            <h2 className="grids-heading">{feature.title}</h2>
            <p className="grids-content">{feature.description}</p>
            <p className="grids-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
          </Col>
        </Row>
      ))}
    </div>
  );
};

export default Ecommerce;

import React from "react";
import Educations from "../../../../assets/images/banner2/Education.jpg";
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
    title: "Corporate Learning Solutions",
    description:
      "Convert corporate learning with our unique and innovative EduTech solutions. Enhance your employee skills and drive organizational growth with tailored training programs and achieve all round success. ",
  },
  {
    icon: <FaChartLine className="feature-icon" />,
    title: "Education-to-Career (E2C) Solutions",
    description:
      "Transform the E2C (Education-To-Career) pathways of learners by developing a large-scale e-learning and education software development solutions, precisely tailored to our clients’ needs. ",
  },
  {
    icon: <FaShippingFast className="feature-icon" />,
    title: "Campus Solutions ",
    description:
      "We help empower educators, trainers, and students to transform school, college or university learning and administrative operations to a dynamic environment with our smart education solution.",
  },
  {
    icon: <FaShoppingCart className="feature-icon" />,
    title: "Professional Upskilling Programs ",
    description:
      "We equip students, job seekers, and working professionals with skill-bases professional e-learning training solutions designed to enhance career growth and unlock their full potential.",
  },
  {
    icon: <FaShoppingCart className="feature-icon" />,
    title: "Streamlined Checkouts",
    description:
      "Our platform provides a systematic order management process and an effective workflow, guaranteeing your business's smooth and efficient functioning.",
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

const Education = () => {
  return (
    <div className="ecommerce-section">
      <h2 className="fw-bold">Education</h2>
      <p className="text-muted">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur.
      </p>
      <img src={Educations} alt="E-Commerce" className="content-image" />

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
      </Row> */}

      <Row className="mt-3">
        {features.slice(0, 4).map((feature, index) => (
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

export default Education;

import React from "react";
import MediaImage from "../../../../assets/images/banner2/Media.png"
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
    title: "Customer Support",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
  },
  {
    icon: <FaChartLine className="feature-icon" />,
    title: "Scalable Excellence",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
  },
  {
    icon: <FaShippingFast className="feature-icon" />,
    title: "Easy Tracking",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
  },
  {
    icon: <FaShoppingCart className="feature-icon" />,
    title: "Streamlined Checkouts",
    description:
      "Our platform provides a systematic order management process and an effective workflow, guaranteeing your business's smooth and efficient functioning.",
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
    title: "Content Management System",
    description:
      "Build customized platforms for seamless digital content management. Our tailored CMS solutions empower you to create, distribute, and monetize content effortlessly across all major media channels.",
  },
  {
    imgSrc: Ecom2,
    title: "Video Streaming Solutions",
    description:
      "Create an interactive and responsive video streaming platform for seamless on-demand content and OTT services. Deliver a world-class viewing experience with an immersive, engaging platform designed for diverse audiences across all age groups and demographics.",
  },
  {
    imgSrc: Ecom3,
    title: "Digital Right Management ",
    description:
      "Protect your intellectual property, guarantee compliance with licensing agreements, and prevent copyright infringements with our cutting-edge DRM solutions. Stay secure with industry-leading protection from our expert team.",
  },
  // {
  //   imgSrc: Ecom4,
  //   title: "Adaptable Scalability",
  //   description:
  //     "Ensure an easy and smart integration with your current systems to achieve an efficient and error-free process.",
  // },
  {
    imgSrc: Ecom5,
    title: "Augmented Reality & Virtual Reality",
    description:
      "Create immersive applications with cutting-edge AR/VR solutions from Ahaan Software Consulting, delivering interactive virtual tours and lifelike experiences. Transform user engagement and revolutionize digital interactions like never before!",
  },
];

const Media = () => {
  return (
    <div className="ecommerce-section">
      <h2 className="fw-bold">One World, Countless Local Perspectives!</h2>
      <p className="text-muted">
        Expand your content’s reach with innovative AI solutions and a robust
        network infrastructure. Whether you're a streaming service, a studio, or
        a digital content creator, our end-to-end solutions are designed to meet
        your unique business needs and drive global success.
      </p>
      <img src={MediaImage} alt="E-Commerce" className="content-image" />

      <h2 className="fw-bold text-left Revitalize mt-3">
        Curating The Best Digital Experiences
      </h2>
      <p className="text-left text-muted">
        Your digital transformation begins now! With years of experience, deep
        domain expertise, and industry insights, we enhance the entire customer
        lifecycle—creating a sustainable business value chain through our
        comprehensive services and innovative solutions.
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
      </Row> */}

      {/* <Row className="mt-3">
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
          </Col>
        </Row>
      ))}
    </div>
  );
};

export default Media;

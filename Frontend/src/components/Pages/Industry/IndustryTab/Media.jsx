import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import {
  FaHeadset,
  FaChartLine,
  FaShippingFast,
  FaShoppingCart,
} from "react-icons/fa";
import "./TabContent.css";


const gridcontent = [
  {
    imgSrc: "https://ahaanmedia.com/asc/Industry/grids-image1.png",
    title: "Content Management System",
    description:
      "Build customized platforms for seamless digital content management. Our tailored CMS solutions empower you to create, distribute, and monetize content effortlessly across all major media channels.",
  },
  {
    imgSrc: "https://ahaanmedia.com/asc/Industry/grids-image2.png",
    title: "Video Streaming Solutions",
    description:
      "Create an interactive and responsive video streaming platform for seamless on-demand content and OTT services. Deliver a world-class viewing experience with an immersive, engaging platform designed for diverse audiences across all age groups and demographics.",
  },
  {
    imgSrc: "https://ahaanmedia.com/asc/Industry/grids-image3.png",
    title: "Digital Right Management ",
    description:
      "Protect your intellectual property, guarantee compliance with licensing agreements, and prevent copyright infringements with our cutting-edge DRM solutions. Stay secure with industry-leading protection from our expert team.",
  },

  {
    imgSrc: "https://ahaanmedia.com/asc/Industry/grids-image4.png",
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
      <img src="https://ahaanmedia.com/asc/Industry/Media.png" alt="E-Commerce" className="content-image" />

      <h2 className="fw-bold text-left Revitalize mt-3">
        Curating The Best Digital Experiences
      </h2>
      <p className="text-left text-muted">
        Your digital transformation begins now! With years of experience, deep
        domain expertise, and industry insights, we enhance the entire customer
        lifecycle—creating a sustainable business value chain through our
        comprehensive services and innovative solutions.
      </p>


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

import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./ServicesSection.css";
import { RiFileCodeLine } from "react-icons/ri";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { MdSupportAgent } from "react-icons/md";
import { MdOutlineDesignServices } from "react-icons/md";

const services = [
  {
    title: "Software Development",
    description:
      "Custom software solutions tailored to business needs, ensuring scalability, performance, and innovation for seamless digital transformation and growth.",
    icon: <RiFileCodeLine />,
  },
  {
    title: "Web Development",
    description:
      "We build responsive, secure, and user-friendly websites tailored to your brand, enhancing online presence and driving business success.",
    icon: <HiOutlineDesktopComputer />,
  },
  {
    title: "IT Business Consultancy",
    description:
      "Providing expert IT consulting to optimize operations, drive innovation, and align technology strategies with your business goals for maximum impact.",
    icon: <MdSupportAgent />,
  },
  {
    title: "UI & UX Design",
    description:
      "Crafting intuitive, engaging, and user-centered designs that enhance usability, improve user satisfaction, and elevate your brand's digital experience.",
    icon: <MdOutlineDesignServices />,
  },
];

const ServicesSection = () => {
  return (
    <section className="services-section py-5">
      <Container>
        {/* Heading Section */}
        <div className="text-center mb-2">
          <h2 className="fw-bold">Our Core Services</h2>
          <p className="text-muted">Delivering excellence through innovation and technology</p>
        </div>

        {/* Service Cards */}
        <Row className="g-4">
          {services.map((service, index) => (
            <Col key={index} lg={3} md={6} sm={12}>
              <Card className="service-card h-100">
                <div className="icon-container mx-auto">
                  <div className="service-icon">{service.icon}</div>
                </div>
                <Card.Body className="text-center">
                  <Card.Title className="service-title">
                    {service.title}
                  </Card.Title>
                  <Card.Text className="service-desc">
                    {service.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ServicesSection;

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { TbDeviceDesktopCode } from "react-icons/tb";
import { ImMobile } from "react-icons/im";
import { TiShoppingCart } from "react-icons/ti";
import { TiSocialGooglePlus } from "react-icons/ti";
import { IoShareSocialSharp } from "react-icons/io5";
import { FaQuidditch } from "react-icons/fa";
import './Service.css';

const services = [
  {
    icon:<TbDeviceDesktopCode />,
    title: 'Web Development',
    description: 'We build responsive and engaging websites tailored to your needs.',
  },
  {
    icon: <ImMobile/>,
    title: 'Mobile App Development',
    description: 'Create seamless mobile applications for iOS and Android platforms.',
  },
  {
    icon: <TiShoppingCart />,
    title: 'E-commerce Development',
    description: 'Designing intuitive and visually appealing user experiences.',
  },
  {
    icon: <FaQuidditch />,
    title: 'UI/UX Design',
    description: 'Designing intuitive and visually appealing user experiences.',
  },
  {
    icon: <IoShareSocialSharp />,
    title: 'Social Media Marketing',
    description: 'Reliable cloud solutions for data storage and scalability.',
  },
  {
    icon: <TiSocialGooglePlus />,
    title: 'Google Marketing',
    description: 'Reliable cloud solutions for data storage and scalability.',
  },
];

const Services = () => {
  return (
    <section className="services-section">
      <Container>
        {/* Heading */}
        <Row className="justify-content-center">
          <Col md={8} className="text-center">
            <h2 className="services-heading">Services We Offer</h2>
          </Col>
        </Row>

        {/* Service Cards */}
        <Row>
          {services.map((service, index) => (
            <Col xs={12} sm={6} md={4} lg={4} key={index} className="mb-4">
              <div className="service-card text-center">
                <div className="service-icon">
                  {service.icon}
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services;

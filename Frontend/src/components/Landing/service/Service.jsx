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
    description: 'We craft agile, scalable & budget-friendly websites tailored for success!',
  },
  {
    icon: <ImMobile/>,
    title: 'Mobile App Development',
    description: 'Go mobile with our custom app solutions for anywhere-anytime access!',
  },
  {
    icon: <TiShoppingCart />,
    title: 'E-commerce Development',
    description: 'Supercharge your e-business with optimal channels, product optimizations & marketing models. ',
  },
  {
    icon: <FaQuidditch />,
    title: 'UI/UX Design',
    description: 'UI/UX defines success—our designs are user-centric, practical & intuitive.',
  },
  {
    icon: <IoShareSocialSharp />,
    title: 'Social Media Marketing',
    description: 'Build community & spark conversation through insight-driven & sustainable strategies. ',
  },
  {
    icon: <TiSocialGooglePlus />,
    title: 'Google Marketing',
    description: 'Boost visibility our expert Google marketing strategies for maximum growth.',
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

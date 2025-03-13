import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
// import logo from '../../assets/logo.png';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer py-5">
      <Container>
        <Row className="gy-4">
          {/* Logo & Social Links */}
          <Col lg={4} md={6} sm={12} className="footer-section text-left text-md-start">
            <a href='https://ahaansoftware.com/' className="d-inline-block">
              <img src="https://ahaansoftware.com/images/ahaan.png" alt="Logo" className="footer-logo mb-3" />
            </a>
            <p className="footer-subtitle">
              Top IT Consulting Company Delivering Custom Website and App at Ahaan Software Consulting.
            </p>
            <p>Find Us On:</p>
            <div className="social-icons">
              <a href="https://www.facebook.com/ahaansoftwareconsulting" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
              <a href="https://www.linkedin.com/company/ahaansoftware" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a href="https://www.instagram.com/ahaansoftware/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            </div>
          </Col>

          {/* Address & Contact */}
          <Col lg={4} md={6} sm={12} className="footer-section">
            <h3>Get In Touch</h3>
            <p><FaLocationDot />&nbsp;Bengal Eco Intelligent Park, EM Block, Sector V, Bidhannagar, Kolkata, West Bengal 700091</p>
            <p><FaPhone />&nbsp;+91 8981744661</p>
            <p><IoMdMail />&nbsp;sales@ahaansoftware.com</p>
          </Col>

          {/* Inquiry Form */}
          <Col lg={4} md={12} sm={12} className="footer-form">
            <h2 className="form-heading">ENQUIRE NOW FOR WEBSITE DEVELOPMENT</h2>
            <form action="https://api.web3forms.com/submit" method="POST">
              <input type="hidden" name="access_key" value="e521102f-db58-4a15-b462-bf2957d73f93" />
              <Row className="mb-3">
                <Col md={6}>
                  <input type="text" name='name' className="form-control" placeholder="Name" required />
                </Col>
                <Col md={6}>
                  <input type="tel" name='phoneNumber' pattern="[0-9]{10}" className="form-control" placeholder="Phone Number" required />
                </Col>
              </Row>
              <Row className="mb-3">
                <Col md={6}>
                  <input type="email" name='email' className="form-control" placeholder="Email" required />
                </Col>
                <Col md={6}>
                  <input type="text" name='company' className="form-control" placeholder="Company Name" required />
                </Col>
              </Row>
              <div className="mb-3">
                <textarea name='message' className="form-control" rows="4" placeholder="What are your requirements?" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-100">Get a Free Quote</button>
            </form>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

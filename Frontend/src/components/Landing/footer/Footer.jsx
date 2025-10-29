import React, { useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './Footer.css';

const Footer = () => {
  const form = useRef();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const serviceID = "service_d4lc4tg";
    const templateID = "template_f6yg4p4";
    const publicKey = "P1psK0y5kXFayHDDA";

    emailjs
      .sendForm(serviceID, templateID, form.current, publicKey)
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        toast.success("Message sent successfully!");
        reset();
      })
      .catch((error) => {
        console.log("FAILED...", error);
        toast.error("Failed to send message. Try again!");
      });
  };

  return (
    <footer
      className="footer py-5"
      style={{
        backgroundImage: 'url("https://ahaanmedia.com/asc/Landing/landing-footer-background.png")',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
      }}
    >
      <Container>
        <Row className="gy-4">
          {/* Logo & Social Links */}
          <Col lg={4} md={6} sm={12} className="footer-section text-left text-md-start">
            <a href='https://ahaansoftware.com/' className="d-inline-block">
              <img src="https://ahaanmedia.com/asc/layouts/asc.png" alt="Logo" className="footer-logo mb-3" />
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
            <h3 className="footer-text">Get In Touch</h3>
            <p><FaLocationDot />&nbsp;Bengal Eco Intelligent Park, EM Block, Sector V, Bidhannagar, Kolkata, West Bengal 700091</p>
            <p><FaPhone />&nbsp;+91 8981744661</p>
            <p><IoMdMail />&nbsp;sales@ahaansoftware.com</p>
          </Col>

          {/* Inquiry Form */}
          <Col lg={4} md={12} sm={12} className="footer-form">
            <h2 className="form-heading">ENQUIRE NOW FOR WEBSITE DEVELOPMENT</h2>
            <form ref={form} onSubmit={handleSubmit(onSubmit)}>
              <Row className="mb-3">
                <Col>
                  <input
                    type="text"
                    {...register("name", { required: "Name is required" })}
                    className="form-control"
                    placeholder="Name"
                  />
                  {errors.name && <p className="text-danger">{errors.name.message}</p>}
                </Col>
                <Col>
                  <input
                    type="tel"
                    {...register("phoneNumber", {
                      required: "Phone Number is required",
                      pattern: {
                        value: /^[0-9]{10}$/,
                        message: "Must be exactly 10 digits",
                      },
                    })}
                    className="form-control"
                    placeholder="Phone Number"
                  />
                  {errors.phoneNumber && <p className="text-danger">{errors.phoneNumber.message}</p>}
                </Col>
              </Row>

              <Row className="mb-3">
                <Col>
                  <input
                    type="email"
                    {...register("email", { required: "Email is required" })}
                    className="form-control"
                    placeholder="Email"
                  />
                  {errors.email && <p className="text-danger">{errors.email.message}</p>}
                </Col>
                <Col>
                  <input
                    type="text"
                    {...register("companyName", { required: "Company Name is required" })}
                    className="form-control"
                    placeholder="Company Name"
                  />
                  {errors.companyName && <p className="text-danger">{errors.companyName.message}</p>}
                </Col>
              </Row>

              <div className="mb-3">
                <textarea
                  {...register("message", { required: "Message is required" })}
                  className="form-control"
                  rows="4"
                  placeholder="What are your requirements?"
                ></textarea>
                {errors.message && <p className="text-danger">{errors.message.message}</p>}
              </div>

              <button type="submit" className="btn btn-primary w-100">Get a Free Quote</button>
            </form>
          </Col>
        </Row>
      </Container>
      <ToastContainer position="top-right" autoClose={3000} />
    </footer>
  );
};

export default Footer;

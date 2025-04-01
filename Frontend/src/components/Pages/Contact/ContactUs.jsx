import React from "react";
import { useForm } from "react-hook-form";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaHome, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import emailjs from "@emailjs/browser";
import "react-toastify/dist/ReactToastify.css";
import "./Contactus.css";
import ContactBanner from "./ContactBanner";
import WorldMap from "./WorldMap";

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    const serviceID = "service_ywiiqsl"; // Replace with your EmailJS Service ID
    const templateID = "template_97me94o"; // Replace with your EmailJS Template ID
    const publicKey = "Si_Qy3488LBnjUFTA"; // Replace with your EmailJS Public Key

    emailjs
      .send(serviceID, templateID, data, publicKey)
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        toast.success("Message sent successfully!");
        reset(); // Reset form after successful submission
      })
      .catch((error) => {
        console.log("FAILED...", error);
        toast.error("Failed to send message. Try again!");
      });
  };

  return (
    <>
      <ContactBanner />
      <Container className="contact-section">
        <Row className="justify-content-center">
          <Col md={10} lg={11}>
            <Row className="contact-box">
              {/* Left Side */}
              <Col md={4} className="contact-information">
                <h5 className="contact-text">LET'S TALK</h5>
                <h2>Speak With Expert Engineers.</h2>

                <div className="contact-item">
                  <FaHome className="contact-icon" />
                  <div>
                    <strong>Email:</strong>
                    <p>sales@ahaansoftware.com</p>
                  </div>
                </div>

                <div className="contact-item">
                  <FaPhone className="contact-icon" />
                  <div>
                    <strong>Phone:</strong>
                    <p>+13214210740</p>
                    <p>+919830371143</p>
                  </div>
                </div>

                <div className="contact-item">
                  <FaMapMarkerAlt className="contact-icon" />
                  <div>
                    <strong>Address:</strong>
                    <p>Bengal Eco Intelligent Park, EM Block, Sector V, Kolkata-91</p>
                  </div>
                </div>
              </Col>

              {/* Right Side - Form */}
              <Col md={8} className="contact-form">
                <h6>GET IN TOUCH</h6>
                <h2>Fill The Form Below</h2>

                <Form onSubmit={handleSubmit(onSubmit)}>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Control
                          type="text"
                          placeholder="Name"
                          {...register("name", { required: "Name is required" })}
                        />
                        {errors.name && <p className="error-text">{errors.name.message}</p>}
                      </Form.Group>
                    </Col>

                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Control
                          type="email"
                          placeholder="E-Mail"
                          {...register("email", { required: "Email is required" })}
                        />
                        {errors.email && <p className="error-text">{errors.email.message}</p>}
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Control
                          type="text"
                          placeholder="Phone Number"
                          {...register("phone", { required: "Phone number is required" })}
                        />
                        {errors.phone && <p className="error-text">{errors.phone.message}</p>}
                      </Form.Group>
                    </Col>

                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Control
                          type="text"
                          placeholder="Your Website"
                          {...register("website")}
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group className="mb-3">
                    <Form.Control
                      as="textarea"
                      rows={3}
                      placeholder="Your message Here"
                      {...register("message", { required: "Message is required" })}
                    />
                    {errors.message && <p className="error-text">{errors.message.message}</p>}
                  </Form.Group>

                  <Button type="submit" className="submit-btn">
                    Submit Now
                  </Button>
                </Form>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      {/* <WorldMap /> */}

      {/* Toast Notification Container */}
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
};

export default ContactUs;

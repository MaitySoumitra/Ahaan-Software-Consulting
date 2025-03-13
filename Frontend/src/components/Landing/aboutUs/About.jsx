import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import about from '../../../assets/about.jpg';
import './About.css';
import PopUp from '../popUp/PopUp';
import 'bootstrap/dist/css/bootstrap.min.css';

const About = () => {
  const [showForm, setShowForm] = useState(false); // State for form visibility
  const toggleForm = () => setShowForm(!showForm); // Toggle form modal

  return (
    <section className="about-section">
      <Container>
        <Row className="align-items-center">
          {/* Left Side: Text Content */}
          <Col md={6}>
            <h1 className="about-heading">What Makes Us Worth Your Time And Trust?</h1>
            <p className="about-subheading">
              When building a Website & App, we mainly emphasize three factors – the look, the feel, and the potential of conversion. We aim to get your business a winning app by focusing on a user-first strategy for UI/UX.
            </p>
            <p className="about-subheading">
              This apart, we build the interfaces of our apps adaptable to variations by making sure that all the texts are readable, and the navigation fits within the screen for a variety of models.
            </p>
            <p className="about-subheading">
              Our Website & App developers implement robust security measures to safeguard sensitive user data. We also ensure full transparency by clearly explaining the purpose behind data collection, making users feel secure and confident while using the app.
            </p>
            <button className="btn-about" onClick={toggleForm}>Contact Us</button>
          </Col>

          {/* Right Side: Image */}
          <Col md={6} className="text-center">
            <img src={about} alt="About Us" className="about-image img-fluid" />
          </Col>
        </Row>
      </Container>

      {/* Popup Form */}
      {showForm && <PopUp onClose={toggleForm} />}
    </section>
  );
};

export default About;

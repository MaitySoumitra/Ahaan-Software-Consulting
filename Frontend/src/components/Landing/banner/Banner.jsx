import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import bannerImage from '../../../assets/bannerimg.jpg'; // Ensure correct path
import './Banner.css';

const Banner = () => {
  return (
    <section
      className="banner-section"
      style={{ backgroundImage: `url(${bannerImage})` }}
    >
      <Container>
        <Row className="align-items-center">
          
          {/* Left Side - Text Content */}
          <Col md={6} className="left-side text-white">
            <h1 className="banner-heading fade-in-left">
              Build Your Dream Website and App with Ahaan Software
            </h1>
            <p className="banner-subheading fade-in-up">
              Are you looking for experienced web developers who can build your dream website?
            </p>
            <p className="banner-subheading fade-in-up">
              From design to development, our creative team is here to give your business a new look.
              More than 7 years of experienced web developers with a 110+ team. Knock on our door for
              deploying any kind of website for your business.
            </p>
            <a href="https://ahaansoftware.com/" className="btn btn-banner fade-in-up">Learn More</a>
          </Col>

          {/* Right Side - Form */}
          <Col md={6} className="right-side fade-in-right">
            <div className="form-container">
              <h2 className="form-heading">ENQUIRE NOW FOR WEBSITE DEVELOPMENT</h2>
              <form action="https://api.web3forms.com/submit" method="POST">
                <input type="hidden" name="access_key" value="e521102f-db58-4a15-b462-bf2957d73f93" />

                {/* Name & Phone */}
                <Row className="mb-3">
                  <Col>
                    <input type="text" name="name" className="form-control" placeholder="Name" required />
                  </Col>
                  <Col>
                    <input type="tel" name="phoneNumber" pattern="[0-9]{10}" className="form-control"
                      placeholder="Phone Number" title="Must be exactly 10 digits" required />
                  </Col>
                </Row>

                {/* Email & Company */}
                <Row className="mb-3">
                  <Col>
                    <input type="email" name="email" className="form-control" placeholder="Email" required />
                  </Col>
                  <Col>
                    <input type="text" name="companyName" className="form-control" placeholder="Company Name" required />
                  </Col>
                </Row>

                {/* Message */}
                <div className="mb-3">
                  <textarea name="message" className="form-control" rows="4"
                    placeholder="What are your requirements?" required></textarea>
                </div>

                {/* Submit Button */}
                <button type="submit" className="btn btn-primary w-100">Get a Free Quote</button>
              </form>
            </div>
          </Col>

        </Row>
      </Container>
    </section>
  );
};

export default Banner;

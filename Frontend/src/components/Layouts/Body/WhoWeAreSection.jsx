import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BsBarChartLine, BsPeople, BsCheckCircle } from "react-icons/bs"; // ✅ Added BsCheckCircle
import "./WhoWeAreSection.css";
import whoWeAreImage from "../../../assets/Who-We-Are.gif";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const WhoWeAreSection = () => {
  return (
    <section className="who-we-are-section py-5">
      <Container>
        <Row className="align-items-center">
          {/* Left Image Section */}
          <Col lg={6} md={12} className="text-center mb-4 mb-lg-0">
            <img
              src={whoWeAreImage}
              alt="Mobile and Web Development"
              className="img-fluid who-we-are-image"
            />
          </Col>

          {/* Right Content Section */}
          <Col lg={6} md={12}>
            <div className="who-we-are-content">
              <h6 className="subtitle">
               About Ahaan Software <span className="divider"></span>
              </h6>
              <h2 className="main-title">
                <span className="highlight-text">
                  Your trusted partner in Mobile and Web Design & Development.
                </span>
              </h2>
              <p className="description">
                Ahaan Software is a team of passionate professionals dedicated
                to driving innovation and transformation through cutting-edge
                technology. With a proven track record of delivering over 100
                successful custom web and mobile development projects, we
                empower businesses to achieve excellence, efficiency, and growth
                through tailored digital solutions.
              </p>

              <Row className="feature-row mt-4">
                <Col sm={6}>
                  <div className="feature-box">
                    <div className="icon-circle">
                      <BsBarChartLine className="feature-icon" />
                    </div>
                    <h5>Cutting-Edge Tech Expertise</h5>
                  </div>
                </Col>
                <Col sm={6}>
                  <div className="feature-box">
                    <div className="icon-circle">
                      <BsPeople className="feature-icon" />
                    </div>
                    <h5>Built to Perform</h5>
                  </div>
                </Col>
              </Row>

              {/* ✅ Checklist with React Icons */}
              <ul className="checklist mt-4">
                <li>
                  <IoMdCheckmarkCircleOutline className="check-icon" /> Web &
                  mobile solutions
                </li>
                <li>
                  <IoMdCheckmarkCircleOutline className="check-icon" /> Quality
                  development
                </li>
                <li>
                  <IoMdCheckmarkCircleOutline className="check-icon" />{" "}
                  Maintenance & support
                </li>
                <li>
                  <IoMdCheckmarkCircleOutline className="check-icon" /> Secure &
                  scalable apps
                </li>
                <li>
                  <IoMdCheckmarkCircleOutline className="check-icon" /> Custom
                  solutions
                </li>
                <li>
                  <IoMdCheckmarkCircleOutline className="check-icon" />{" "}
                  Innovative approach
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
      <hr style={{border:"none"}}/>
    </section>
  );
};

export default WhoWeAreSection;

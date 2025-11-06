import { Container, Row, Col, Card } from "react-bootstrap";
import { LuChartNoAxesCombined } from "react-icons/lu";
import { BsBoxSeam, BsMegaphone } from "react-icons/bs";
import { Si1001Tracklists } from "react-icons/si";
import "./WhyChooseUs.css";

import { SiAegisauthenticator } from "react-icons/si";
import { SlMagnifierAdd } from "react-icons/sl";
import { BiBadgeCheck } from "react-icons/bi";
import { FaUserShield } from "react-icons/fa6";

const WhyChooseUs = () => {
  return (
    <div className="whychooseus-section">
      <Container className="mt-4">
        <label className="whychooseus-label">Why Choose Us</label>
        <Row className="d-flex align-items-center">
          <Col lg={7} className="d-flex flex-column">
            <div>
              <h2 className="mt-2 fw-bold whychooseus-heading">
                What Makes Us Worth Your Time & Trust
              </h2>

              <p className="whychooseus-text mt-3">
                We’re not just a high-performing team – we’re “tech-driven
                marketing enthusiasts” with innovation in our DNA! Let’s collab
                to transform your vision – from ideation to action – into
                powerful narratives, lasting partnerships, and immersive
                experiences.
              </p>
            </div>

            <Row className="mt-4">
              {/* Card 1 */}
              <Col md={6}>
                <Card className="border-0">
                  <Card.Body className="whychooseus-card">
                    <Row className="align-items-center">
                      <Col xs="auto">
                        <div className="icon-wrapper">
                          <SlMagnifierAdd size={20} color="#CD912A" />
                        </div>
                      </Col>
                      <Col>
                        <h5 className="whychooseus-subtitle">Our Values</h5>
                        <p className="whychooseus-cardtext">
                          We deliver services with integrity, accuracy, and
                          objectivity, upholding ethical standards,
                          accountability, and credibility while honoring the
                          dignity of labor and striving for excellence.
                        </p>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>

              {/* Card 2 */}
              <Col md={6}>
                <Card className="border-0">
                  <Card.Body className="whychooseus-card">
                    <Row className="align-items-center">
                      <Col xs="auto">
                        <div className="icon-wrapper">
                          <SiAegisauthenticator size={20} color="#CD912A" />
                        </div>
                      </Col>
                      <Col>
                        <h5 className="whychooseus-subtitle">Authenticity</h5>
                        <p className="whychooseus-cardtext">
                          We ally with businesses we believe in, ensuring
                          passion drives success. With authenticity at our core,
                          we foster meaningful partnerships that create growth,
                          value, and sustainability.
                        </p>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>

              {/* Card 3 */}
              <Col md={6}>
                <Card className="border-0">
                  <Card.Body className="whychooseus-card">
                    <Row className="align-items-center">
                      <Col xs="auto">
                        <div className="icon-wrapper">
                          <FaUserShield  size={20} color="#CD912A" />
                        </div>
                      </Col>
                      <Col>
                        <h5 className="whychooseus-subtitle">Top Talent</h5>
                        <p className="whychooseus-cardtext">
                          Our experts cultivate partnerships with a win-win
                          mindset, seeing client success as our own. Committed
                          to mutual growth, we ensure every collaboration
                          delivers impactful results.
                        </p>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>

              {/* Card 4 */}
              <Col md={6}>
                <Card className="border-0">
                  <Card.Body className="whychooseus-card">
                    <Row className="align-items-center">
                      <Col xs="auto">
                        <div className="icon-wrapper">
                          <BiBadgeCheck size={20} color="#CD912A" />
                        </div>
                      </Col>
                      <Col>
                        <h5 className="whychooseus-subtitle">Quality</h5>
                        <p className="whychooseus-cardtext">
                          We leverage edgy technologies, tools, and platforms to
                          deliver breakthrough results. Beyond industry best
                          practices, our experts innovate continuously, pushing
                          boundaries to drive excellence.
                        </p>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>

          {/* IMAGE */}
          <Col lg={5} className="d-flex justify-content-center">
            <img
              src="https://ahaanmedia.com/asc/whychooseus/Why-choose-us.png"
              alt="Business Team"
              className="whychooseus-image"
            />
          </Col>
        </Row>
      </Container>

      {/* WAVE DIVIDER */}
      <section className="wave-section">
        <div className="wave wave1"></div>
        <div className="wave wave2"></div>
        <div className="wave wave3"></div>
        <div className="wave wave4"></div>
      </section>
    </div>
  );
};

export default WhyChooseUs;

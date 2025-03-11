import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { FaChartLine } from "react-icons/fa";
import { LuChartNoAxesCombined } from "react-icons/lu";
import { BsBoxSeam, BsMegaphone } from "react-icons/bs";
import { Si1001Tracklists } from "react-icons/si";
import Whychoose from "../../../assets/images/whychoose/whychoose.jpg";
const WhyChooseUs = () => {
  return (
    <Container className="mt-4">
      <Row className="align-items-center">
        {/* Left Side - Text Content */}
        <Col lg={6}>
          <div className="mt-5">
            <label className="section1-client-label">Why Choose Us</label>
            <h2 className="mt-2 fw-bold first-section-heading">
              What Makes Us Worth Your Time & Trust
            </h2>

            <p className="text-muted mx-auto mt-3 section1-content">
              We’re not just a high-performing team – we’re “tech-driven
              marketing enthusiasts” with innovation in our DNA! Let’s collab to
              transform your vision – from ideation to action – into powerful
              narratives, lasting partnerships, and immersive experiences.
            </p>
          </div>

          <Row className="mt-4">
            <Col md={6} className="mb-3">
              <Card className="border-0">
                <Card.Body>
                  <Row className="align-items-center">
                    <Col xs="auto">
                      <LuChartNoAxesCombined size={50} color="#433978" />{" "}
                    </Col>
                    <Col>
                      <h5 className="" style={{ color: "#433978" }}>
                      Our Values
                      </h5>
                      <p className="text-muted">
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

            <Col md={6} className="mb-3">
              <Card className="border-0">
                <Card.Body>
                  <Row className="align-items-center">
                    <Col xs="auto">
                      <Si1001Tracklists size={50} color="#433978" />{" "}
                    </Col>
                    <Col>
                      <h5 className="" style={{ color: "#433978" }}>
                      	Authenticity
                      </h5>
                      <p className="text-muted">
                        We ally with businesses we believe in, ensuring passion
                        drives success. With authenticity at our core, we foster
                        meaningful partnerships that create growth, value, and
                        sustainability.
                      </p>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6} className="mb-3">
              <Card className="border-0">
                <Card.Body>
                  <Row className="align-items-center">
                    <Col xs="auto">
                      <BsMegaphone size={50} color="#433978" />
                    </Col>
                    <Col>
                      <h5 className="" style={{ color: "#433978" }}>
                      Top Talent
                      </h5>
                      <p className="text-muted">
                        Our experts cultivate partnerships with a win-win
                        mindset, seeing client success as our own. Committed to
                        mutual growth, we ensure every collaboration delivers
                        impactful results.
                      </p>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6} className="mb-3">
              <Card className="border-0">
                <Card.Body>
                  <Row className="align-items-center">
                    <Col xs="auto">
                      <BsBoxSeam size={50} color="#433978" />
                    </Col>
                    <Col>
                      <h5 className="" style={{ color: "#433978" }}>
                        <i className="bi bi-laptop text-primary"></i> 
                        Quality 
                      </h5>
                      <p className="text-muted">
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
        <Col lg={6} className="d-flex justify-content-center">
          <img
            src={Whychoose}
            alt="Business Team"
            className="img-fluid rounded"
            style={{ maxWidth: "100%", borderRadius: "15px" }}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default WhyChooseUs;

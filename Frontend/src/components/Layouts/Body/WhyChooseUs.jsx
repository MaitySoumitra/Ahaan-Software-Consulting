import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { FaChartLine } from "react-icons/fa";
import { LuChartNoAxesCombined } from "react-icons/lu";
import { BsBoxSeam, BsMegaphone } from "react-icons/bs";
import { Si1001Tracklists } from "react-icons/si";
import "./WhyChooseUs.css";
const WhyChooseUs = () => {
  return (
    <Container className="mt-4">
      <label className="section1-client-label">Why Choose Us</label>
      <Row className="d-flex align-items-center">
        <Col lg={7} className="d-flex flex-column">
          <div className="">
            <h2 className="mt-2 fw-bold first-section-heading">
              What Makes Us Worth Your Time & Trust
            </h2>

            <p className="text-muted mx-auto mt-3 why-choose-us-content">
              We’re not just a high-performing team – we’re “tech-driven
              marketing enthusiasts” with innovation in our DNA! Let’s collab to
              transform your vision – from ideation to action – into powerful
              narratives, lasting partnerships, and immersive experiences.
            </p>
          </div>

          <Row className="">
            <Col md={6} className="">
              <Card className="border-0">
                <Card.Body className="p-0">
                  <Row className="align-items-center">
                    <Col xs="auto">
                      <LuChartNoAxesCombined
                        size={50}
                        color="#CD912A"
                        style={{
                          backgroundColor: "#000",
                          padding: "10px",
                          borderRadius: "10px",
                        }}
                      />{" "}
                    </Col>
                    <Col>
                      <h5 className="why-choose-us-subtitle">Our Values</h5>
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

            <Col md={6} className="">
              <Card className="border-0">
                <Card.Body className="p-0">
                  <Row className="align-items-center">
                    <Col xs="auto">
                      <Si1001Tracklists size={50}
                        color="#CD912A"
                        style={{
                          backgroundColor: "#000",
                          padding: "10px",
                          borderRadius: "10px",
                        }} />{" "}
                    </Col>
                    <Col>
                      <h5 className="why-choose-us-subtitle">Authenticity</h5>
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

            <Col md={6} className="">
              <Card className="border-0">
                <Card.Body className="p-0">
                  <Row className="align-items-center">
                    <Col xs="auto">
                      <BsMegaphone size={50}
                        color="#CD912A"
                        style={{
                          backgroundColor: "#000",
                          padding: "10px",
                          borderRadius: "10px",
                        }} />
                    </Col>
                    <Col>
                      <h5 className="why-choose-us-subtitle">Top Talent</h5>
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

            <Col md={6} className="">
              <Card className="border-0">
                <Card.Body className="p-0">
                  <Row className="align-items-center">
                    <Col xs="auto">
                      <BsBoxSeam size={50}
                        color="#CD912A"
                        style={{
                          backgroundColor: "#000",
                          padding: "10px",
                          borderRadius: "10px",
                        }} />
                    </Col>
                    <Col>
                      <h5 className="why-choose-us-subtitle">
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
        <Col lg={5} className="d-flex justify-content-center">
          <img
            src="https://ahaanmedia.com/asc/whychooseus/Why-choose-us.png"
            alt="Business Team"
            className="img-fluid rounded"
            style={{ maxWidth: "90%", borderRadius: "15px" , boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
            }}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default WhyChooseUs;

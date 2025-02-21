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
              We Professional IT Business & Marketing and Sales
            </h2>

            <p className="text-muted mx-auto mt-3 section1-content">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
          </div>

          <Row className="mt-4">
            <Col md={6} className="mb-3">
              <Card className="border-0">
                <Card.Body>
                  <Row className="align-items-center">
                    <Col xs="auto">
                      <LuChartNoAxesCombined size={50} color="#433978"/>{" "}
                     
                    </Col>
                    <Col>
                      <h5 className="" style={{ color: "#433978" }}>
                        Business Growth
                      </h5>
                      <p className="text-muted">
                        Lorem Ipsum dolor sit amet, consectetur adipiscing elit.
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
                      <Si1001Tracklists size={50} color="#433978"/>{" "}
                      
                    </Col>
                    <Col>
                      <h5 className="" style={{ color: "#433978" }}>
                        24/7 User
                        Support
                      </h5>
                      <p className="text-muted">
                        Lorem Ipsum dolor sit amet, consectetur adipiscing elit.
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
                      <BsMegaphone size={50} color="#433978"/> 
                    </Col>
                    <Col>
                      <h5 className="" style={{ color: "#433978" }}>
                        Marketing Strategy
                      </h5>
                      <p className="text-muted">
                        Lorem Ipsum dolor sit amet, consectetur adipiscing elit.
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
                      <BsBoxSeam size={50} color="#433978"/> 
                    </Col>
                    <Col>
                      <h5 className="" style={{ color: "#433978" }}>
                        <i className="bi bi-laptop text-primary"></i> Digital
                        Product
                      </h5>
                      <p className="text-muted">
                        Lorem Ipsum dolor sit amet, consectetur adipiscing elit.
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

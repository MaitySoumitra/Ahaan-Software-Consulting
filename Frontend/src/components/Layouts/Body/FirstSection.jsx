import { Container, Row, Col, Image } from "react-bootstrap";
import { motion } from "framer-motion";
import "./FirstSection.css";
import Ekyaa from "../../../assets/images/logo/ekyaa-logo.jpg";
import Logix from "../../../assets/images/logo/logix-logo.jpg";
import Helli from "../../../assets/images/logo/heli-logo.png";
import Jn from "../../../assets/images/logo/jn-logo.jpg";
import NextDoor from "../../../assets/images/logo/next-door-logo.jpg";
import Fs from "../../../assets/images/logo/fs-logo.jpg";

const clients = [
  { src: Ekyaa, alt: "EKYAA" },
  { src: Logix, alt: "LOGIX" },
  { src: Fs, alt: "Fs" },
  { src: Helli, alt: "Helli" },
  { src: Jn, alt: "Jazzyln Nolen" },
  { src: NextDoor, alt: "NextDoor Urgent Care" },
];

const FirstSection = () => {
  return (
    <Container className="mt-5">
      <label className="section1-client-label">Our Clients</label>
      <h2 className="mt-2 fw-bold first-section-heading">
        Preferred Technology Partner for World-Class Enterprises Globally
      </h2>

      <p className="text-muted mx-auto mt-3 section1-content">
        Whether you require a complex enterprise software development solution
        or seamless software integration, we will take your business to the next
        level of success with IT consulting services & software development
        solutions.
      </p>

      <Row className="mt-4">
        {clients.map((client, index) => (
          <Col xs={4} sm={4} md={2} key={index} className="text-center">
            <div className="first-client-col">
              <Image
                src={client.src}
                alt={client.alt}
                className="first-client-image"
              />
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default FirstSection;

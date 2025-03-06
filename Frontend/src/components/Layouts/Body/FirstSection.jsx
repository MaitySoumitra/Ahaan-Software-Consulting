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
    <Container className="selected-clients">
      <label className="section1-client-label">Our Clients</label>
      <Row className="mt-2">
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
      <p className="text-muted mx-auto section1-content section1-content-p">
        Whether you require a complex enterprise software development solution
        or seamless software integration, we will take your business to the next
        level of success with IT consulting services & software development
        solutions.
      </p>
    </Container>
  );
};

export default FirstSection;

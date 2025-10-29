import { Container, Row, Col, Image } from "react-bootstrap";
import { motion } from "framer-motion";
import "./FirstSection.css";

const clients = [
  { src: "https://ahaanmedia.com/asc/client/1.png", alt: "EKYAA" },
  { src: "https://ahaanmedia.com/asc/client/2.png", alt: "LOGIX" },
  { src: "https://ahaanmedia.com/asc/client/3.png", alt: "Fs" },
  { src: "https://ahaanmedia.com/asc/client/4.png", alt: "Helli" },
  { src: "https://ahaanmedia.com/asc/client/5.png", alt: "Jazzyln Nolen" },
  { src: "https://ahaanmedia.com/asc/client/6.png", alt: "NextDoor Urgent Care" },
];

const FirstSection = () => {
  return (
    <Container className="selected-clients">
      <label className="section1-client-label">Our Clients</label>
      <div className="d-flex flex-wrap mt-md-4 mt-2">
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
      </div>
      <p className="text-muted mx-auto mt-3 section1-content section1-content-p">
        We understand, collaborate, and empower! From complex Software
        Development Service to Seamless Integration, experience how our next-gen
        IT consulting and software solutions can transform and accelerate your
        business.
      </p>
    </Container>
  );
};

export default FirstSection;

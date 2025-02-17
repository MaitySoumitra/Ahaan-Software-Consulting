
import { Container, Row, Col, Badge, Image } from "react-bootstrap";
import "./FirstSection.css";
import Ekyaa from "../../../assets/images/logo/ekyaa-logo.jpg";
import Logix from "../../../assets/images/logo/logix-logo.jpg";
import Helli from "../../../assets/images/logo/helli-logo.jpg";
import Jn from "../../../assets/images/logo/jn-logo.jpg";
import NextDoor from "../../../assets/images/logo/next-door-logo.jpg";
import Fs from "../../../assets/images/logo/fs-logo.jpg";

const clients = [
  { src: Ekyaa, alt: "EKYAA" },
  { src: Logix, alt: "LOGIX" },
  { src: Helli, alt: "HELE" },
  { src: Jn, alt: "Jazzyln Nolen" },
  { src: NextDoor, alt: "NextDoor Urgent Care" },
  { src: Fs, alt: "FS" },
];

const FirstSection = () => {
  return (
    <Container className="mt-5">
      
      <label className="section1-client-label" >
        Our Client
      </label>
      <h2 className="mt-2 fw-bold first-section-heading">
        Preferred Technology Partner for World-Class Enterprises Globally
      </h2>

      
      <p className="text-muted mx-auto mt-3 section1-content" >
        Whether you require a complex enterprise software development solution 
        or seamless software integration, we will take your business to the next 
        level of success with IT consulting services & software development solutions.
      </p>

      {/* Client Logos */}
      <Row className="justify-content-center align-items-center mt-4 g-4 section1-logo-img">
        {clients.map((client, index) => (
          <Col xs={6} sm={4} md={2} key={index} className="text-center">
            <Image 
              src={client.src} 
              alt={client.alt} 
              fluid 
              className="client-logo"
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default FirstSection;


import { Container, Row } from "react-bootstrap";
import "./FirstBanner.css";
const FloatingBalls = () => {
  
 
 
 

 
  return (
    <div
      className="wave-shape d-flex justify-content-center align-items-center position-relative overflow-hidden bg-dark"
      style={{ height: "500px" }}
      
    >
      <div className="background"></div>
      <Container>
        <Row className="banner1" style={{ position: "relative", zIndex: 2 }}>
          <h1 className="fw-bold banner1-heading-offshore text-center ">
            Ignite Innovation, Unleash Potential!
          </h1>
 
          <p className="mt-3 banner1-content text-white text-center">
            Fuelled by innovation and cutting-edge technology, our developers
            craft web and mobile experiences that captivate customers.
          </p>
          <div className="text-center mt-4">
            <a href="/about" className="btn premium-btn me-3">
              Learn More
            </a>
            <a href="/contact" className="btn premium-btn-outline">
              Contact Us
            </a>
          </div>
        </Row>
      </Container>
 
      
    </div>
  );
};
 
export default FloatingBalls;
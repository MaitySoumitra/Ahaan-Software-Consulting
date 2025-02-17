import { Container, Row, Col, Button, Image, Badge } from "react-bootstrap";
import BannerImage from "../../../assets/images/banner/banner1.jpg"
import Group1 from "../../../assets/images/banner/Group1.jpg";
import Group2 from "../../../assets/images/banner/Group2.jpg";
import Group3 from "../../../assets/images/banner/Group3.jpg";
import Group4 from "../../../assets/images/banner/Group4.jpg";
import Group5 from "../../../assets/images/banner/Group5.jpg";
import "./FirstBanner.css"

const FirstBanner = () => {
  return (
    <div className="hero-section position-relative">
    {/* Background Image */}
    <Image
      src={BannerImage} // Replace with your image path
      alt="Hero Background"
      className=" img-fluid"
      style={{width:"100%", height: "730px", objectFit: "cover" }}
    />
    
   
    <Container className="position-absolute top-50 start-0 translate-middle-y text-white px-5">
      <Row>
        <Col md={6}>
          <Badge bg="light" className="px-3 py-2 mb-3" style={{color:"#7E61BF", borderRadius:"22px", border:"1px solid #F9F5FF"}}>
            Technology & Design Studio
          </Badge>
          <h1 className="fw-bold banner1-heading-offshore">
            OFFSHORE DEDICATED 
          </h1>
         
          <h1 className="fw-bold banner1-heading-development">
          DEVELOPMENT
            </h1>
          <p className="mt-3 banner1-content">
            There are many variations of passages of Lorem Ipsum available, 
            but the majority have suffered alteration in some form, by injected 
            humour, or randomised words which don't look even slightly.
          </p>
          <button  className="mt-3 learn-more-banner1-btn">
            Learn More
          </button>
          <div className="mt-4">
            <p className="fw-bold">Certified by</p>
            <div className="d-flex gap-3 certified-img">
              <Image src={Group1} alt="Certification 1" width="50" className="rounded-circle"/>
              <Image src={Group2} alt="Certification 2" width="50" className="rounded-circle"/>
              <Image src={Group3} alt="Certification 3" width="50" className="rounded-circle"/>
              <Image src={Group4} alt="Certification 4" width="50" className="rounded-circle"/>
              <Image src={Group5} alt="Certification 4" width="50" className="rounded-circle"/>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  </div>
  );
};

export default FirstBanner;

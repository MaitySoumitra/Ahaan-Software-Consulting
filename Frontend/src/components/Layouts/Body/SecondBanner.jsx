import { Container, Row, Col, Button } from "react-bootstrap";
import { BsTelephoneFill } from "react-icons/bs";
import Banner2 from "../../../assets/images/banner2/banner2.png";
import { TbPhoneRinging } from "react-icons/tb";
import './SecondBanner.css'
const SecondBanner = () => {
  return (
    <div
      className="call-to-action text-white "
      style={{
        backgroundColor: "#4b3c8e", // Adjust to match your background color
        backgroundImage: `url(${Banner2})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        alignItems:"center",
        display:"flex",
        justifyContent:"center",
        position: "relative",
        height: "150px", 
        width:"100%"
      }}
    >
      {/* Overlay for darker background */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(14, 35, 105, 0.7)"
        }}
      ></div>

      {/* Content Area */}
      <Container style={{ position: "relative", zIndex: 1 }}>
        <Row
          className="align-items-center justify-content-center"
          style={{ height: "100%" }}
        >
          <Col md={4} className="d-flex justify-content-center ">
            <TbPhoneRinging size={40} className="me-3 align-items-center" />
            <div>
              <p className="call-for-more">Call For More Info</p >
              <h5 className="call-number mt-2">+13214210740</h5>
            </div>
          </Col>
          
           
          
          <Col md={5} className="">
            <h5 className="mb-0 req-call-center">
              Let’s Request A Schedule For Free Consultation
            </h5>
          </Col>
          <Col md={3} className="text-center">
            <button  className="banner2-contact-us">
              Contact Us
            </button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SecondBanner;

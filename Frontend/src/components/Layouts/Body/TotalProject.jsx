import { Container, Row, Col } from "react-bootstrap";
import CountUp from "react-countup";
import Count from "../../../assets/images/whychoose/count.png";

const StatsSection = () => {
  return (
    <div
      className="stats-section text-white text-center py-5"
      style={{
        backgroundImage: `url(${Count})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
      }}
    >
      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(60, 20, 200, 0.7)", // Adjust overlay color and opacity
        }}
      ></div>

      <Container style={{ position: "relative", zIndex: 1 }}>
        <Row>
          <Col md={3}>
            <h2 className="fw-bold" style={{fontSize:"45px"}}>
              <CountUp start={1} end={25} duration={5} />+
            </h2>
            <p>Business Coaches</p>
          </Col>
          <Col md={3}>
            <h2 className="fw-bold" style={{fontSize:"45px"}}>
              <CountUp start={1} end={40} duration={5} />+
            </h2>
            <p>Consultants</p>
          </Col>
          <Col md={3}>
            <h2 className="fw-bold" style={{fontSize:"45px"}}>
              <CountUp start={1} end={200} duration={8} />+
            </h2>
            <p>Completed Projects</p>
          </Col>
          <Col md={3}>
            <h2 className="fw-bold" style={{fontSize:"45px"}}>
              <CountUp start={1} end={190} duration={5} />+
            </h2>
            <p>Happy Customers</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default StatsSection;

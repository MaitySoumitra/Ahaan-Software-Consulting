import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import developer from "../../../assets/developer.png";
import satisfy from "../../../assets/satisfy.png";
import timeline from "../../../assets/timeline.png";
import global from "../../../assets/global.png";
import projects from "../../../assets/projects.png";
import "./Counter.css";

const Counter = () => {
  const counters = [
    { id: 1, count: "589+", text: "Happy Clients", image: satisfy },
    { id: 2, count: "711+", text: "Projects Completed", image: projects },
    { id: 3, count: "13+", text: "Clients Worldwide", image: global },
    { id: 4, count: "50+", text: "Developers Involved", image: developer },
    { id: 5, count: "15000+", text: "Project Hours", image: timeline },
  ];

  return (
    <Container fluid className="counter-section py-5">
      <Row className="justify-content-center">
        {counters.map((item) => (
          <Col
            key={item.id}
            xl={2} // 5 items in a row on extra-large screens
            lg={2} // 5 items in a row on large screens
            md={4} // 3 items per row on medium screens
            sm={6} // 2 items per row on small screens
            xs={12} // 1 item per row on extra-small screens
            className="counter-item text-center"
          >
            <img
              src={item.image}
              alt={item.text}
              className="counter-image mb-3 img-fluid"
            />
            <h3 className="counter-number">{item.count}</h3>
            <p className="counter-text">{item.text}</p>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Counter;

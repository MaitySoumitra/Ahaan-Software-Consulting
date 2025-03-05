import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import growth from '../../../assets/growth.png';
import hp from '../../../assets/hp.png';
import strat from '../../../assets/strat.png';
import digi from '../../../assets/digi.png';
import sales from '../../../assets/sales.png';

import "bootstrap/dist/css/bootstrap.min.css";
import "./Market.css";

const Market = () => {
  return (
    <Container fluid className="business-marketing bg">
      <Row className="align-items-center mx-5 px-5 py-0">
        <Col md={6} className="text-section">
          <Button className="mb-3 custom-button">
            Why Choose Us
          </Button>
          <h2 className="fw-bold">We Professional IT Business & Marketing and Sales</h2>
          <p className="text-muted mt-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry’s standard dummy text ever since the 1500s.
          </p>
          <Row className="mt-4">
            <Col md={6} className="feature-item d-flex align-items-center ml-3 mb-3">
              <img src={growth} alt="" className="icon me-2"/>
              <div>
                <h5>Business Growth</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </Col>
            <Col md={6} className="feature-item d-flex align-items-center ml-3 mb-3">
              <img src={hp} alt="" className="icon me-2"/>
              <div>
                <h5>24/7 User Support</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </Col>
            <Col md={6} className="feature-item d-flex align-items-center ml-3 mb-3">
              <img src={strat} alt="" className="icon me-2" />
              <div>
                <h5>Marketing Strategy</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </Col>
            <Col md={6} className="feature-item d-flex align-items-center ml-3 mb-3">
              <img src={digi} alt="" className="icon me-2" />
              <div>
                <h5>Digital Product</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </Col>
          </Row>
        </Col>
        <Col md={6} className="image-section p-5">
          <img
            src={sales}
            alt="Business Meeting"
            className="img-fluid rounded"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Market;

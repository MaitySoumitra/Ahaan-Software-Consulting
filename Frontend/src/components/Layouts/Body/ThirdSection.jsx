import { useState, useEffect } from "react";
import {
  FaBeer,
  FaLaptopCode,
  FaDatabase,
  FaShoppingCart,
  FaDev,
  FaVials,
} from "react-icons/fa";
import { Nav, Tab, Row, Col, Container } from "react-bootstrap";
import "./ThirdSection.css";

// Import tab template components
import Frontend from "./templates/Frontend";
import UIUX from "./templates/Uiux";
import Backend from "./templates/Backend";
import CMS from "./templates/Cms";
import DevOps from "./templates/Devops";
import Testing from "./templates/Testing";

const TabBar = () => {
  const [activeKey, setActiveKey] = useState("uiux");
  const tabs = ["uiux", "frontend", "backend", "cms", "devops", "testing"];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveKey((prevKey) => {
        const currentIndex = tabs.indexOf(prevKey);
        const nextIndex = (currentIndex + 1) % tabs.length;
        return tabs[nextIndex];
      });
    }, 1000000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Container>
      <div className="mt-5">
        <label className="section1-client-label">Our Technology Use</label>
      </div>
      <Tab.Container activeKey={activeKey} onSelect={(k) => setActiveKey(k)}>
        <Row className="our-tech-tab flex-column flex-sm-row flex-xs-row tab-mobile-row">
          <Col
            xs={4}
            sm={3}
            className="tabs-col-tech p-0 mobile-tab-nav"
          >
            <Nav
              variant="pills"
              className="flex-column tech-col-navbar justify-content-start"
            >
              <Nav.Item className="nav-item-tab">
                <Nav.Link eventKey="uiux" className="nav-link-tab">
                  <FaBeer className="nav-icon" />
                  <span className="d-none d-sm-inline"> UI/UX </span>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="nav-item-tab">
                <Nav.Link eventKey="frontend" className="nav-link-tab">
                  <FaLaptopCode className="nav-icon" />
                  <span className="d-none d-sm-inline"> FrontEnd </span>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="nav-item-tab">
                <Nav.Link eventKey="backend" className="nav-link-tab">
                  <FaDatabase className="nav-icon" />
                  <span className="d-none d-sm-inline"> BackEnd </span>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="nav-item-tab">
                <Nav.Link eventKey="cms" className="nav-link-tab">
                  <FaShoppingCart className="nav-icon" />
                  <span className="d-none d-sm-inline"> CMS </span>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="nav-item-tab">
                <Nav.Link eventKey="devops" className="nav-link-tab">
                  <FaDev className="nav-icon" />
                  <span className="d-none d-sm-inline"> DevOps </span>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="nav-item-tab">
                <Nav.Link eventKey="testing" className="nav-link-tab">
                  <FaVials className="nav-icon" />
                  <span className="d-none d-sm-inline"> Testing </span>
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>

          <Col
            xs={8}
            sm={9}
            className="tabs-col-tech tab-content-mobile"
          >
            <Tab.Content className="tech-tab-content">
              <Tab.Pane eventKey="frontend"><Frontend /></Tab.Pane>
              <Tab.Pane eventKey="uiux"><UIUX /></Tab.Pane>
              <Tab.Pane eventKey="backend"><Backend /></Tab.Pane>
              <Tab.Pane eventKey="cms"><CMS /></Tab.Pane>
              <Tab.Pane eventKey="devops"><DevOps /></Tab.Pane>
              <Tab.Pane eventKey="testing"><Testing /></Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>

      <p className="text-muted mx-auto mt-3 section1-content section1-content-p-tab">
        The success of our services depends on a perfectly laid-out process from
        the beginning to the end. And, we put YOU at the centre of everything we
        do, turning our promises into reality! We specialize in transforming
        business operations through the power of human and tech collaboration.
      </p>
    </Container>
  );
};

export default TabBar;

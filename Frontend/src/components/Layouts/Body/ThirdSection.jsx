import { useState } from "react";
import {
  FaFigma,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaJs,
  FaAngular,
  FaBootstrap,
  FaNodeJs,
  FaWordpress,
  FaShopify,
  FaAws,
} from "react-icons/fa";
import { CgFramer } from "react-icons/cg";
import {
  TbBrandAdobePhotoshop,
  TbBrandAdobeXd,
  TbBrandWebflow,
} from "react-icons/tb";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNuxtdotjs,
  SiExpress,
  SiMongodb,
  SiPhp,
  SiMysql,
  SiWoocommerce,
  SiSelenium,
  SiCypress,
  SiMocha,
  SiJest,
  SiDocker,
  SiKubernetes,
  SiGooglecloud,
  SiHostinger,
  SiWix,
} from "react-icons/si";
import { Nav, Tab, Row, Col, Container } from "react-bootstrap";
import "./ThirdSection.css";

const TabBar = () => {
  const [activeKey, setActiveKey] = useState("frontend");

  return (
    <Container>
      <div className="mt-5">
        <label className="section1-client-label">Our Technology Use</label>
      </div>
      <Tab.Container activeKey={activeKey} onSelect={(k) => setActiveKey(k)} >
        <Row className="our-tech-tab">
          {/* Sidebar Navigation */}
          <Col sm={2} className="tabs-col">
            <Nav variant="pills" className="flex-column">
              <Nav.Item className="nav-item-tab">
                <Nav.Link eventKey="uiux" className="nav-link-tab">
                  UI/UX Design
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="nav-item-tab">
                <Nav.Link eventKey="frontend" className="nav-link-tab">
                  FrontEnd
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="nav-item-tab">
                <Nav.Link eventKey="backend" className="nav-link-tab">
                  BackEnd
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="nav-item-tab">
                <Nav.Link eventKey="cms" className="nav-link-tab">
                  CMS / E-Commerce
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="nav-item-tab">
                <Nav.Link eventKey="devops" className="nav-link-tab">
                  DevOps
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="nav-item-tab">
                <Nav.Link eventKey="testing" className="nav-link-tab">
                  Testing
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>

          {/* Content Area */}
          <Col sm={10}>
            <Tab.Content>
              <Tab.Pane eventKey="frontend">
                <div className="tech-icons">
                  <div className="tech-icon">
                    <FaHtml5 size={60} color="#E34F26" />
                    <p className="tech-name" style={{ color: "#E34F26" }}>
                      HTML5
                    </p>
                  </div>
                  <div className="tech-icon">
                    <FaCss3Alt size={60} color="#1572B6" />
                    <p className="tech-name" style={{ color: "#1572B6" }}>
                      CSS3
                    </p>
                  </div>
                  <div className="tech-icon">
                    <FaReact size={60} color="#61DAFB" />
                    <p className="tech-name" style={{ color: "#61DAFB" }}>
                      ReactJS
                    </p>
                  </div>
                  <div className="tech-icon">
                    <FaJs size={60} color="#F7DF1E" />
                    <p className="tech-name" style={{ color: "#F7DF1E" }}>
                      JavaScript
                    </p>
                  </div>
                  <div className="tech-icon">
                    <FaAngular size={60} color="#DD0031" />
                    <p className="tech-name" style={{ color: "#DD0031" }}>
                      Angular
                    </p>
                  </div>
                  <div className="tech-icon">
                    <SiNextdotjs size={60} color="#000000" />
                    <p className="tech-name" style={{ color: "#000000" }}>
                      Next.js
                    </p>
                  </div>
                  <div className="tech-icon">
                    <SiTypescript size={60} color="#3178C6" />
                    <p className="tech-name" style={{ color: "#3178C6" }}>
                      TypeScript
                    </p>
                  </div>
                  <div className="tech-icon">
                    <SiTailwindcss size={60} color="#38B2AC" />
                    <p className="tech-name" style={{ color: "#38B2AC" }}>
                      Tailwind CSS
                    </p>
                  </div>
                  <div className="tech-icon">
                    <FaBootstrap size={60} color="#563D7C" />
                    <p className="tech-name" style={{ color: "#563D7C" }}>
                      Bootstrap
                    </p>
                  </div>
                  <div className="tech-icon">
                    <SiNuxtdotjs size={60} color="#00DC82" />
                    <p className="tech-name" style={{ color: "#00DC82" }}>
                      Nuxt.js
                    </p>
                  </div>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="uiux">
                <div className="tech-icons">
                  <div className="tech-icon">
                    <FaFigma size={60} color="#F24E1E" />
                    <p className="tech-name" style={{ color: "#F24E1E" }}>
                      Figma
                    </p>
                  </div>
                  <div className="tech-icon">
                    <TbBrandWebflow size={60} color="#136BED" />
                    <p className="tech-name" style={{ color: "#136BED" }}>
                      Webflow
                    </p>
                  </div>
                  <div className="tech-icon">
                    <CgFramer size={60} color="#84D6F7" />
                    <p className="tech-name" style={{ color: "#84D6F7" }}>
                      Framer
                    </p>
                  </div>
                  <div className="tech-icon">
                    <TbBrandAdobeXd size={60} color="#F123AC" />
                    <p className="tech-name" style={{ color: "#F123AC" }}>
                      Adobe XD
                    </p>
                  </div>
                  <div className="tech-icon">
                    <TbBrandAdobePhotoshop size={60} color="#35D0F7" />
                    <p className="tech-name" style={{ color: "#35D0F7" }}>
                      Photoshop
                    </p>
                  </div>
                  <div className="tech-icon">
                    <SiWix size={60} color="#1F2E3A" />
                    <p className="tech-name" style={{ color: "#1F2E3A" }}>
                      Wix Studio
                    </p>
                  </div>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="backend">
                <div className="tech-icons">
                  <div className="tech-icon">
                    <FaNodeJs size={60} color="#609941" />
                    <p className="tech-name" style={{ color: "#609941" }}>
                      Node.js
                    </p>
                  </div>
                  <div className="tech-icon">
                    <SiExpress size={60} color="black" />
                    <p className="tech-name" style={{ color: "black" }}>
                      Express.js
                    </p>
                  </div>
                  <div className="tech-icon">
                    <SiMongodb size={60} color="#4DA040" />
                    <p className="tech-name" style={{ color: "#4DA040" }}>
                      MongoDB
                    </p>
                  </div>
                  <div className="tech-icon">
                    <SiPhp size={60} color="#617EB4" />
                    <p className="tech-name" style={{ color: "#617EB4" }}>
                      PHP
                    </p>
                  </div>
                  <div className="tech-icon">
                    <SiMysql size={60} color="#03777C" />
                    <p className="tech-name" style={{ color: "#03777C" }}>
                      MySql
                    </p>
                  </div>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="cms">
                <div className="tech-icons">
                  <div className="tech-icon">
                    <FaWordpress size={60} color="#207196" />
                    <p className="tech-name" style={{ color: "#207196" }}>
                      WordPress
                    </p>
                  </div>
                  <div className="tech-icon">
                    <FaShopify size={60} color="#90B945" />
                    <p className="tech-name" style={{ color: "#90B945" }}>
                      Shopify
                    </p>
                  </div>
                  <div className="tech-icon">
                    <SiWoocommerce size={60} color="#97598B" />
                    <p className="tech-name" style={{ color: "#97598B" }}>
                      WooCommerce
                    </p>
                  </div>
                  <div className="tech-icon">
                    <TbBrandWebflow size={60} color="#136BED" />
                    <p className="tech-name" style={{ color: "#136BED" }}>
                      Webflow
                    </p>
                  </div>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="devops">
                <div className="tech-icons">
                  <div className="tech-icon">
                    <SiDocker size={60} color="#0997E5" />
                    <p className="tech-name" style={{ color: "#0997E5" }}>
                      Docker
                    </p>
                  </div>
                  <div className="tech-icon">
                    <SiKubernetes size={60} color="#306ADF" />
                    <p className="tech-name" style={{ color: "#306ADF" }}>
                      Kubernetes
                    </p>
                  </div>
                  <div className="tech-icon">
                    <FaAws size={60} color="#1E272C" />
                    <p className="tech-name" style={{ color: "#1E272C" }}>
                      AWS
                    </p>
                  </div>
                  <div className="tech-icon">
                    <SiGooglecloud size={60} color="#0086F8" />
                    <p className="tech-name" style={{ color: "#0086F8" }}>
                      GCP
                    </p>
                  </div>
                  <div className="tech-icon">
                    <SiHostinger size={60} color="#6445C1" />
                    <p className="tech-name" style={{ color: "#6445C1" }}>
                      Hostinger
                    </p>
                  </div>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="testing">
                <div className="tech-icons">
                  <div className="tech-icon">
                    <SiJest size={60} color="#944058" />
                    <p className="tech-name" style={{ color: "#944058" }}>
                      Jest
                    </p>
                  </div>
                  <div className="tech-icon">
                    <SiMocha size={60} color="#866041" />
                    <p className="tech-name" style={{ color: "#866041" }}>
                      Mocha
                    </p>
                  </div>
                  <div className="tech-icon">
                    <SiCypress size={60} color="#0A3F49" />
                    <p className="tech-name" style={{ color: "#0A3F49" }}>
                      Cypress
                    </p>
                  </div>
                  <div className="tech-icon">
                    <SiSelenium size={60} color="#00AE00" />
                    <p className="tech-name" style={{ color: "#00AE00" }}>
                      Selenium
                    </p>
                  </div>
                </div>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
      <p className="text-muted mx-auto mt-3 section1-content section1-content-p">
          Whether you require a complex enterprise software development solution
          or seamless software integration, we will take your business to the
          next level of success with IT consulting services & software
          development solutions.
        </p>
    </Container>
  );
};

export default TabBar;

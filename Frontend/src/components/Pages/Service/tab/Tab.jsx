import React, { useState } from "react";
import { Container, Row, Col, Nav, Button } from "react-bootstrap";
import html from '../../../../assets/html.png';
import css from '../../../../assets/css.png';
import tail from '../../../../assets/tail.png';
import ts from '../../../../assets/ts.png';
import js from '../../../../assets/js.png';
import react from '../../../../assets/react.png';
import ang from '../../../../assets/ang.png';
import next from '../../../../assets/next.png';
import nuxt from '../../../../assets/nuxt.png';
import boot from '../../../../assets/boot.png';
import figma from  '../../../../assets/figma.png';
import framer from  '../../../../assets/framer.png';
import webflow from  '../../../../assets/webflow.png';
import node from  '../../../../assets/node.png';
import wordpress from  '../../../../assets/wordpress.png';
import shopify from  '../../../../assets/shopify.png';
import './Tab.css';

const categories = [
  "FrontEnd",
  "BackEnd",
  "UI/UX Design",
  "CMS / E-Commerce",
  "DevOps",
  "Testing",
];

const frontendTech = [
  { name: "html5", image: html },
  { name: "CSS3", image: css },
  { name: "ReactJS", image: react },
  { name: "Javascript", image: js },
  { name: "Angular", image: ang },
  { name: "Next.js", image: next },
  { name: "Typescript", image: ts },
  { name: "Tailwind CSS", image: tail },
  { name: "Bootstrap", image: boot },
  { name: "Nuxt.js", image: nuxt },
];

const design = [
    { name: "Figma", image:  figma },
    { name: "Framer", image: framer },
    { name: "Webflow", image: webflow },
  ];
  const backend = [
    { name: "NodeJS", image:node },
  ];
  const cms = [
    { name: "Wordpress", image:wordpress },
    { name: "Shopify", image:shopify },
  ];
const Tab = () => {
  const [activeTab, setActiveTab] = useState("FrontEnd");

  return (
    <Container className="mt-4 tab">
    <div><Button className="custom-btn">Our Technology Use</Button></div>
      <div className="tab-heading">
        <h2>Empowering Growth at Every Stage of Your AI-driven Custom Software Development Journey</h2>
        <p>Whether you require a complex enterprise software development solution or seamless software integration, we will take your business to the next level of success with IT consulting services & software development solutions.</p>
      </div>
      <Row className="d-flex align-items-start">
        <Col md={3} className="d-inline-flex flex-column">
          <Nav variant="pills" className="flex-column">
            {categories.map((category, index) => (
              <Nav.Item key={index} className="tab-items">
                <Nav.Link
                  active={activeTab === category}
                  onClick={() => setActiveTab(category)}
                  className="text-start"
                >
                  {category}
                </Nav.Link>
              </Nav.Item>
            ))}
          </Nav>
        </Col>
        <Col md={9} className="d-inline-flex flex-wrap">
          {activeTab === "FrontEnd" && (
            <Row className="w-100">
              {frontendTech.map((tech, index) => (
                <Col key={index} xs={6} md={2} className="text-center mb-3">
                  <img src={tech.image} style={{ width: "70px" }} /><br />
                  <small>{tech.name}</small>
                </Col>
              ))}
            </Row>
          )}
          {activeTab === "UI/UX Design" && (
            <Row className="w-100">
              {design.map((tech, index) => (
                <Col key={index} xs={6} md={2} className="text-center mb-3">
                  <img src={tech.image} style={{ width: "70px" }} /><br />
                  <small>{tech.name}</small>
                </Col>
              ))}
            </Row>
          )}
          {activeTab === "BackEnd" && (
            <Row className="w-100">
              {backend.map((tech, index) => (
                <Col key={index} xs={6} md={2} className="text-center mb-3">
                  <img src={tech.image} style={{ width: "70px" }} /><br />
                  <small>{tech.name}</small>
                </Col>
              ))}
            </Row>
          )}
          {activeTab === "CMS / E-Commerce" && (
            <Row className="w-100">
              {cms.map((tech, index) => (
                <Col key={index} xs={6} md={2} className="text-center mb-3">
                  <img src={tech.image} style={{ width: "70px" }} /><br />
                  <small>{tech.name}</small>
                </Col>
              ))}
            </Row>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Tab;

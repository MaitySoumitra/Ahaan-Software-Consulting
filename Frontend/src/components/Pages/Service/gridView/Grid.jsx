import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import { CiCircleCheck } from "react-icons/ci";
import "bootstrap/dist/css/bootstrap.min.css";
import './Grid.css';
import card1 from '../../../../assets/card1.png';
import card2 from '../../../../assets/card2.png';
import card3 from '../../../../assets/card3.png';
import card4 from '../../../../assets/card4.png';
import card5 from '../../../../assets/card5.png';
import card6 from '../../../../assets/card6.png';
import card7 from '../../../../assets/card7.png';
import card8 from '../../../../assets/card8.png';
import card9 from '../../../../assets/card9.png';
import { FaArrowCircleRight } from "react-icons/fa";
const cardData = [
  {
    image: card1,
    title: "UI/UX Design",
    description:
      "Get our state-of-the-art UI/UX design services for creating a captivating user experience! To make your digital goods aesthetically pleasing and helpful.",
    features: ["Wireframing", "Prototyping", "User Research", "Usability Testing", "Usability Testing"],
  },
  {
    image: card2,
    title: "Web Development",
    description:
      "Get our state-of-the-art UI/UX design services for creating a captivating user experience! To make your digital goods aesthetically pleasing and helpful.",
    features: ["Frontend Design", "User Testing", "Site Architecture", "SEO Optimization", "Backend"],
  },
  {
    image: card3,
    title: "App Development",
    description:
      "Get our state-of-the-art UI/UX design services for creating a captivating user experience! To make your digital goods aesthetically pleasing and helpful.",
    features: ["Code Crafting", "Code Crafting", "Quality Assurance", "Support & Updates", "Usability Testing"],
  },
  {
    image: card4,
    title: "E-commerce Development",
    description:
      "Get our state-of-the-art UI/UX design services for creating a captivating user experience! To make your digital goods aesthetically pleasing and helpful.",
      features: ["Wireframing", "Prototyping", "User Research", "Usability Testing", "Usability Testing"],
  },
  {
    image: card5,
    title: "LinkedIn Marketing",
    description:
      "Get our state-of-the-art UI/UX design services for creating a captivating user experience! To make your digital goods aesthetically pleasing and helpful.",
    features: ["SEO Strategy", "PPC Campaigns", "Analytics Reporting", "Content Creation","Social Media "],
  },
  {
    image: card6,
    title: "Meta Platform Marketing",
    description:
      "Get our state-of-the-art UI/UX design services for creating a captivating user experience! To make your digital goods aesthetically pleasing and helpful.",
      features: ["SEO Strategy", "PPC Campaigns", "Analytics Reporting", "Content Creation","Social Media "],
  },
  {
    image: card7,
    title: "Google Marketing",
    description:
      "Get our state-of-the-art UI/UX design services for creating a captivating user experience! To make your digital goods aesthetically pleasing and helpful.",
      features: ["SEO Strategy", "PPC Campaigns", "Analytics Reporting", "Content Creation","Social Media"],
  },
  {
    image: card8,
    title: "Branding",
    description:
      "Get our state-of-the-art UI/UX design services for creating a captivating user experience! To make your digital goods aesthetically pleasing and helpful.",
      features: ["Wireframing", "Prototyping", "User Research", "Usability Testing", "Usability Testing"],
  },
  {
    image: card9,
    title: "SaaS Designs",
    description:
      "Get our state-of-the-art UI/UX design services for creating a captivating user experience! To make your digital goods aesthetically pleasing and helpful.",
      features: ["Wireframing", "Prototyping", "User Research", "Usability Testing", "Usability Testing"],
  },
];

const Grid = () => {
  return (
    <Container className="my-5">
        <div className="grid-heading">
            <h2>Accelerate Technology Innovation With Software Development Services</h2>
            <p>Whether you require a complex enterprise software development solution or seamless software integration, we will take your business to the next level of success with IT consulting services & software development solutions.</p>
        </div>
      <Row className="gy-5  service">
        {cardData.map((card, index) => (
          <Col key={index} md={4}>
            <Card className="rounded-4 overflow-hidden border border-light service-grid-card">
              <Card.Img variant="top" src={card.image} alt={card.title} className="img-fluid" />
              <Card.Body className="p-4 service-grid-card-body">
                <Card.Title className="text-title gap-5 fw-bold d-flex align-items-center service-grid-card-title">
                  {card.title}
          
                </Card.Title>
                <Card.Text className="text-muted text-start mt-2 service-grid-card-text">{card.description}</Card.Text>
                <div className="mt-3 row row-cols-2 grid-icon-list">
                  {card.features.map((feature, i) => (
                    <div key={i} className="d-flex align-items-center text-dark col">
                      <CiCircleCheck className="me-2 fw-bold icon" />
                      {feature}
                    </div>
                  ))}
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
export default Grid;

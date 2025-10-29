import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import { CiCircleCheck } from "react-icons/ci";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Grid.css";

const cardData = [
  {
    image: "https://ahaanmedia.com/asc/Service/card1.png",
    title: "UI/UX Design",
    description:
      "UI/UX demands a deep understanding of online customer behaviour and continuous testing. With real market insights from diverse projects, we craft dynamic websites and mobile apps that deliver seamless, engaging brand interactions.",
    features: ["Graphic", "Wireframing", "Web app", "Architecture", "Mobile App"],
  },
  {
    image: "https://ahaanmedia.com/asc/Service/card2.png",
    title: "Web Design & Development",
    description:
      "Content is king, but your website is the castle! Build a dynamic “digital empire” for your brand with a visually captivating, SEO-friendly, feature-loaded, and mobile-responsive website – crafted by our expert team.",
    features: ["Frontend", "Backend", "API & Integration", "WordPress", "Shopify", "WooCommerce"],
  },
  {
    image: "https://ahaanmedia.com/asc/Service/card3.png",
    title: "App Development",
    description:
      "Grow and promote your business on the go with a robust, custom-tailored mobile app. Leveraging cutting-edge technology, we build iOS, Android, and hybrid solutions designed for more engagement, better scalability, and greater performance.",
    features: ["Hybrid App", "Native App", "React Native", "Kotlin", "Flutter"],
  },
  {
    image: "https://ahaanmedia.com/asc/Service/card4.png",
    title: "E-commerce Development",
    description:
      "Boost sales and elevate customer satisfaction with our expert e-commerce web development solutions. We craft secure, high-performing stores with robust strategies to expand your customer base and drive measurable results.",
    features: ["Shopify", "Magento", "WooCommerce", "BigCommerce"],
  },
  {
    image: "https://ahaanmedia.com/asc/Service/card5.png",
    title: "Social Media Management",
    description:
      "We go beyond likes, comments, and shares to craft well-researched, insight-driven, and sustainable content strategies that truly resonate with your audience. Trust us to spark meaningful conversations, foster a genuine community, and make real impact!",
    features: ["Organic & Paid Social", "Instagram Marketing", "LinkedIn Marketing", "YouTube Marketing", "Social Media Reputation", "Social Media Analytics"],
  },
  {
    image: "https://ahaanmedia.com/asc/Service/card7.png",
    title: "Google Marketing",
    description:
      "Guesswork wastes money—your business deserves better! Our Google Ads experts have mastered the art of high-performing campaigns. With data-driven precision, we optimize keywords, streamline chaotic account structures, and craft compelling copy and creatives. The result? Ad campaigns that don’t just run—they dominate!",
    features: ["Competitor Analysis", "Campaign & Ad Copy", "Detailed Reporting", "Google Ads", "Google Shopping", "Google Video Ads", "Google Analytics"],
  },
];

const Grid = () => {
  return (
    <Container className="my-5">
      <div className="grid-heading text-center">
        <h2>Embark On Digital Transformation Journey With Our Services</h2>
        <p>
          We understand, collaborate, and empower! From complex Software
          Development Service to Seamless Integration, experience how our
          next-gen IT consulting and software solutions can transform and
          accelerate your business.
        </p>
      </div>
      <Row className="gy-5 service">
        {cardData.map((card, index) => (
          <Col key={index} md={4}>
            <Card className="rounded-4 overflow-hidden border border-light service-grid-card h-100 d-flex flex-column">
              <Card.Img variant="top" src={card.image} alt={card.title} className="img-fluid" />
              <Card.Body className="p-4 d-flex flex-column flex-grow-1">
                <Card.Title className="text-title fw-bold service-grid-card-title">{card.title}</Card.Title>
                <Card.Text className="text-muted text-start mt-2 service-grid-card-text flex-grow-1">
                  {card.description}
                </Card.Text>
                <div className="mt-3 row row-cols-2 grid-icon-list">
                  {card.features.map((feature, i) => (
                    <div key={i} className="d-flex align-items-center text-dark col">
                      <CiCircleCheck className="featured-icon" />
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
};

export default Grid;

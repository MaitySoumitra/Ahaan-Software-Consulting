import React, { useState } from "react";
import { Accordion, Card, Button, Row, Col } from "react-bootstrap"; // Import React Bootstrap components
import Whychoose from "../../../assets/images/whychoose/whychoose.jpg"; // Replace with actual image paths
import { BiSolidDownArrow } from "react-icons/bi";
import "./ImageAccordian.css";

const accordionData = [
  {
    title: "Retail & E-commerce",
    content:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. ",
    image: "url('/path/to/your-image1.jpg')",
  },
  {
    title: "Healthcare",
    content: "Lorem Ipsum content for Healthcare.",
    image: "url('/path/to/your-image2.jpg')",
  },
  {
    title: "Travel & Hospitality",
    content: "Lorem Ipsum content for Travel & Hospitality.",
    image: "url('/path/to/your-image3.jpg')",
  },
  {
    title: "Banking & Insurance",
    content: "Lorem Ipsum content for Banking & Insurance.",
    image: "url('/path/to/your-image4.jpg')",
  },
  {
    title: "Fitness & Wellness",
    content: "Lorem Ipsum content for Fitness & Wellness.",
    image: "url('/path/to/your-image5.jpg')",
  },
  {
    title: "Education",
    content: "Lorem Ipsum content for Education.",
    image: "url('/path/to/your-image6.jpg')",
  },
];

const OurIndustry = () => {
  const [openIndex, setOpenIndex] = useState(null); // Track which accordion item is open

  // Function to toggle the accordion open and closed
  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      <Accordion>
        {accordionData.map((item, index) => (
          <Card
            key={index}
            style={{
              marginBottom: "10px",
              borderRadius: "5px",
              overflow: "hidden",
              transition: "all 0.5s ease-in-out",
            }}
          >
            {/* Conditionally render Card.Header when the accordion item is collapsed */}
            {openIndex !== index && (
              <Card.Header
                onClick={() => toggleAccordion(index)}
                style={{
                  cursor: "pointer",
                  background: `${item.image} center/cover no-repeat`, // Image used when collapsed
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  color: "#333",
                  fontWeight: "bold",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "25px",
                  padding: "15px",
                  transition: "background-color 0.5s ease-in-out",
                }}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <span>{openIndex === index ? "▼" : "▶"}</span>
                  <span>{item.title}</span>
                </div>
              </Card.Header>
            )}

            {/* Accordion Content */}
            {openIndex === index && (
              <Card.Body
                style={{
                  background: `url(${Whychoose})`,
                  color: "#555",
                  objectFit: "contain",
                  padding: "15px",
                  transition: "max-height 0.8s ease-in-out", 
                  maxHeight: openIndex === index ? "500px" : "0",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "start",
                    gap: "20px",
                  }}
                >
                  <span className="industry-accdrn-title">
                    {openIndex === index ? (
                      <BiSolidDownArrow color="white" />
                    ) : (
                      "▶"
                    )}
                  </span>
                  <span className="industry-accdrn-title">{item.title}</span>
                </div>
                <Row className="align-items-center">
                  <Col xs={9}>
                    <p className="industry-accdrn-content">{item.content}</p>
                  </Col>
                  <Col xs={3} className="text-center">
                    <button
                      onClick={() => toggleAccordion(index)}
                      variant="link"
                      className="banner2-contact-us"
                    >
                      View More
                    </button>
                  </Col>
                </Row>
              </Card.Body>
            )}
          </Card>
        ))}
      </Accordion>
    </div>
  );
};

export default OurIndustry;

import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";

import Imageaccordian from "./Imageaccordian"


const accordionData = [
    { title: "Retail & E-commerce", content: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.", background: "/your-image-url.jpg" },
    { title: "Healthcare", content: "Lorem Ipsum content for Healthcare." },
    { title: "Travel & Hospitality", content: "Lorem Ipsum content for Travel & Hospitality." },
    { title: "Banking & Insurance", content: "Lorem Ipsum content for Banking & Insurance." },
    { title: "Fitness & Wellness", content: "Lorem Ipsum content for Fitness & Wellness." },
    { title: "Education", content: "Lorem Ipsum content for Education." },
  ];

const OurIndustry = () => {
    const [openIndex, setOpenIndex] = useState(0); // First accordion is open by default

    const toggleAccordion = (index) => {
      setOpenIndex(openIndex === index ? null : index);
    };

 
  return (
    <Container>
      <div className="mt-5">
        <label className="section1-client-label">Our Industry</label>
        <h2 className="mt-2 fw-bold first-section-heading">
          Enterprise Software Development Services for Every Industry
        </h2>

        <p className="text-muted mx-auto mt-3 section1-content">
          Whether you require a complex enterprise software development solution
          or seamless software integration, we will take your business to the
          next level of success with IT consulting services & software
          development solutions.
        </p>
      </div>

    <Imageaccordian />
    </Container>
  );
};

export default OurIndustry;

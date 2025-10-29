import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./TabContent.css";

  const gridcontent = [
    {
      imgSrc: "https://ahaanmedia.com/asc/Industry/CorporateLearningSolutions.webp",
      title: 'Corporate Learning Solutions',
      description: 'Convert corporate learning with our unique and innovative EduTech solutions. Enhance your employee skills and drive organizational growth with tailored training programs and achieve all round success. '
    },
    {
      imgSrc: "https://ahaanmedia.com/asc/Industry/EducationtoCareerSolutions.jpg",
      title: 'Education-to-Career (E2C) Solutions',
      description: 'Transform the E2C (Education-To-Career) pathways of learners by developing a large-scale e-learning and education software development solutions, precisely tailored to our clients’ needs. '
    },
    {
      imgSrc: "https://ahaanmedia.com/asc/Industry/ProfessionalUpskillingPrograms.png",
      title: 'Professional Upskilling Programs',
      description: 'We equip students, job seekers, and working professionals with skill-bases professional e-learning training solutions designed to enhance career growth and unlock their full potential.'
    },
  ];

const Education = () => {
  return (
    <div className="ecommerce-section">
      <h2 className="fw-bold">Reimagine Education For The Future Of Learning</h2>
      <p className="text-muted">
      As your trusted partner in e-learning transformation, we deliver robust, user-centric, and interactive educational solutions. Whether you aim to enhance student engagement or empower trainers with anytime, anywhere access to learning content, our custom e-learning app development solutions can make it happen!
      </p>
      <img src="https://ahaanmedia.com/asc/Industry/Education.jpg" alt="E-Commerce" className="content-image" />

      <h2 className="fw-bold text-left Revitalize mt-3">
      Take Education To A New Height Of Excellence!
      </h2>
      <p className="text-left text-muted">
      At Ahaan Software Consulting, we go beyond being just an e-learning solution partner—we redefine the learning experience for educators, trainers, and students with our innovative, user-friendly EdTech solutions.
      </p>


      <h2 className="fw-bold text-left Revitalize">
      Revolutionize Education Across Sectors with Our Custom Solutions!
      </h2>
      {gridcontent.map((feature, index) => (
        <Row className="mb-4" key={index}>
          <Col md={6} className={index % 2 === 1 ? 'order-md-2' : ''}>
            <img src={feature.imgSrc} alt={feature.title} className="img-fluid" />
          </Col>
          <Col md={6} className={index % 2 === 1 ? 'order-md-1' : ''}>
            <h2 className="grids-heading">{feature.title}</h2>
            <p className="grids-content">{feature.description}</p>
          </Col>
        </Row>
      ))}
    </div>
  );
};

export default Education;

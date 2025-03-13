import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Portfolio.css";
import portfolio1 from '../../../assets/portfolio1.webp';
import portfolio2 from '../../../assets/portfolio2.webp';
import portfolio3 from '../../../assets/portfolio3.webp';
import portfolio4 from '../../../assets/portfolio4.webp';
import portfolio5 from '../../../assets/portfolio5.webp';
import portfolio6 from '../../../assets/portfolio6.webp';
import portfolio7 from '../../../assets/portfolio7.jpg';
import portfolio8 from '../../../assets/portfolio8.jpg';

const projects = [
  { id: 1, image: portfolio1, link: "https://example.com" },
  { id: 2, image: portfolio2, link: "https://example.com" },
  { id: 3, image: portfolio3, link: "https://example.com" },
  { id: 4, image: portfolio4, link: "https://example.com" },
  { id: 5, image: portfolio5, link: "https://example.com" },
  { id: 6, image: portfolio6, link: "https://example.com" },
  { id: 7, image: portfolio7, link: "https://example.com" },
  { id: 8, image: portfolio8, link: "https://example.com" },
];

const Portfolio = () => {
  return (
    <Container className="portfolio-section text-center py-5">
      <h2 className="portfolio-title mb-3">Digital Solutions</h2>
      <p className="portfolio-subtitle mb-4">Showcasing Our Most Recent Web Creations</p>
      <Row>
        {projects.map((project) => (
          <Col key={project.id} xl={3} lg={4} md={6} sm={6} xs={12} className="mb-4">
            <div className="portfolio-item">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <img src={project.image} className="portfolio-image img-fluid" alt="Portfolio Project" />
              </a>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Portfolio;

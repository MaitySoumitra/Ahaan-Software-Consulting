import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Portfolio.css";

const projects = [
  { id: 1, image: "https://ahaanmedia.com/asc/Landing/BNP.png", link: "https://www.bnpcoefficient.com/" },
  { id: 2, image: "https://ahaanmedia.com/asc/Landing/C2V.png", link: "https://c2v.ahaanmedia.com/" },
  { id: 3, image: "https://ahaanmedia.com/asc/Landing/Ekyaa.png", link: "https://ekyaa.in/" },
  { id: 4, image: "https://ahaanmedia.com/asc/Landing/Grocery.png", link: "http://website-asc.42web.io/" },
  { id: 5, image: "https://ahaanmedia.com/asc/Landing/HELI.png", link: "https://heliclothing.com/" },
  { id: 6, image: "https://ahaanmedia.com/asc/Landing/Hillpeak.png", link: "https://hillpeaktours.com/" },
  { id: 7, image: "https://ahaanmedia.com/asc/Landing/Innovare.png", link: "https://innovare-group.com/" },
  { id: 8, image: "https://ahaanmedia.com/asc/Landing/Veniyok.png", link: "https://hotel-vinayak.com/" },
  { id: 9, image: "https://ahaanmedia.com/asc/Landing/Manufacture.png", link: "http://sugamdemo.great-site.net/" },
  { id: 10, image: "https://ahaanmedia.com/asc/Landing/TrishaLoanOfficer.png", link: "https://trishloanofficer.com/" },
  { id: 11, image: "https://ahaanmedia.com/asc/Landing/Drizzel.png", link: "https://drizzle.ahaanmedia.com/" },
  { id: 12, image: "https://ahaanmedia.com/asc/Landing/Pawshion.png", link: "https://demo3website.myshopify.com/" },
];

const Portfolio = () => {
  return (
    <Container className="portfolio-section text-center py-5">
      <h2 className="portfolio-title mb-3">Digital Solutions</h2>
      <p className="portfolio-subtitle mb-4">Showcasing Our Most Recent Web Creations</p>
      <Row>
        {projects.map((project) => (
          <Col key={project.id} xl={3} lg={4} md={6} sm={6} xs={12} className="mb-3">
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

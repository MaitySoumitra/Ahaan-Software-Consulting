import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Portfolio.css";
import portfolio1 from '../../../assets/Portfolio/BNP.png';
import portfolio2 from '../../../assets/Portfolio/C2V.png';
import portfolio3 from '../../../assets/Portfolio/Ekyaa.png';
import portfolio4 from '../../../assets/Portfolio/Grocery.png';
import portfolio5 from '../../../assets/Portfolio/HELI.png';
import portfolio6 from '../../../assets/Portfolio/Hillpeak.png';
import portfolio7 from '../../../assets/Portfolio/Innovare.png';
import portfolio8 from '../../../assets/Portfolio/Veniyok.png';
import portfolio9 from '../../../assets/Portfolio/Manufacture.png';
import portfolio10 from '../../../assets/Portfolio/TrishaLoanOfficer.png';
import portfolio11 from '../../../assets/Portfolio/Drizzel.png';
import portfolio12 from '../../../assets/Portfolio/Pawshion.png';

const projects = [
  { id: 1, image: portfolio1, link: "https://www.bnpcoefficient.com/" },
  { id: 2, image: portfolio2, link: "https://c2v.ahaanmedia.com/" },
  { id: 3, image: portfolio3, link: "https://ekyaa.in/" },
  { id: 4, image: portfolio4, link: "http://website-asc.42web.io/" },
  { id: 5, image: portfolio5, link: "https://heliclothing.com/" },
  { id: 6, image: portfolio6, link: "https://hillpeaktours.com/" },
  { id: 7, image: portfolio7, link: "https://innovare.ahaanmedia.com/" },
  { id: 8, image: portfolio8, link: "https://hotel-vinayak.com/" },
  { id: 9, image: portfolio9, link: "http://sugamdemo.great-site.net/" },
  { id: 10, image: portfolio10, link: "https://trishloanofficer.com/" },
  { id: 11, image: portfolio11, link: "https://drizzle.ahaanmedia.com/" },
  { id: 12, image: portfolio12, link: "https://demo3website.myshopify.com/" },
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

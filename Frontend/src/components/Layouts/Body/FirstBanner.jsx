import { useState, useEffect } from "react";
import { Container, Row, Col, Image, Badge } from "react-bootstrap";
import "./FirstBanner.css";

// Import banner images
import Banner1 from "../../../assets/HomeBanner.png";
import Banner2 from "../../../assets/HomeBanner2.png";
import Banner3 from "../../../assets/HomeBanner3.png";
import Banner4 from "../../../assets/HomeBanner4.png";
import Banner5 from "../../../assets/HomeBanner5.png";
import Banner6 from "../../../assets/HomeBanner6.png";

// Import certification images
import Group1 from "../../../assets/images/banner/Group1.jpg";
import Group2 from "../../../assets/images/banner/Group2.jpg";
import Group3 from "../../../assets/images/banner/Group3.jpg";
import Group4 from "../../../assets/images/banner/Group4.jpg";
import Group5 from "../../../assets/images/banner/Group5.jpg";

const banners = [Banner1, Banner2, Banner3, Banner4, Banner5, Banner6]; // Array of banners

const FirstBanner = () => {
  const [currentBanner, setCurrentBanner] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <Container fluid className="p-0">
      <div
        className="banner-container"
        style={{
          backgroundImage: `url(${banners[currentBanner]})`,
        }}
      >
        <Container>
          <Row className="w-100 banner1">
            <Col md={10}>
              <Badge
                bg="light"
                className="px-3 py-2 mb-3"
                style={{
                  color: "#C7892B",
                  borderRadius: "22px",
                  border: "1px solid #F9F5FF",
                }}
              >
                Technology & Design Studio
              </Badge>
              <h1 className="fw-bold banner1-heading-offshore">
                Reimagine Success, Redefine Possibilities Pioneering Innovative Development
              </h1>
              <p className="mt-3 banner1-content">
                Fuelled by innovation and cutting-edge technology, our
                developers craft web and mobile experiences that captivate
                customers and take your business forward. Let’s transform your
                vision into victory and idea into a game-changing development
                moment!
              </p>
              <a href="/about" className="mt-3 learn-more-banner1-btn">
                Learn More
              </a>
              <div className="mt-4">
                <p className="fw-bold">Certified by</p>
                <div className="d-flex justify-content-start certified-img">
                  <Image src={Group1} alt="Certification 1" width="50" className="rounded-circle" />
                  <Image src={Group2} alt="Certification 2" width="50" className="rounded-circle" />
                  <Image src={Group3} alt="Certification 3" width="50" className="rounded-circle" />
                  <Image src={Group4} alt="Certification 4" width="50" className="rounded-circle" />
                  <Image src={Group5} alt="Certification 5" width="50" className="rounded-circle" />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Container>
  );
};

export default FirstBanner;

import React from "react";
import Educations from "../../../../assets/images/banner2/Education.jpg";
import { Container, Row, Col, Card } from "react-bootstrap";
import {
  FaHeadset,
  FaChartLine,
  FaShippingFast,
  FaShoppingCart,
} from "react-icons/fa";
import "./TabContent.css";
import Ecom1 from "../../../../assets/grids-image1.png";
import Ecom2 from "../../../../assets/grids-image2.png";
import Ecom3 from "../../../../assets/grids-image3.png";
import Ecom4 from "../../../../assets/grids-image4.png";
import Ecom5 from "../../../../assets/grids-image5.png";

const features = [
  {
    icon: <FaHeadset className="feature-icon" />,
    title: "Corporate Learning Solutions",
    description:
      "Convert corporate learning with our unique and innovative EduTech solutions. Enhance your employee skills and drive organizational growth with tailored training programs and achieve all round success. ",
  },
  {
    icon: <FaChartLine className="feature-icon" />,
    title: "Education-to-Career (E2C) Solutions",
    description:
      "Transform the E2C (Education-To-Career) pathways of learners by developing a large-scale e-learning and education software development solutions, precisely tailored to our clients’ needs. ",
  },
  {
    icon: <FaShippingFast className="feature-icon" />,
    title: "Campus Solutions ",
    description:
      "We help empower educators, trainers, and students to transform school, college or university learning and administrative operations to a dynamic environment with our smart education solution.",
  },
  {
    icon: <FaShoppingCart className="feature-icon" />,
    title: "Professional Upskilling Programs ",
    description:
      "We equip students, job seekers, and working professionals with skill-bases professional e-learning training solutions designed to enhance career growth and unlock their full potential.",
  },
  {
    icon: <FaShoppingCart className="feature-icon" />,
    title: "Streamlined Checkouts",
    description:
      "Our platform provides a systematic order management process and an effective workflow, guaranteeing your business's smooth and efficient functioning.",
  },
];

const gridcontent = [
  {
    imgSrc: Ecom1,
    title: "Why Choose Us",
    description:
      "We don’t just claim to transform your EdTech business with cutting-edge technologies and custom solutions—we make it happen! Experience a new dimension of education and e-learning with our expertise, delivering engaging, personalized learning experiences through scalable education solutions",
  },
];

const Education = () => {
  return (
    <div className="ecommerce-section">
      <h2 className="fw-bold">
        Reimagine Education For The Future Of Learning
      </h2>
      <p className="text-muted">
        As your trusted partner in e-learning transformation, we deliver robust,
        user-centric, and interactive educational solutions. Whether you aim to
        enhance student engagement or empower trainers with anytime, anywhere
        access to learning content, our custom e-learning app development
        solutions can make it happen!
      </p>
      <img src={Educations} alt="E-Commerce" className="content-image" />

      <h2 className="fw-bold text-left Revitalize">
        Unlock Power of Digital Education and Redefine Learning!
      </h2>
      <p className="text-left text-muted">
        Meet your unique e-learning needs with our innovative, user-friendly
        educational solutions tailored to your industry. Get responsive,
        intuitive, and engaging e-learning apps from a leading software
        development company like Ahaan Software Consulting to transform the
        learning experience! Our solutions include the followings –
      </p>

      {/* <Row className="mt-4">
        {features.slice(3).map((feature, index) => (
          <Col md={6} key={index}>
            <Card className="feature-card">
              <Card.Body>
                {feature.icon}
                <h5 className="fw-bold mt-3">{feature.title}</h5>
                <p className="text-muted">{feature.description}</p>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row> */}

      <Row className="mt-3">
        {features.slice(0, 4).map((feature, index) => (
          <Col md={6} key={index}>
            <Card className="feature-card horizontal">
              <Card.Body>
                {feature.icon}
                <h5 className="fw-bold mt-3">{feature.title}</h5>
                <p className="text-muted">{feature.description}</p>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <br />

      {gridcontent.map((feature, index) => (
        <Row className="mb-4" key={index}>
          <Col md={6} className={index % 2 === 1 ? "order-md-2" : ""}>
            <img
              src={feature.imgSrc}
              alt={feature.title}
              className="img-fluid"
            />
          </Col>
          <Col md={6} className={index % 2 === 1 ? "order-md-1" : ""}>
            <h2 className="grids-heading">{feature.title}</h2>
            <p className="grids-content">{feature.description}</p>
          </Col>
        </Row>
      ))}
    </div>
  );
};

export default Education;

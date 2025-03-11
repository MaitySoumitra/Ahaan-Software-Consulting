import React from "react";
import ConstructionImage from "../../../../assets/images/banner2/Construction.png"
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaHeadset, FaChartLine, FaShippingFast, FaShoppingCart } from "react-icons/fa";
import "./TabContent.css";
import Ecom1 from "../../../../assets/grids-image1.png";
import Ecom2 from "../../../../assets/grids-image2.png";
import Ecom3 from "../../../../assets/grids-image3.png";
import Ecom4 from "../../../../assets/grids-image4.png";
import Ecom5 from "../../../../assets/grids-image5.png";

const features = [
    {
      icon: <FaHeadset className="feature-icon" />,
      title: "Customer Support",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
    },
    {
      icon: <FaChartLine className="feature-icon" />,
      title: "Scalable Excellence",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
    },
    {
      icon: <FaShippingFast className="feature-icon" />,
      title: "Easy Tracking",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
    },
    {
      icon: <FaShoppingCart className="feature-icon" />,
      title: "Streamlined Checkouts",
      description: "Our platform provides a systematic order management process and an effective workflow, guaranteeing your business's smooth and efficient functioning.",
    },
    {
        icon: <FaShoppingCart className="feature-icon" />,
        title: "Streamlined Checkouts",
        description: "Our platform provides a systematic order management process and an effective workflow, guaranteeing your business's smooth and efficient functioning.",
      },
  ];

  const gridcontent = [
    {
      imgSrc: Ecom1,
      title: 'Project Management Solutions',
      description: 'Enhance efficiency with advanced project management software, ensuring seamless scheduling, planning, and real-time collaboration for improved productivity and on-time delivery.'
    },
    {
      imgSrc: Ecom2,
      title: 'Construction Site Automation',
      description: 'Leverage automation and IoT-driven solutions to streamline site operations, monitor equipment, and enhance workforce productivity with real-time insights and predictive maintenance.'
    },
    {
      imgSrc: Ecom3,
      title: 'Building Information Modelling (BIM) Solutions',
      description: 'Optimize design, planning, and execution with cutting-edge BIM solutions, allowing for cost estimation, better visualization, and coordination across construction teams.'
    },
    {
      imgSrc: Ecom4,
      title: 'Safety & Compliance Management',
      description: 'Ensure workplace safety and regulatory compliance with AI-powered risk assessment tools, real-time safety monitoring, and automated reporting systems to minimize hazards.'
    },
    // {
    //   imgSrc: Ecom5,
    //   title: 'Efficient Administration',
    //   description: 'Ensure an easy and smart integration with your current systems to achieve an efficient and error-free process.'
    // }
  ];

const Construction = () => {
  return (
    <div className="ecommerce-section">
      <h2 className="fw-bold">Streamline Construction Operations With Smart Digital Solutions!</h2>
      <p className="text-muted">
      Achieve new level of agility with our tech-powered solutions, precisely tailored to the construction industry. Whether you're streamlining project management, optimizing resource allocation, or enhancing site safety, our custom solutions help you build smarter, faster, and safer! 
      </p>
      <img src={ConstructionImage} alt="E-Commerce" className="content-image" />

      <h2 className="fw-bold text-left Revitalize mt-3">
      Embrace The Tech-Powered Future Of Construction
      </h2>
      <p className="text-left text-muted">
      Scaling tech transformation for construction companies is no longer optional – it’s necessary! At Ahaan Software Consulting, we go beyond just providing construction technology solutions—we empower contractors, engineers and developers with advanced digital tools to optimize workflows, reduce costs, and drive project success.
      </p>

      {/* <Row className="mt-4">
        {features.slice(0, 3).map((feature, index) => (
          <Col md={4} key={index}>
            <Card className="feature-card">
              <Card.Body>
                {feature.icon}
                <h5 className="fw-bold mt-3">{feature.title}</h5>
                <p className="text-muted">{feature.description}</p>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Row className="mt-3">
        {features.slice(3).map((feature, index) => (
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
      </Row> */}

      <h2 className="fw-bold text-left Revitalize">
      Unlock Big Uplifts In Construction With Our Solutions 
      </h2>
      {gridcontent.map((feature, index) => (
        <Row className="mb-4" key={index}>
          <Col md={6} className={index % 2 === 1 ? 'order-md-2' : ''}>
            <img src={feature.imgSrc} alt={feature.title} className="img-fluid" />
          </Col>
          <Col md={6} className={index % 2 === 1 ? 'order-md-1' : ''}>
            <h2 className="grids-heading">{feature.title}</h2>
            <p className="grids-content">{feature.description}</p>
            {/* <p className="grids-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p> */}
          </Col>
        </Row>
      ))}
    </div>
  );
};

export default Construction;

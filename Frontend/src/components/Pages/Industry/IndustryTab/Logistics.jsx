import React from "react";
import Constructions from "../../../../assets/images/banner2/banner2.png";
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
      title: 'Supply Chain Management Solutions',
      description: 'Enhance efficiency, visibility, and coordination across your supply chain with real-time tracking, demand forecasting, and AI-powered analytics.'
    },
    {
      imgSrc: Ecom2,
      title: 'Fleet & Transportation Management',
      description: 'Optimize route planning, reduce fuel costs, and boost fleet performance with GPS tracking, automated dispatching, predictive maintenance solutions, and more! '
    },
    {
      imgSrc: Ecom3,
      title: 'Warehouse & Inventory Management',
      description: 'Improve inventory accuracy, reduce storage costs, and streamline warehouse operations with IoT-enabled tracking, automated stock management, and cloud-based solutions.'
    },
    {
      imgSrc: Ecom4,
      title: 'Last-Mile Delivery Optimization',
      description: 'Ensure faster, more efficient deliveries with AI-driven route optimization, real-time tracking, and automated proof-of-delivery solutions.'
    },
    // {
    //   imgSrc: Ecom5,
    //   title: 'Efficient Administration',
    //   description: 'Ensure an easy and smart integration with your current systems to achieve an efficient and error-free process.'
    // }
  ];

const Logistics = () => {
  return (
    <div className="ecommerce-section">
      <h2 className="fw-bold">On The Road To Transformation With Future-Ready Logistics </h2>
      <p className="text-muted">
      By harnessing the power of logistics, transportation, and digital innovation, industry leaders are gaining real-time visibility into their supply chains, accessing critical data instantly, and accelerating order fulfillment worldwide. We help you leap ahead by leveraging the latest technologies like machine learning, IoT, blockchain, and predictive analytics for smarter, more efficient logistics operations.
      </p>
      <img src={Constructions} alt="E-Commerce" className="content-image" />

      <h2 className="fw-bold text-left Revitalize">
      Leap Ahead In The Modern Logistics Ecosystem 
      </h2>
      <p className="text-left text-muted">
      Driven by quality and results, we modernize even the most complex logistical systems with advanced, data-driven solutions! Our targeted digital transportation technology solutions empower providers for unparalleled growth and limitless success.
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
      Compete Against Industry Giants With Our Solutions 
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

export default Logistics;

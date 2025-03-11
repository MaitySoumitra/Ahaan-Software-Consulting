import React from "react";
import EcommerceImage from "../../../../assets/images/banner/banner1.jpg";
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
      title: 'Industrial Manufacturing Solutions ',
      description: 'To stay infallible against digital disruption, shifting customer demands, and evolving markets, manufacturing leaders must embrace smarter, more connected products and transition from selling physical goods to service-driven models. Ahaan Software Consulting empowers you to leverage cutting-edge technologies like machine learning, analytics, IoT, and blockchain for a future-ready manufacturing ecosystem.'
    },
    {
      imgSrc: Ecom2,
      title: 'Process Manufacturing Solutions ',
      description: 'At Ahaan Software Consulting, we help process manufacturers transition from isolated automation systems to fully connected, intelligent operations. Our solutions streamline production, reduce costs, optimize plant efficiency, and minimize environmental impact for a smarter, more sustainable future.'
    },
    // {
    //   imgSrc: Ecom3,
    //   title: 'Quick Tracking',
    //   description: 'Ensure an easy and smart integration with your current systems to achieve an efficient and error-free process.'
    // },
    // {
    //   imgSrc: Ecom4,
    //   title: 'Adaptable Scalability',
    //   description: 'Ensure an easy and smart integration with your current systems to achieve an efficient and error-free process.'
    // },
    // {
    //   imgSrc: Ecom5,
    //   title: 'Efficient Administration',
    //   description: 'Ensure an easy and smart integration with your current systems to achieve an efficient and error-free process.'
    // }
  ];

const Manufacturing = () => {
  return (
    <div className="ecommerce-section">
      <h2 className="fw-bold">Make The Digital Transition To Manufacturing</h2>
      <p className="text-muted">
      Automation, analytics, AI, integrated systems, and smart factories—our advanced digital manufacturing solutions empower modern manufacturers to make data-driven decisions in real time. Partner with us to build a more human-centric, sustainable, and resilient manufacturing enterprise!
      </p>
      <img src={EcommerceImage} alt="E-Commerce" className="content-image" />

      <h2 className="fw-bold text-left Revitalize mt-3">
      Creating A Transformative, Sustainable Ecosystem
      </h2>
      <p className="text-left text-muted">
      Ahaan Software Consulting partners with global manufacturers to adapt and thrive with future-forward solutions. Harnessing robust technologies like quantum computing, GenAI, etc., we strive to foster sustainable resilience, growth, and innovation, shaping a purpose-led manufacturing ecosystem. 
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
      </Row> */}

      {/* <Row className="mt-3">
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
      Your Challenges, Our Solutions!
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

export default Manufacturing;

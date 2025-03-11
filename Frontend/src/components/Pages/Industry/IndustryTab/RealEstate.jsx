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
      title: 'Integrated Property Management Systems',
      description: 'Streamline operations with our comprehensive solutions, including property management, CRM, marketing automation, asset/portfolio management, and more! '
    },
    {
      imgSrc: Ecom2,
      title: 'Analytics & Reporting',
      description: 'We leverage advanced dashboards for performance tracking, market analysis, lease metrics, and financial insights, empowering data-driven decision-making.'
    },
    {
      imgSrc: Ecom3,
      title: 'Security & Compliance',
      description: 'We provide robust security measures, data encryption, and compliance support with industry standards like GDPR and the Fair Housing Act, ensuring tenant privacy and regulatory adherence.'
    },
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

const RealEstate = () => {
  return (
    <div className="ecommerce-section">
      <h2 className="fw-bold">Transform Real Estate With Cutting-Edge Digital Solutions</h2>
      <p className="text-muted">
      The real estate and property management industry revolves around property transactions, asset management, and driving rental business growth worldwide. Ahaan Software Consulting specializes in crafting bespoke tech, IT, and custom software solutions designed to empower property managers, real estate agencies, and developers.
      </p>
      <img src={Constructions} alt="E-Commerce" className="content-image" />

      <h2 className="fw-bold text-left Revitalize mt-3">
      Innovate. Elevate. Collaborate. Bring Your Real Estate Vision To Life!
      </h2>
      <p className="text-left text-muted">
      Partner with us to enhance real estate operations with real-time monitoring, predictive maintenance, and smart building solutions. Leveraging IoT, mobile apps, and digital innovations, we forge customer satisfaction with elevated efficiency and excellence. Strengthen security with robust cybersecurity, access control, and cloud solutions to protect data, assets, and tenant privacy.
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
      Some Of The Key Features Of Our Offerings!
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

export default RealEstate;

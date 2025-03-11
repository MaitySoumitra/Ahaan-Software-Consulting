import React from "react";
import EcommerceImage from "../../../../assets/images/banner2/Ecomm.png";
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
    title: "Boost Your Growth ",
    description:
      "Boost your retail store's digital presence and meet evolving market demands with our innovative, user-centric e-commerce development services—designed to scale your business.",
  },
  {
    icon: <FaChartLine className="feature-icon" />,
    title: "Gain More Online Visibility ",
    description:
      "We create lucrative, visually compelling e-storefronts that enhance your retail store’s digital presence, attract millennial shoppers, and redefine their shopping experience.",
  },
  {
    icon: <FaShippingFast className="feature-icon" />,
    title: "Streamline Complex Inventory Operations",
    description:
      "Get a customized e-store and inventory solution to monitor, manage, and procure items in real-time. Stay ahead by streamlining retail processes and boosting efficiency.",
  },
  {
    icon: <FaShoppingCart className="feature-icon" />,
    title: "Flexible Payment Options ",
    description:
      "Empower your customers with flexible payment options through seamless payment gateway integration, boosting sales closure rates with our e-commerce app and software development services.",
  },
  {
    icon: <FaShoppingCart className="feature-icon" />,
    title: "Redefine Buying Experience ",
    description:
      "Leverage AI-powered product search to display personalized buying options based on user activity, improving their overall shopping experience with custom-tailored recommendations.",
  },
  {
    icon: <FaShoppingCart className="feature-icon" />,
    title: "Data Privacy Ensured  ",
    description:
      "Protect customer data from threats while showcasing security certificates on payment pages to boost trust, all with a highly secure e-commerce software featuring multi-factor authentication.",
  },
];

const gridcontent = [
  {
    imgSrc: Ecom1,
    title: "B2B E-commerce App Development",
    description:
      "Enable business vendors to connect with wholesalers and retail factories to place demand orders, raise purchase receipts, or sell their goods with our B2B e-commerce app development solutions.",
  },
  {
    imgSrc: Ecom2,
    title: "Retail ERP Software Development",
    description:
      "Streamline your daily retail operations on the go with our Retail ERP Software Development solutions. Seamlessly connect inventory management, sales inquiries, stock and supply chain management, payments, and service delivery to drive business growth.",
  },
  {
    imgSrc: Ecom3,
    title: "Inventory Management Software Development",
    description:
      "Optimize your complex inventory operations with our Inventory Management Software Development. Gain real-time visibility into stock levels, shipment routes, schedules, and refill requirements to be ahead of evolving inventory demands.",
  },
 
];

const Ecommerce = () => {
  return (
    <div className="ecommerce-section">
      <h2 className="fw-bold">
        Scale Up Your E-Business With Our Custom E-commerce Solutions{" "}
      </h2>
      <p className="text-muted">
        As the experience economy evolves, we envision a future where online
        shopping transcends mere transactions—transforming into interactive,
        immersive experiences that captivate, engage, and inspire. In this
        next-generation E-store, each visit is more than just a purchase; it’s a
        personalized experience that redefines digital retail.
      </p>
      <img src={EcommerceImage} alt="E-Commerce" className="content-image" />

      <h2 className="fw-bold text-left Revitalize">
        Conquer Retail Challenges With Custom E-Commerce
      </h2>
      <p className="text-left text-muted">
        We develop user-friendly, fully secure e-commerce solutions, from
        single-vendor storefronts to multi-vendor marketplaces. As India’s
        leading software development and consultancy company, we deliver
        tailored solutions powered by the latest technologies. Our custom
        e-commerce software champions common industry challenges with scalable,
        adaptable solutions designed for growth.
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

      <Row className="mt-3">
        {features.slice(0, 6).map((feature, index) => (
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

      <h2 className="fw-bold text-left Revitalize">
      Our E-commerce Solutions In A Nutshell! 
      </h2>
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

export default Ecommerce;

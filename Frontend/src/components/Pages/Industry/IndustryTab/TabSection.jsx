import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./TabSection.css";
import Ecommerce from "./Ecommerce";
import Education from "./Education";
import Travel from "./Travel";
import Social from "./Social";
import Healthcare from "./Healthcare";
import RealEstate from "./RealEstate";
import Construction from "./Construction";
import Logistics from "./Logistics";
import Manufacturing from "./Manufacturing";
import Media from "./Media";

const TabSection = () => {
  const [activeTab, setActiveTab] = useState("Tax Management");

  const tabs = [
    "E-Commerce",
    "Education",
    "Travel & Hospitality",
    "Social Networking",
    "Healthcare",
    "Real Estate",
    "Construction",
    "Logistics",
    "Manufacturing",
    "Media & Entertainment",
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "E-Commerce":
        return <Ecommerce />;
      case "Education":
        return <Education />;
      case "Travel & Hospitality":
        return <Travel />;
      case "Social Networking":
        return <Social />;
      case "Healthcare":
        return <Healthcare />;
      case "Real Estate":
        return <RealEstate />;
      case "Construction":
        return <Construction />;
      case "Logistics":
        return <Logistics />;
      case "Manufacturing":
        return <Manufacturing />;
      case "Media & Entertainment":
            return <Media />;  
      default:
        return <Ecommerce />;
    }
  };

  return (
    <Container className="my-5">
      <Row>
        <Col md={3}>
          <div className="tabs-list">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`tab-btn ${activeTab === tab ? "active" : ""}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab} {activeTab === tab && <span>→</span>}
              </button>
            ))}
          </div>
        </Col>
        <Col md={9}>
          <div className="tab-content">{renderContent()}</div>
        </Col>
      </Row>
    </Container>
  );
};

export default TabSection;

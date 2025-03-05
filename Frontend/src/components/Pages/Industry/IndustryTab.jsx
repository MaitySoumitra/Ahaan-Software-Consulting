import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import ECommerce from "./ECommerce.jsx";
import Education from "./Education.jsx";
import Travel from "./Travel.jsx";
import Social from "./Social.jsx";
import Health from "./Health.jsx";
import Estate from "./Estate.jsx";
import Const from "./Const.jsx";
import Logic from "./Logic.jsx";
import Manufac from "./Manufac.jsx";
import Media from "./Media.jsx";
import "./IndustryTab.css";

const Sidebar = ({ setActiveTab }) => {
  const [selectedTab, setSelectedTab] = useState("E-Commerce");
  const { register, handleSubmit, formState: { errors } } = useForm();

  const tabs = [
    { name: "E-Commerce", component: <ECommerce /> },
    { name: "Education", component: <Education /> },
    { name: "Travel & Hospitality", component: <Travel /> },
    { name: "Social Networking", component: <Social /> },
    { name: "Healthcare", component: <Health /> },
    { name: "Real Estate", component: <Estate /> },
    { name: "Construction", component: <Const /> },
    { name: "Logistics", component: <Logic /> },
    { name: "Manufacturing", component: <Manufac /> },
    { name: "Media & Entertainment", component: <Media /> },
  ];

  const handleTabClick = (tab) => {
    setSelectedTab(tab.name);
    setActiveTab(tab.component);
  };

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <div className="mt-5 sidebar">
      <ul className="list-group mb-4">
        {tabs.map((tab) => (
          <li
            key={tab.name}
            className={`list-group-item cursor-pointer ${
              selectedTab === tab.name ? "active-tab" : ""
            }`}
            onClick={() => handleTabClick(tab)}
          >
            {tab.name}
          </li>
        ))}
      </ul>

      <Form className="form" onSubmit={handleSubmit(onSubmit)}>
        <h5 className="mb-4">Quick Contact</h5>
        <Form.Group className="mb-2">
          <Form.Control type="text" placeholder="Name:" {...register("name", { required: "Name is required" })} />
          {errors.name && <small className="text-danger">{errors.name.message}</small>}
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Control type="email" placeholder="Email:" {...register("email", { required: "Email is required" })} />
          {errors.email && <small className="text-danger">{errors.email.message}</small>}
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Control type="tel" placeholder="Phone:" {...register("phone", { required: "Phone number is required" })} />
          {errors.phone && <small className="text-danger">{errors.phone.message}</small>}
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Control type="text" placeholder="Service name:" {...register("service", { required: "Service name is required" })} />
          {errors.service && <small className="text-danger">{errors.service.message}</small>}
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Control as="textarea" placeholder="Message:" {...register("message", { required: "Message is required" })} />
          {errors.message && <small className="text-danger">{errors.message.message}</small>}
        </Form.Group>
        <Button className="w-100 color mt-2" type="submit">
                        Send Message
                      </Button>
      </Form>
    </div>
  );
};

const IndustryTab = () => {
  const [activeTab, setActiveTab] = useState(<ECommerce />);

  return (
    <Container fluid>
      <Row className="px-5">
        <Col md={2} className="d-none d-md-block">
          <Sidebar setActiveTab={setActiveTab} />
        </Col>
        <Col md={10} className="p-4">{activeTab}</Col>
      </Row>
    </Container>
  );
};

export default IndustryTab;

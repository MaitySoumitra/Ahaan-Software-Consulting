import React from "react";
import { Card, Row, Col, Container } from "react-bootstrap";
import CountUp from "react-countup";
import { FaUsers, FaUserTie, FaCheckCircle, FaSmile } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "./TotalProject.css"
import { FaAward } from "react-icons/fa6";
const stats = [
  { value: 5, label: "International Awards", icon: <FaAward />, color: "#1e3a8a" }, // Blue
  { value: 30, label: "Our Teams", icon: <FaUsers />, color: "#f59e0b" }, // Orange
  { value: 100 , label: "Completed Projects", icon: <FaCheckCircle />, color: "#10b981" }, // Green
  { value: 125, label: "Happy Clients", icon: <FaSmile />, color: "#ef4444" }, // Red
];

const CounterCard = ({ value, label, icon, color }) => {
  return (
    <Card
      className=" p-3 text-center total-project-card"
      style={{
        width: "250px",
        height: "100px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "12px",
        
      }}
    >
      <h4 style={{ color }}>
        <CountUp start={0} end={value} duration={5} separator="," />
        <span style={{ marginLeft: "8px", fontSize: "1.5rem" }}>{icon}</span>
      </h4>
      <strong className="text-dark">{label}</strong>
    </Card>
  );
};

const DashboardStats = () => {
  return (
    <Container className="total-project">
      <Row className="g-2 justify-content-center" xs={2} md={4}>
        {stats.map((stat, index) => (
          <Col key={index} className="d-flex justify-content-center ">
            <CounterCard {...stat} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default DashboardStats;

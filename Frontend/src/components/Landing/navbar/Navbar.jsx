import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  Button,
  NavbarToggler,
  Collapse,
} from "reactstrap";
import indialogo from "../../../assets/indialogo.gif";
import usalogo from "../../../assets/usalogo.gif";
import "./Navbar.css";
import PopUp from "../popUp/PopUp";

const ResponsiveNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const toggleNavbar = () => setIsOpen(!isOpen);
  const toggleForm = () => setShowForm(!showForm);

  return (
    <>
      <Navbar light expand="md" className="custom-navbar shadow-sm px-3">
        <div className="container d-flex align-items-center justify-content-between">
          {/* Logo */}
          <NavbarBrand href="https://ahaansoftware.com/" className="fw-bold">
            <img
              src="https://ahaansoftware.com/images/ahaan.png"
              alt="Logo"
              className="me-2"
              style={{ height: "40px" }}
            />
          </NavbarBrand>

          {/* Toggler for Mobile */}
          <NavbarToggler onClick={toggleNavbar} className="me-2" />

          {/* Collapsible Menu */}
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ms-auto align-items-center nav-responsive">
              {/* India Contact */}
              <NavItem className="d-flex align-items-center me-4">
                <img
                  src={indialogo}
                  alt="India Flag"
                  className="flag-icon me-2"
                />
                <span className="text-muted fw-bold">+91 898 174 4661</span>
              </NavItem>

              {/* USA Contact */}
              <NavItem className="d-flex align-items-center me-4">
                <img src={usalogo} alt="USA Flag" className="flag-icon me-2" />
                <span className="text-muted fw-bold">+1 321 421 0740</span>
              </NavItem>

              {/* Enquiry Button */}
              <NavItem>
                <Button className="custom-button" onClick={toggleForm}>
                  Enquiry Now
                </Button>
              </NavItem>
            </Nav>
          </Collapse>
        </div>
      </Navbar>

      {showForm && <PopUp onClose={toggleForm} />}
    </>
  );
};

export default ResponsiveNavbar;

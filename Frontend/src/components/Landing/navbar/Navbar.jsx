import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  Button,
  Container,
} from "reactstrap";
import { BiChat } from "react-icons/bi"; // <-- import React icon here
import "./Navbar.css";
import PopUp from "../popUp/PopUp";

const ResponsiveNavbar = () => {
  const [showForm, setShowForm] = useState(false);
  const toggleForm = () => setShowForm(!showForm);

  return (
    <>
      <Navbar light className="custom-navbar shadow-sm">
        <Container className="d-flex align-items-center justify-content-between">
          {/* Logo */}
          <NavbarBrand
            href="https://ahaansoftware.com/"
            className="fw-bold d-flex align-items-center"
          >
            <img
              src="https://ahaanmedia.com/asc/layouts/asc.png"
              alt="Logo"
              className="me-2"
              style={{ height: "50px" }}
            />
          </NavbarBrand>

          {/* Contact and Button Section - Always visible */}
          <Nav
            className="ms-auto align-items-start align-items-md-center nav-responsive"
            navbar
          >
            {/* India Contact */}
            <NavItem className="me-md-4 mb-3 mb-md-0">
              <a
                href="tel:+918981744661"
                className="d-flex align-items-center text-decoration-none"
              >
                <img
                  src="https://ahaanmedia.com/asc/layouts/indialogo.gif"
                  alt="India Flag"
                  className="flag-icon me-2"
                />
                <span className="text-muted fw-bold flag-content">
                  +91 898 174 4661
                </span>
              </a>
            </NavItem>

            {/* USA Contact */}
            <NavItem className="me-md-4 mb-3 mb-md-0">
              <a
                href="tel:+13214210740"
                className="d-flex align-items-center text-decoration-none"
              >
                <img
                  src="https://ahaanmedia.com/asc/layouts/usalogo.gif"
                  alt="USA Flag"
                  className="flag-icon me-2"
                />
                <span className="text-muted fw-bold flag-content">
                  +1 321 421 0740
                </span>
              </a>
            </NavItem>

            {/* Enquiry Button */}
            <NavItem>
              <Button
                className="custom-button w-100 w-md-auto enquiry-button"
                onClick={toggleForm}
              >
                {/* React Icon: visible only on mobile */}
                <BiChat className="enquiry-icon" />

                {/* Text: visible on tablet & desktop */}
                <span className="enquiry-text">Enquiry Now</span>
              </Button>
            </NavItem>
          </Nav>
        </Container>
      </Navbar>

      {showForm && <PopUp onClose={toggleForm} />}
    </>
  );
};

export default ResponsiveNavbar;

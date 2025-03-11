import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaAngleDown } from "react-icons/fa";
import {
  FaLocationDot,
  FaPhone,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaLinkedinIn,
} from "react-icons/fa6";
import "./Footer.css";

const Footer = () => {
  const [isQuickLinksOpen, setIsQuickLinksOpen] = useState(false);
  const [isContactUsOpen, setIsContactUsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
      const handaleResize = () => {
        setIsMobile(window.innerWidth <= 700);
        
      };
      handaleResize();
  
      window.addEventListener("resize", handaleResize);
      return () => window.removeEventListener("resize", handaleResize);
    }, []);

  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4 ">
          <div className="footer-logo-input">
            <img
              src="http://woocommerce.ahaanmedia.com/wp-content/uploads/2025/02/Ahaan-Software-New-Logo-1-6-1.png"
              alt="Ahaan Logo"
              className="footer-logo"
            />
            <p className="newsletter-text">
              Subscribe to our newsletter to find out about all our latest
              offers.
            </p>
            </div>
            <div className="newsletter">
              <input
                type="email"
                placeholder="Email Address"
                className="form-control"
              />
              <button className="btn btn-primary">Submit</button>
            </div>
          </div>
          <div className="col-md-4 quicklink-responsive">
        <button
          className="accordion-button-quick-link d-md-none"
          onClick={() => setIsQuickLinksOpen(!isQuickLinksOpen)} 
          aria-expanded={isQuickLinksOpen ? "true" : "false"}
          style={{
            display: "flex",
            justifyContent: "flex-start", 
            alignItems: "center",
            width: "100%", 
            padding: "10px",
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
        >
          <h5 className="footer-heading" style={{ margin: 0,  }}>
            QUICK LINKS
          </h5>
          <FaAngleDown
            className={`accordion-icon ${isQuickLinksOpen ? "open" : ""}`}
            style={{ marginLeft: "auto" }} 
          />
        </button>
        <ul className={`footer-links ${isQuickLinksOpen ? "open" : ""} d-md-block`}>
        <li className="quick-link-for-desktop">
                <h5 className="footer-heading">QUICK LINKS</h5>
              </li>
          <li>
            <a href="../../../assets/privacy/Privacy Policy.docx" download>
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="../../../assets/privacy/Shipping Policy.docx" download>
              Shipping Policy
            </a>
          </li>
          <li>
            <a href="../../../assets/privacy/Terms and Conditions.docx" download>
              Terms & Conditions
            </a>
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <button
          className="accordion-button d-md-none"
          onClick={() => setIsContactUsOpen(!isContactUsOpen)} 
          aria-expanded={isContactUsOpen ? "true" : "false"}
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            width: "100%", 
            padding: "10px",
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
        >
          
          <h5 className="footer-heading" style={{ margin: 0, flex: 1 }}>
            CONTACT US
          </h5>
          
          <FaAngleDown
            className={`accordion-icon ${isContactUsOpen ? "open" : ""}`}
            style={{ marginLeft: "auto" }} // Ensures the icon is aligned to the right
          />
        </button>

        
        <div className={`accordion-content ${isContactUsOpen ? "open" : ""} d-md-block`}>
        <h5 className="contact-us-heading-for-desktop footer-heading">CONTACT US</h5>

          <p className="contact-info">
            <FaLocationDot className="icon" /> Bengal Eco Intelligent Park, EM Block, Sector V, Kolkata-91
          </p>
          <p className="contact-info ">
            <FaPhone className="icon" />
            <a href="tel:+13214210740">+13214210740</a> /
            <a href="tel:+919830371143">+919830371143</a>
          </p>
          <p className="contact-info">
            <FaEnvelope className="icon" />
            <a href="mailto:sales@ahaansoftware.com">sales@ahaansoftware.com</a>
          </p>
        </div>
      </div>
        </div>
        <div className="footer-bottom">
          <p>{ isMobile ? "© 2025 Ahaan Software Consulting" : "© 2025 Ahaan Software, All rights reserved." }</p>
          <div className="footer-social-icons">
            <a href="https://www.facebook.com/ahaansoftwareconsulting">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/ahaansoftware/">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/company/ahaansoftware">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

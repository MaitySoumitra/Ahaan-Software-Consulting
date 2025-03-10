import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  FaPhone,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaLinkedinIn,
} from "react-icons/fa6";
import "./TopHeader.css";

const TopHeader = () => {
  return (
    <header className="top-header">
      <div className="container">
      <div className="d-flex justify-content-between align-items-center">
  
  <div className="d-flex align-items-center">
    <span className="phone-number">
      <FaPhone className="icon-spacing" />
      <a href="tel:+13214210740">+13214210740</a>
      <span> / </span>
      <a href="tel:+919830371143">+919830371143</a>
    </span>
    <span className="email">
      <FaEnvelope className="icon-spacing" />
      <a href="mailto:sales@ahaansoftware.com">sales@ahaansoftware.com</a>
    </span>
  </div>

  {/* Social icons section */}
  <div className="d-flex align-items-center">
    <a href="https://www.facebook.com/ahaansoftwareconsulting" className="social-icon">
      <FaFacebookF />
    </a>
    <a href="https://www.instagram.com/ahaansoftware/" className="social-icon">
      <FaInstagram />
    </a>
    <a href="https://www.linkedin.com/company/ahaansoftware" className="social-icon">
      <FaLinkedinIn />
    </a>
  </div>
</div>

      </div>
    </header>
  );
};

export default TopHeader;

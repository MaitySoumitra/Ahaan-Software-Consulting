import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaLocationDot, FaPhone, FaEnvelope, FaFacebookF, FaInstagram, FaXTwitter, FaLinkedinIn } from 'react-icons/fa6';
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          
          <div className="col-md-4">
            <img src="http://woocommerce.ahaanmedia.com/wp-content/uploads/2025/02/Ahaan-Software-New-Logo-1-6-1.png" alt="Ahaan Logo" className="footer-logo" />
            <p className="newsletter-text">
              Subscribe to our newsletter to find out about all our latest offers.
            </p>
            
            <div className="newsletter">
              <input type="email" placeholder="Email Address" className="form-control" />
              <button className="btn btn-primary">Submit</button>
            </div>
          </div>
          <div className="col-md-4 d-flex flex-column align-items-center ">
            
            <ul className="footer-links">
              <li><h5 className="footer-heading">QUICK LINKS</h5></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Shipping Policy</a></li>
              <li><a href="#">Terms & Conditions</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5 className="footer-heading">CONTACT US</h5>
            <p className="contact-info">
              <FaLocationDot className="icon" /> Bengal Eco Intelligent Park, EM Block,
              Sector V, Kolkata-91
            </p>
            <p className="contact-info">
              <FaPhone className="icon" /> +1 321 421 0740
            </p>
            <p className="contact-info">
              <FaEnvelope className="icon" /> hello@ahaansoftware.com
            </p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 Ahaan Software, All rights reserved.</p>
          <div className="footer-social-icons">
            <a href="https://www.facebook.com/ahaansoftwareconsulting"><FaFacebookF /></a>
            <a href="https://www.instagram.com/ahaansoftware/"><FaInstagram /></a>
            <a href="https://www.linkedin.com/company/ahaansoftware"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

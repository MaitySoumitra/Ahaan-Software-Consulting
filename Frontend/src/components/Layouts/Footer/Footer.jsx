import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaLocationDot, FaPhone, FaEnvelope, FaFacebookF, FaInstagram, FaXTwitter, FaLinkedinIn } from 'react-icons/fa6';
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          {/* Logo & Newsletter */}
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

          {/* Quick Links */}
          <div className="col-md-2">
            <h5 className="footer-heading">QUICK LINKS</h5>
            <ul className="footer-links">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Industry</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>

          {/* Our Services */}
          <div className="col-md-3">
            <h5 className="footer-heading">OUR SERVICES</h5>
            <ul className="footer-links">
              <li><a href="#">UI/UX Design</a></li>
              <li><a href="#">App Development</a></li>
              <li><a href="#">Web Development</a></li>
              <li><a href="#">Digital Marketing</a></li>
              <li><a href="#">Branding Design</a></li>
              <li><a href="#">Graphic Design</a></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="col-md-3">
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

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>© 2024 Ahaan Software, All rights reserved.</p>
          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaXTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

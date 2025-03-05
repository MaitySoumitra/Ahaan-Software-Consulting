import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaPhone, FaEnvelope, FaFacebookF, FaInstagram, FaXTwitter, FaLinkedinIn } from 'react-icons/fa6';
import './TopHeader.css'; 

const TopHeader = () => {
  return (
    <header className="top-header">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 d-flex align-items-center">
            <span className="phone-number">
              <FaPhone className="icon-spacing" /> +13214210740
            </span>
            <span className="email">
              <FaEnvelope className="icon-spacing" /> hello@ahaansoftware.com
            </span>
          </div>
          <div className="col-md-6 d-flex justify-content-end align-items-center">
            <span className="follow-us">Follow Us</span>
            <a href="#" className="social-icon"><FaFacebookF /></a>
            <a href="#" className="social-icon"><FaInstagram /></a>
            <a href="#" className="social-icon"><FaXTwitter /></a>
            <a href="#" className="social-icon"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopHeader;

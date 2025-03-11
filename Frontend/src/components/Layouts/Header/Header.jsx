import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-white py-4">
      <div className="container">
        {/* Logo */}
        <a className="navbar-brand d-flex align-items-center" href="/">
          <img
            src="http://woocommerce.ahaanmedia.com/wp-content/uploads/2025/02/Ahaan-Software-New-Logo-1-6-1.png"
            alt="logo"
            className="logo"
          />
        </a>

        {/* Toggle Button for Mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarNav"
        >
          <ul className="navbar-nav d-flex gap-5">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About Us
              </Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link " to="/service">
                Services
              </Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link " to="/industry">
                Industry
              </Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link " to="https://portfolio.ahaansoftware.com/">
                Portfolio
              </Link>
            </li>

            {/* <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="/career">
                Career
              </Link>
            </li> */}
            {/* <li className="nav-item">
              <Link className="nav-link" to="/blog">
                Blog
              </Link>
            </li> */}
          </ul>
        </div>

        {/* Get a Quote Button */}
        <div>
          <a href="/contact" className="btn get-quote-btn">
            Get a Quote
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;

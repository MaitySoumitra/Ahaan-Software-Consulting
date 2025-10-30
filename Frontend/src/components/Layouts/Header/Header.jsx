import React, { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";
import "./Header.css";
import { HiMenuAlt3 } from "react-icons/hi";
import { TbMessage } from "react-icons/tb";
import MobileSidebar from "./MobileSidebar";
import MenuToggle from "./MenuToggle";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 450);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-white py-4">
      <div className="container">
        <a className=" d-flex align-items-center" href="/">
          <img
            src="https://ahaanmedia.com/asc/layouts/asc.png"
            alt="logo"
            className="asc-logo"
          />
        </a>

        <div className="header-left-side d-flex align-items-center">
          <ul className="d-flex desktop-nav-menu">
            <li>
              <NavLink exact="true" to="/" className="nav-link">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="nav-link">
                About us
              </NavLink>
            </li>
            <li>
              <NavLink to="/portfolio" className="nav-link">
                Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink to="/service" className="nav-link">
                Services
              </NavLink>
            </li>
            <li>
              <NavLink to="/industry" className="nav-link">
                Industry
              </NavLink>
            </li>
            <li>
              <NavLink to="/blog" className="nav-link">
                Blogs
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="header-left-part">
          <div className="header-left-side">
            <div className="get-quote-container-1">
              {isMobile ? (
                <a href="/contact" style={{ padding: 0 }}>
                  <TbMessage size={35} className="phone-get-qt" />
                </a>
              ) : (
                <a href="/contact" className="get-quote-btn">
                  Get a Quote
                </a>
              )}
            </div>

            <div className="asc-header">
              <MenuToggle
                toggle={toggleSidebar}
                isOpen={sidebarOpen}
                ref={toggleRef}
              />
              <MobileSidebar
                setSidebarOpen={setSidebarOpen}
                isOpen={sidebarOpen}
                toggleButtonRef={toggleRef}
              />
            </div>
          </div>

          <div className="get-quote-container-2">
            <a href="/contact" className="get-quote-btn">
              Get a Quote
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;

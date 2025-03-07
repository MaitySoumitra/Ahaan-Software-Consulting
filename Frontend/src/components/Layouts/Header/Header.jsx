import React, {useState, useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "./Header.css";
import { HiMenuAlt3 } from "react-icons/hi";
import { TbMessage } from "react-icons/tb";


const Header = () => {
   const [isMobile, setIsMobile] = useState(false);
  const handleQuoteButtonClick = () => {
    // Add your logic for the "Get a Quote" button click here
    console.log("Get a Quote clicked");
  };

  useEffect(() => {
      const handaleResize = () => {
        setIsMobile(window.innerWidth <= 450);
        
      };
      handaleResize();
  
      window.addEventListener("resize", handaleResize);
      return () => window.removeEventListener("resize", handaleResize);
    }, []);

  return (
    <nav className="container py-3">
      <div className=" asc-header">
        <a className="d-flex align-items-center" href="/">
          <img
            src="http://woocommerce.ahaanmedia.com/wp-content/uploads/2025/02/Ahaan-Software-New-Logo-1-6-1.png"
            alt="logo"
            className="asc-logo"
          />
        </a>

        <div className="header-left-side d-flex align-items-center">
          <ul className="d-flex  desktop-nav-menu">
            <li>
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/about">
                About us
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/service">
                Services
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/industry">
                Industry
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/portfolio">
                Portfolio
              </Link>
            </li>
          </ul>
        </div>
        <div className="header-left-side">
          <div className="get-quote-container-1">{isMobile ? <TbMessage size={35} className="phone-get-qt"/> : <a href="/contact" className=" get-quote-btn">
              Get a Quote
            </a>}
            
          </div>
          <button
            className="asc-header-toggle"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <HiMenuAlt3 size={40} color="#43387B" />
          </button>
        </div>
        <div className="get-quote-container-2">
          <a
            href="/contact"
            className="get-quote-btn"
            onClick={handleQuoteButtonClick}
          >
            Get a Quote
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;

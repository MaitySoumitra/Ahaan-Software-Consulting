import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./WindowPopup.css";
import "./WindowPopup-responsive.css";

const WindowPopup = ({ onClose }) => {
  const navigate = useNavigate();
  const popupRef = useRef(null);

  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const eventDate = new Date("2025-08-27T12:00:00");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const diff = eventDate - now;

      if (diff <= 0) {
        clearInterval(interval);
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / 1000 / 60) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setCountdown({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Click outside to close
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  const renderReel = (value) => {
    const padded = value.toString().padStart(2, "0");
    return (
      <>
        {[...padded].map((digit, i) => (
          <div className="digit-reel" key={i}>
            <div
              className="digit-track"
              style={{ transform: `translateY(-${parseInt(digit) * 50}px)` }}
            >
              {[...Array(10).keys()].map((n) => (
                <span className="digit" key={n}>
                  {n}
                </span>
              ))}
            </div>
          </div>
        ))}
      </>
    );
  };

  return (
    <div className="window-popup-overlay">
      <div className="window-popup-content" ref={popupRef}>
        <button className="close-button" onClick={onClose}>
          &times;
        </button>

        <div className="window-popup-banner">
          <svg
            className="megaphone-icon"
            width="64"
            height="64"
            viewBox="0 0 64 64"
          >
            <defs>
              <linearGradient
                id="megaphoneGradient"
                x1="0"
                y1="0"
                x2="1"
                y2="1"
              >
                <stop offset="0%" stopColor="#daa700" />
                <stop offset="100%" stopColor="#FFE082" />
              </linearGradient>
              <linearGradient id="handleGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#daa700" />
                <stop offset="100%" stopColor="#FFE082" />
              </linearGradient>
            </defs>
            <g transform="rotate(-20 32 32)">
              <path d="M4 26H14V38H4V26Z" fill="url(#megaphoneGradient)" />
              <path
                d="M14 26L34 16V48L14 38V26Z"
                fill="url(#megaphoneGradient)"
              />
              <rect x="8" y="28" width="3" height="2" fill="#fff" />
              <rect x="8" y="31" width="3" height="2" fill="#fff" />
              <rect x="8" y="34" width="3" height="2" fill="#fff" />
              <path
                d="M17 38 C18 42, 20 50, 22 52 C23 53, 26 53, 27 51 L27 45 C27 44, 26.5 43, 25.5 43 H23 L20 38 Z"
                fill="url(#handleGradient)"
                stroke="url(#handleGradient)"
                strokeWidth="1"
              />
              <g className="waves">
                <path
                  d="M42 22C46 24 46 40 42 42"
                  stroke="#000"
                  strokeWidth="0.5"
                />
                <path
                  d="M48 18C54 22 54 42 48 46"
                  stroke="#000"
                  strokeWidth="0.5"
                />
                <path
                  d="M54 14C62 20 62 44 54 50"
                  stroke="#000"
                  strokeWidth="0.5"
                />
              </g>
            </g>
          </svg>
          <span className="window-banner-text">We’re Exhibiting at the</span>
        </div>

        <h2 className="window-popup-heading">
          ASIA BUSINESS SHOW <span className="year">2025</span>
        </h2>

        <p className="window-popup-subheading">
          <span className="window-popup-subheading-content">
            Ahaan Software Consulting
          </span>{" "}
          is excited to announce our participation in the{" "}
          <span className="window-popup-subheading-content">
            Asia Business Show 2025
          </span>{" "}
          — Asia’s premier business event for innovation and growth.
        </p>

        <div className="countdown-timer">
          {[
            { label: "Days", value: countdown.days },
            { label: "Hours", value: countdown.hours },
            { label: "Minutes", value: countdown.minutes },
            { label: "Seconds", value: countdown.seconds },
          ].map((item, index) => (
            <div className="countdown-box" key={index}>
              <div className="reel-wrapper">{renderReel(item.value)}</div>
              <div className="countdown-label">{item.label}</div>
            </div>
          ))}
        </div>

        <p className="location-info">
          Sands Expo & Convention Centre, Singapore
          <br />
          <a
            href="https://www.google.com/maps?q=Sands+Expo+Singapore"
            target="_blank"
            rel="noreferrer"
          >
            View Location on Google Maps
          </a>
        </p>

        <div className="stand-number">
          <span className="Stand">Stand Number:</span> 738
        </div>

        <div className="date-box-v2">
          <div className="line" />
          <div className="day-range">Wed - Thu At 10AM - 5PM</div>
          <div className="line" />
        </div>
        <div className="date-content-v2">
          <span className="gold-bold">27th & 28th</span> August,{" "}
          <span className="italic-bold">2025</span>
        </div>

        <div className="business-section">
          <p className="business-intro">
            Come meet our team and explore how we’re transforming businesses
            through:
          </p>
          <div className="business-services-box">
            <span>Software Development</span>
            <div className="divider" />
            <span>IT consulting</span>
            <div className="divider" />
            <span>Enterprise Solutions</span>
            <div className="divider" />
            <span>Tech Partnerships</span>
          </div>
          <p className="business-outro">
            Let’s connect and discuss how we can help your business grow smarter
            and faster.
          </p>
        </div>

        <div className="popup-bottom-button-wrapper">
          <button
            className="popup-cta-button"
            onClick={() => {
              onClose();
              setTimeout(() => navigate("/contact"), 100);
            }}
          >
            Let’s Connect
          </button>
        </div>
      </div>
    </div>
  );
};

export default WindowPopup;

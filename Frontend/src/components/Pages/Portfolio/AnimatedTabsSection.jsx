import React, { useEffect, useRef, useState } from "react";
import "./AnimatedTabsSection.css";
import UiUxDesign from "../Portfolio/Tabs-Templates/UiUxDesign";
import WebDevelopment from "../Portfolio/Tabs-Templates/WebDevelopment";
import SocialMediaMarketing from "../Portfolio/Tabs-Templates/SocialMediaMarketing";
import AppDevelopment from "../Portfolio/Tabs-Templates/AppDevelopment";
import All from "./Tabs-Templates/All";

const tabColors = [
  "linear-gradient(135deg, #C07F1E, #E7B45B)",
  "linear-gradient(135deg, #C07F1E, #E7B45B)",
  "linear-gradient(135deg, #C07F1E, #E7B45B)",
  "linear-gradient(135deg, #C07F1E, #E7B45B)",
  "linear-gradient(135deg, #C07F1E, #E7B45B)",
];

const labels = ["ALL", "WEB DEV", "UI/UX", "SOCIAL", "APP"];

const icons = [
  <svg className="icon" viewBox="0 0 24 24" key="icon4">
    <path d="M4 4h10v10H4V4z" />
    <path d="M10 10h10v10H10V10z" />
  </svg>,
  <svg className="icon" viewBox="0 0 24 24" key="icon1">
    <path d="M4,5h16v10H4V5z" />
    <path d="M7,17h10v2H7V17z" />
    <path d="M9,7l-2,3l2,3" />
    <path d="M15,7l2,3l-2,3" />
  </svg>,
  <svg className="icon" viewBox="0 0 24 24" key="icon0">
    <path d="M5,5h14v14H5V5z" />
    <path d="M7,15l4-4l4,4" />
    <path d="M9,7h6v2H9V7z" />
  </svg>,

  <svg className="icon" viewBox="0 0 24 24" key="icon2">
    <path d="M4,5h16v10H6l-2,2V5z" />
    <path d="M8,8h8v2H8V8z" />
    <path d="M8,12h4v2H8V12z" />
  </svg>,
  <svg className="icon" viewBox="0 0 24 24" key="icon3">
    <path d="M5.5,3.9h13c0.7,0,1.3,0.6,1.3,1.3v13.5c0,0.7-0.6,1.3-1.3,1.3h-13c-0.7,0-1.3-0.6-1.3-1.3V5.2C4.2,4.5,4.8,3.9,5.5,3.9z" />
    <path d="M7,7h3v3H7V7z" />
    <path d="M14,7h3v3h-3V7z" />
    <path d="M7,14h3v3H7V14z" />
    <path d="M14,14h3v3h-3V14z" />
  </svg>,
];

const templates = [
  <All key="all" />,
  <WebDevelopment key="webdev" />,
  <UiUxDesign key="uiux" />,
  <SocialMediaMarketing key="social" />,
  <AppDevelopment key="app" />,
];

const AnimatedTabsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const menuRef = useRef(null);
  const borderRef = useRef(null);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  const offsetMenuBorder = () => {
    const menu = menuRef.current;
    const border = borderRef.current;
    const activeItem = menu?.children[activeIndex];

    if (!activeItem || !menu) return;

    const itemRect = activeItem.getBoundingClientRect();
    const menuRect = menu.getBoundingClientRect();

    const left =
      itemRect.left -
      menuRect.left +
      itemRect.width / 2 -
      border.offsetWidth / 2;

    border.style.transform = `translateX(${left}px)`;
  };

  useEffect(() => {
    offsetMenuBorder();
    window.addEventListener("resize", offsetMenuBorder);
    return () => window.removeEventListener("resize", offsetMenuBorder);
  }, [activeIndex]);

  return (
    <div className="tabs-wrapper">
      <menu className="menu" ref={menuRef}>
        {icons.map((icon, index) => (
          <button
            key={index}
            className={`menu-item ${activeIndex === index ? "active" : ""}`}
            style={{ "--bgColorItem": tabColors[index] }}
            onClick={() => handleClick(index)}
          >
            {activeIndex === index && (
              <span className="tab-label-bubble">{labels[index]}</span>
            )}
            {icon}
          </button>
        ))}
        <div className="menu-border" ref={borderRef}></div>
      </menu>

      <div className="svg-container">
        <svg>
          <clipPath
            id="menu"
            clipPathUnits="objectBoundingBox"
            transform="scale(0.0049285362247413 0.021978021978022)"
          >
            <path
              d="M6.7,45.5c5.7,0.1,14.1-0.4,23.3-4c5.7-2.3,9.9-5,18.1-10.5c10.7-7.1,11.8-9.2,20.6-14.3c5-2.9,9.2-5.2,15.2-7
              c7.1-2.1,13.3-2.3,17.6-2.1c4.2-0.2,10.5,0.1,17.6,2.1c6.1,1.8,10.2,4.1,15.2,7c8.8,5,9.9,7.1,20.6,14.3c8.3,5.5,12.4,8.2,18.1,10.5
              c9.2,3.6,17.6,4.2,23.3,4H6.7z"
            />
          </clipPath>
        </svg>
      </div>

      <div className="content-container">{templates[activeIndex]}</div>
    </div>
  );
};

export default AnimatedTabsSection;

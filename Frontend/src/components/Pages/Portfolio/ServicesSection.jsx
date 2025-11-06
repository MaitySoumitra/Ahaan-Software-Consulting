import React from "react";
import "./ServicesSection.css";
import { RiFileCodeLine } from "react-icons/ri";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { MdSupportAgent, MdOutlineDesignServices } from "react-icons/md";

const services = [
  {
    title: "Software Development",
    description:
      "Custom software solutions tailored to business needs, ensuring scalability, performance, and innovation for seamless digital transformation and growth.",
    icon: <RiFileCodeLine />,
  },
  {
    title: "Web Development",
    description:
      "We build responsive, secure, and highly user-friendly websites tailored to your brand, enhancing online presence and driving sustainable business success.",
    icon: <HiOutlineDesktopComputer />,
  },
  {
    title: "IT Business Consultancy",
    description:
      "Providing expert IT consulting to optimize operations, drive innovation, and align technology strategies with your business goals for maximum impact.",
    icon: <MdSupportAgent />,
  },
  {
    title: "UI & UX Design",
    description:
      "Crafting intuitive, engaging, and user-centered designs that enhance usability, improve user satisfaction, and elevate your brand's digital experience.",
    icon: <MdOutlineDesignServices />,
  },
];

const ServicesSection = () => {
  return (
    <section className="container portfolio-services-section">
      <div className="section-header">
        {/* 👇 Added subtitle with divider */}
        <h6 className="subtitle">
          What We Do <span className="divider"></span>
        </h6>

        <h2 className="title">Our Core Services</h2>
        <p className="image-carousel-content">
          We are driven by a passion to deliver excellence through continuous
          innovation and cutting-edge technology — creating intelligent,
          scalable, and future-ready solutions that empower businesses,
          transform industries, and inspire progress across the digital
          landscape.
        </p>
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <div
            key={index}
            className={`portfolio-service-card portfolio-service-card-${
              index + 1
            }`}
          >
            <div className="service-inner">
              <div className="icon-container">
                <div className="portfolio-service-icon">{service.icon}</div>
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
      <hr style={{border:"none"}}/>
      <hr style={{border:"none"}}/>
    </section>
  );
};

export default ServicesSection;

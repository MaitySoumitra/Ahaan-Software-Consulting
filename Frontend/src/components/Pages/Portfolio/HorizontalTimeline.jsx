import React from "react";
import "./HorizontalTimeline.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const timelineData = [
  {
    year: "2021",
    title: "Beginning",
    description: "Laid the foundation of our digital entrepreneurship journey. Started with small freelance projects, driven by passion and vision to create impactful digital solutions.",
    image: "https://ahaanmedia.com/asc/All/begining.jpg",
  },
  {
    year: "2022",
    title: "Growth",
    description: "Expanded our expertise by taking on larger and more diverse projects. Built strong client relationships and enhanced our capabilities in web development, design, and digital solutions.",
    image: "https://ahaanmedia.com/asc/All/Growth.png",
  },
  {
    year: "2023",
    title: "Founding",
    description: "Officially established Ahaan Software Consulting as a company. Structured services, onboarded a growing team, and started catering to international clients with end-to-end digital solutions.",
    image: "https://ahaanmedia.com/asc/All/Founding.png",
  },
  {
    year: "2024",
    title: "Leading",
    description: "Evolved into a trusted technology partner for businesses. Delivering innovative, scalable, and customer-centric solutions in web development, mobile apps, and digital transformation.",
    image: "https://ahaanmedia.com/asc/All/Leading.png",
  },
];

const HorizontalTimeline = () => {
  return (
    <div className="timeline-container container py-5">
      <div className="timeline d-flex justify-content-between align-items-center position-relative">
        {timelineData.map((item, index) => (
          <div key={index} className="timeline-item text-center">
            {index % 2 === 0 ? (
              <>
                <div className="year-top mb-2">
                  <h2>{item.year}</h2>
                </div>
                <div className="timeline-image mb-2">
                  <div className="circle-border">
                    <div className={`border-wave wave-${index + 1}`}></div>
                    <img src={item.image} alt={item.title} className="img-fluid rounded-circle" />
                  </div>
                </div>
                <div className="content-bottom mt-2">
                  <h6>{item.title}</h6>
                  <p>{item.description}</p>
                </div>
              </>
            ) : (
              <>
                <div className="content-top mb-2">
                  <h6>{item.title}</h6>
                  <p>{item.description}</p>
                </div>
                <div className="timeline-image mb-2">
                  <div className="circle-border">
                    <div className={`border-wave wave-${index + 1}`}></div>
                    <img src={item.image} alt={item.title} className="img-fluid rounded-circle" />
                  </div>
                </div>
                <div className="year-bottom mt-2">
                  <h2>{item.year}</h2>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalTimeline;

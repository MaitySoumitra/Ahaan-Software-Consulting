import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./WebDevelopment.css"; // Custom CSS

const WebDevelopment = () => {
  const imageLinks = [
    { url: "https://ahaanmedia.com/asc/Landing/Blueprint.png", link: "https://www.blueprintecosys.com/" },
    { url: "https://ahaanmedia.com/asc/Landing/BNP.png", link: "https://www.bnpcoefficient.com/" },
    { url: "https://ahaanmedia.com/asc/Landing/Innovare.png", link: "https://innovare-group.com/" },
    { url: "https://ahaanmedia.com/asc/Landing/C2V.png", link: "https://c2v.ahaanmedia.com/" },
    { url: "https://ahaanmedia.com/asc/Landing/Ekyaa.png", link: "https://ekyaa.in/" },
    { url: "https://ahaanmedia.com/asc/Landing/HELI.png", link: "https://heliclothing.com/" },
    { url: "https://ahaanmedia.com/asc/Landing/Hillpeak.png", link: "https://hillpeaktours.com/" },
    { url: "https://ahaanmedia.com/asc/Landing/Veniyok.png", link: "https://hotel-vinayak.com/" },
    { url: "https://ahaanmedia.com/asc/Landing/TrishaLoanOfficer.png", link: "https://trishloanofficer.com/" },
    { url: "https://ahaanmedia.com/asc/Landing/Drizzel.png", link: "https://drizzle.ahaanmedia.com/" },
    { url: "https://ahaanmedia.com/asc/Landing/Pawshion.png", link: "https://demo3website.myshopify.com/" },
    { url: "https://ahaanmedia.com/asc/Landing/Manufacture.png", link: "http://sugamdemo.great-site.net/" },
    { url: "https://ahaanmedia.com/asc/portfolio/BossAutomative.jpg", link: "https://boss.ahaanmedia.com/" },
    { url: "https://ahaanmedia.com/asc/portfolio/Horizon.jpg", link: "https://ecommerce.ahaanmedia.com/" },
    { url: "https://ahaanmedia.com/asc/portfolio/VictoryVault.jpg", link: "https://woocommerce.ahaanmedia.com/" },
    { url: "https://ahaanmedia.com/asc/Landing/Grocery.png", link: "http://website-asc.42web.io/" },
  ];

  return (
    <div className="webdev-gallery container py-1">
      {/* Heading */}
      <div className="text-center mb-5">
        <h2 className="fw-bold">Web Development Projects</h2>
        <p className="text-muted">Explore our recent website projects</p>
      </div>

      {/* Image Grid */}
      <div className="row gx-4 gy-4">
        {imageLinks.map((item, index) => (
          <div key={index} className="col-6 col-md-3 p-2 text-center">
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <img
                src={item.url}
                alt={`Web Design ${index + 1}`}
                className="webdev-image"
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WebDevelopment;

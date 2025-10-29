import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./UiUxDesign.css";

const UiUxDesign = () => {
  const imageLinks = [
    {
      url: "https://ahaanmedia.com/asc/portfolio/10.png",
      link: "https://designing.ahaanmedia.com/jacksonlanding.html",
    },
    {
      url: "https://ahaanmedia.com/asc/UIUX/1.jpg",
      link: "https://designing.ahaanmedia.com/Hotel-Supermarket.html",
    },
    {
      url: "https://ahaanmedia.com/asc/UIUX/2.jpg",
      link: "https://designing.ahaanmedia.com/Lawyer.html",
    },
    {
      url: "https://ahaanmedia.com/asc/UIUX/3.jpg",
      link: "https://designing.ahaanmedia.com/nice-opera.html",
    },
    {
      url: "https://ahaanmedia.com/asc/UIUX/4.jpg",
      link: "https://designing.ahaanmedia.com/TRC-Version-2.html",
    },
    {
      url: "https://ahaanmedia.com/asc/UIUX/5.jpg",
      link: "https://designing.ahaanmedia.com/writers.html",
    },
    {
      url: "https://ahaanmedia.com/asc/UIUX/6.jpg",
      link: "https://designing.ahaanmedia.com/sueno.html",
    },
    {
      url: "https://ahaanmedia.com/asc/UIUX/7.jpg",
      link: "https://designing.ahaanmedia.com/seocompany.html",
    },
    {
      url: "https://ahaanmedia.com/asc/UIUX/8.jpg",
      link: "https://designing.ahaanmedia.com/rockitcoatings.html",
    },
    {
      url: "https://ahaanmedia.com/asc/UIUX/9.jpg",
      link: "https://designing.ahaanmedia.com/ridgeart.html",
    },
    {
      url: "https://ahaanmedia.com/asc/UIUX/10.jpg",
      link: "https://designing.ahaanmedia.com/NB-MBA.html",
    },
    {
      url: "https://ahaanmedia.com/asc/UIUX/11.jpg",
      link: "https://designing.ahaanmedia.com/Paradise.html",
    },
    {
      url: "https://ahaanmedia.com/asc/UIUX/12.jpg",
      link: "https://designing.ahaanmedia.com/Cardly.html",
    },
    {
      url: "https://ahaanmedia.com/asc/UIUX/13.jpg",
      link: "https://designing.ahaanmedia.com/corporatecrm.html",
    },
    {
      url: "https://ahaanmedia.com/asc/UIUX/14.jpg",
      link: "https://designing.ahaanmedia.com/education.html",
    },
    {
      url: "https://ahaanmedia.com/asc/UIUX/15.jpg",
      link: "https://designing.ahaanmedia.com/Lynn-Clinic.html",
    },
    {
      url: "https://ahaanmedia.com/asc/portfolio/1.png",
      link: "https://designing.ahaanmedia.com/asdesign.html",
    },
    {
      url: "https://ahaanmedia.com/asc/portfolio/2.png",
      link: "https://designing.ahaanmedia.com/alloywheelrepair.html",
    },
    {
      url: "https://ahaanmedia.com/asc/portfolio/3.png",
      link: "https://designing.ahaanmedia.com/amanhome.html",
    },
    {
      url: "https://ahaanmedia.com/asc/portfolio/4.png",
      link: "https://designing.ahaanmedia.com/clubcomeur.html",
    },
    {
      url: "https://ahaanmedia.com/asc/portfolio/6.png",
      link: "https://designing.ahaanmedia.com/ekyaa.html",
    },
    {
      url: "https://ahaanmedia.com/asc/portfolio/7.png",
      link: "https://designing.ahaanmedia.com/futurepixel.html",
    },
    {
      url: "https://ahaanmedia.com/asc/portfolio/8.png",
      link: "https://designing.ahaanmedia.com/gyim.html",
    },
    {
      url: "https://ahaanmedia.com/asc/portfolio/9.png",
      link: "https://designing.ahaanmedia.com/healthcare.html",
    },
    {
      url: "https://ahaanmedia.com/asc/portfolio/11.png",
      link: "https://designing.ahaanmedia.com/lerambouillet.html",
    },
    {
      url: "https://ahaanmedia.com/asc/portfolio/12.png",
      link: "https://designing.ahaanmedia.com/norwegian.html",
    },
    {
      url: "https://ahaanmedia.com/asc/portfolio/13.png",
      link: "https://designing.ahaanmedia.com/pawshion.html",
    },
    {
      url: "https://ahaanmedia.com/asc/portfolio/14.png",
      link: "https://designing.ahaanmedia.com/regalbites.html",
    },
    {
      url: "https://ahaanmedia.com/asc/portfolio/15.png",
      link: "https://designing.ahaanmedia.com/ridgeart.html",
    },
    {
      url: "https://ahaanmedia.com/asc/portfolio/16.png",
      link: "https://designing.ahaanmedia.com/nutration.html",
    },
    {
      url: "https://ahaanmedia.com/asc/portfolio/17.png",
      link: "https://designing.ahaanmedia.com/rockitcoatings.html",
    },
    {
      url: "https://ahaanmedia.com/asc/portfolio/18.png",
      link: "https://designing.ahaanmedia.com/roofing.html",
    },
    {
      url: "https://ahaanmedia.com/asc/portfolio/19.png",
      link: "https://designing.ahaanmedia.com/skincare.html",
    },
  ];

  return (
    <div className="uiux-gallery-container container py-1">
      {/* Heading Section */}
      <div className="text-center mb-5">
        <h2 className="fw-bold">UI/UX Design Portfolio</h2>
        <p className="text-muted">Browse through our creative UI/UX layout designs</p>
      </div>

      {/* Image Grid */}
      <div className="row g-4">
        {imageLinks.map((item, index) => (
          <div key={index} className="col-6 col-md-4 text-center">
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <img
                src={item.url}
                alt={`UI/UX Design ${index + 1}`}
                className="uiux-image mb-2"
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UiUxDesign;

import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./AppDevelopment.css";

const AppDevelopment = () => {
  const imageLinks = [
    { url: "https://ahaanmedia.com/asc/AppDevelopment/1.jpg"},
    { url: "https://ahaanmedia.com/asc/AppDevelopment/2.jpg"},
    { url: "https://ahaanmedia.com/asc/AppDevelopment/3.jpg"},
    { url: "https://ahaanmedia.com/asc/AppDevelopment/4.jpg"},
    { url: "https://ahaanmedia.com/asc/AppDevelopment/5.jpg"},
  ];

  return (
    <div className="appdev-gallery container py-1">
      {/* Heading Section */}
      <div className="text-center mb-5">
        <h2 className="fw-bold">App Development Designs</h2>
        <p className="text-muted">Clean and modern designs for mobile and web applications</p>
      </div>

      {/* Image Grid */}
      <div className="row gx-4 gy-4">
        {imageLinks.map((item, index) => (
          <div key={index} className="col-6 col-md-3 p-2 text-center">
            <img
              src={item.url}
              alt={`App Design ${index + 1}`}
              className="appdev-image"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppDevelopment;

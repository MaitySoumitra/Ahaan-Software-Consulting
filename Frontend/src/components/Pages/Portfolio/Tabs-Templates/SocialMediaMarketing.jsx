import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./SocialMediaMarketing.css";

const SocialMediaMarketing = () => {
  const imageLinks = [
    { url: "https://ahaanmedia.com/asc/SocialMedia/1.jpg" },
    { url: "https://ahaanmedia.com/asc/SocialMedia/2.jpg" },
    { url: "https://ahaanmedia.com/asc/SocialMedia/3.jpg" },
    { url: "https://ahaanmedia.com/asc/SocialMedia/4.jpg" },
    { url: "https://ahaanmedia.com/asc/SocialMedia/5.jpg" },
    { url: "https://ahaanmedia.com/asc/SocialMedia/6.jpg" },
    { url: "https://ahaanmedia.com/asc/SocialMedia/7.jpg" },
    { url: "https://ahaanmedia.com/asc/SocialMedia/8.jpg" },
    { url: "https://ahaanmedia.com/asc/SocialMedia/9.jpg" },
  ];

  return (
    <div className="smm-gallery container py-1">
      {/* Heading Section */}
      <div className="text-center mb-5">
        <h2 className="fw-bold">Social Media Marketing Designs</h2>
        <p className="text-muted">A showcase of engaging and creative social media designs</p>
      </div>

      {/* Image Grid */}
      <div className="row gx-4 gy-4">
        {imageLinks.map((item, index) => (
          <div key={index} className="col-6 col-md-4 text-center">
            <img
              src={item.url}
              alt={`SMM Design ${index + 1}`}
              className="smm-image"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialMediaMarketing;

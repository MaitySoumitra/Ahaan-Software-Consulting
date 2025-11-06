import React, { useState } from "react";
import "./ImageCarousel.css";
import "bootstrap/dist/css/bootstrap.min.css";

const ImageCarousel = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    "https://ahaanmedia.com/asc/gallery/gallery1.jpg",
    "https://ahaanmedia.com/asc/gallery/gallery2.jpg",
    "https://ahaanmedia.com/asc/gallery/gallery3.jpg",
    "https://ahaanmedia.com/asc/gallery/gallery4.jpg",
    "https://ahaanmedia.com/asc/gallery/gallery5.jpg",
    "https://ahaanmedia.com/asc/gallery/gallery6.jpg",
    "https://ahaanmedia.com/asc/gallery/gallery7.jpg",
    "https://ahaanmedia.com/asc/gallery/gallery8.jpg",
  ];

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="container py-5 section-header-tech">
      <h6 className="subtitle">
          Business Show Event <span className="divider"></span>
        </h6>
      <h2 className="text-center mb-4 gallery-heading title">
        The Asia Business Show Singapore 2024
      </h2>

      <p className="image-carousel-content"  >
        Driven to be future-ready, and push beyond the building blocks of
        technology, digital, and marketing, Ahaan Software Consulting proudly
        participated in The Asia Business Show 2024 in Singapore—the powerhouse
        of innovation and enterprise!
      </p>

      <div className="row g-4">
        {images.map((image, index) => (
          <div key={index} className="col-6 col-md-4 col-lg-3">
            <div className="image-container" onClick={() => openModal(image)}>
              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                className="img-fluid gallery-image"
              />
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="modal-backdrop" onClick={closeModal}>
          <div
            className="modal-pop"
            onClick={(e) => e.stopPropagation()} // Prevent backdrop click
          >
            <button className="modal-close" onClick={closeModal}>
              &times;
            </button>
            <img src={selectedImage} alt="Selected" />
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageCarousel;

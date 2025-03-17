import React, { useState } from "react";
import "./ImageCarousel.css"; // Custom CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const ImageCarousel = () => {
    const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    "https://portfolio.ahaansoftware.com/wp-content/uploads/2025/03/9.png",
    "https://portfolio.ahaansoftware.com/wp-content/uploads/2025/03/7.png",
    "https://portfolio.ahaansoftware.com/wp-content/uploads/2025/03/6.png",
    "https://portfolio.ahaansoftware.com/wp-content/uploads/2025/03/5.png",
    "https://portfolio.ahaansoftware.com/wp-content/uploads/2025/03/4.png",
    "https://portfolio.ahaansoftware.com/wp-content/uploads/2025/03/3.png",
    "https://portfolio.ahaansoftware.com/wp-content/uploads/2025/03/2.png",
    "https://portfolio.ahaansoftware.com/wp-content/uploads/2025/03/1.png",
  ];

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4 gallery-heading">Singapore Business Show 2024</h2>
      <div className="row g-4">
        {images.map((image, index) => (
          <div key={index} className="col-6 col-md-4 col-lg-3">
            <div className="image-container" onClick={() => openModal(image)}>
              <img src={image} alt={`Gallery ${index + 1}`} className="img-fluid gallery-image" />
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="modal fade show d-block modal-pop" tabIndex="-1" role="dialog">
          <div className="modal-dialog modal-dialog-centered modal-pop" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="btn-close"
                  aria-label="Close"
                  onClick={closeModal}
                ></button>
              </div>
              <div className="modal-body text-center">
                <img src={selectedImage} alt="Selected" className="img-fluid" />
              </div>
            </div>
          </div>
          <div className="modal-backdrop fade show" onClick={closeModal}></div>
        </div>
      )}
    </div>
  );
};

export default ImageCarousel;

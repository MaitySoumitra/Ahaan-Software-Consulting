import React, { useState } from "react";
import "./AboutSection.css";
import { BsCheckCircleFill, BsPlayCircleFill } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";


const AboutSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePlayClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="about-section">
      <div className="container">
        <div className="row align-items-center">


          <div className="col-lg-6 mb-5 mb-lg-0">
            <div className="about-images">
              <div className="main-image">
                <img src="https://ahaanmedia.com/asc/All/team1.jpg" alt="Team" className="img-fluid" />
              </div>
              <div className="overlap-image">
                <img src="https://ahaanmedia.com/asc/All/team2.png" alt="Team Working" className="img-fluid" />
              </div>
              <div className="play-button" onClick={handlePlayClick}>
                <BsPlayCircleFill size={60} />
              </div>
            </div>
          </div>


          <div className="col-lg-6">
            <h2 className="about-title">
              Highly Tailored
              Technology, Develop
              & Support Services.
            </h2>
            <p className="about-description">
              Accelerate innovation with world-class tech teams. We’ll match
              you to an entire remote team of incredible freelance talent for
              all your software development needs.
            </p>

            <ul className="about-list list-unstyled">
              <li><BsCheckCircleFill className="check-icon" /> Website & Mobile application design & Development</li>
              <li><BsCheckCircleFill className="check-icon" /> Dramatically re-engineer value added IT systems via mission</li>
              <li><BsCheckCircleFill className="check-icon" /> Professional User Experience & Interface researching</li>
            </ul>

          
            <div className="about-bottom d-flex align-items-center flex-wrap gap-3">
              {/* <a href="/about" className="btn btn-primary about-btn">More About Us</a> */}
              <div className="about-contact d-flex align-items-center">
                <img src="https://ahaanmedia.com/asc/All/support-person.png" alt="Support" />
                <div>
                  <small>Call to ask any question</small><br />
                  <a href="tel:+13214210740" className="phone">+1 321-421-0740</a>
                </div>
              </div>
            </div>
          </div>
        </div>


        {isModalOpen && (
          <div className="video-modal">
            <div className="video-modal-content">
              <button className="close-button" onClick={handleCloseModal}>
                <AiOutlineClose size={28} />
              </button>
              <div className="video-wrapper">
                <video width="100%" height="400" controls autoPlay>
                  <source src="https://ahaanmedia.com/asc/video/about-video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default AboutSection;

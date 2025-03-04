import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import PlanningImg from '../../../assets/images/ourprocess/planning.png';
import DesignImg from '../../../assets/images/ourprocess/design.png';

import "./OurProcess.css";

const slides = [
  {
    id: 1,
    title: "Design",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    number: "01",
    color: "#6D28D9", // Purple
    image: PlanningImg,
  },
  {
    id: 2,
    title: "Web Development",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    number: "02",
    color: "#F59E0B", // Orange
    image: PlanningImg,
  },
  {
    id: 3,
    title: "Digital Marketing",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    number: "03",
    color: "#9333EA", // Purple
    image: DesignImg,
  },
  {
    id: 4,
    title: "SEO Optimization",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    number: "04",
    color: "#FF5733", // Red-Orange
    image: DesignImg,
  },
];

const OurProcess = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const handleNext = () => {
    if (currentIndex < slides.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0); // Loop to the first slide
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(slides.length - 1); // Loop to the last slide
    }
  };

  useEffect(() => {
    const autoplay = setInterval(handleNext, 3000); // Auto slide every 3 seconds
    return () => clearInterval(autoplay); // Clear the interval on component unmount
  }, [currentIndex]);

  return (
    <Container>
      <div className="mt-5 text-center">
        <label className="section1-client-label">Our Process</label>
        <h2 className="mt-2 fw-bold first-section-heading">
          From Your Concept to Execution, We Transform Your Ideas into Custom Solutions
        </h2>
        <p className="text-muted mx-auto mt-3 section1-content">
          Whether you require a complex enterprise software development solution or seamless software integration, 
          we will take your business to the next level of success with IT consulting services & software development solutions.
        </p>
      </div>

      <div className="services-slider">
        <div className="slider-container">
          <div className="slide-content">
            <img
              src={slides[currentIndex].image}
              alt={slides[currentIndex].title}
              className="slide-image"
            />
            <div className="text-content">
              <h3 style={{ color: slides[currentIndex].color }}>
                {slides[currentIndex].number}
              </h3>
              <h2>{slides[currentIndex].title}</h2>
              <p>{slides[currentIndex].content}</p>
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="swiper-button-prev" onClick={handlePrev}>
          <FaArrowLeft />
        </div>
        <div className="swiper-button-next" onClick={handleNext}>
          <FaArrowRight />
        </div>
      </div>
    </Container>
  );
};

export default OurProcess;

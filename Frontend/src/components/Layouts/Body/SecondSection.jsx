import { Container } from "react-bootstrap";

import "./SecondSection.css";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Slide1 from "../../../assets/images/slider/slide1.png";
import Slide2 from "../../../assets/images/slider/slide2.png";
import Slide3 from "../../../assets/images/slider/slide3.png";
import Slide4 from "../../../assets/images/slider/slide4.png";
import Slide5 from "../../../assets/images/slider/slide5.png";

const slides = [
  {
    title: "UI/UX Design",
    image: Slide1,
    content: "UI/UX Design content goes here.",
    logos: ["/assets/ekyaa.png", "/assets/bp.png"],
  },
  {
    title: "Software Development",
    image: Slide2,
    content: "Software Development content goes here.",
    logos: ["/assets/ekyaa.png", "/assets/bp.png"],
  },
  {
    title: "Web Development",
    image: Slide3,
    content: "Web Development content goes here.",
    logos: ["/assets/ekyaa.png", "/assets/bp.png", "/assets/jazzyln.png"],
  },
  {
    title: "Digital Marketing",
    image: Slide4,
    content: "Digital Marketing content goes here.",
    logos: ["/assets/ekyaa.png"],
  },
  
  {
    title: "Branding Design",
    image: Slide5,
    content: "Branding Design content goes here.",
    logos: ["/assets/bp.png"],
  },
  
];

const SecondSection = () => {
  const [activeIndex, setActiveIndex] = useState(2); // Track the active slide
  const [hoverIndex, setHoverIndex] = useState(null); // Track the hovered slide

  const handleMouseEnter = (index) => {
    setHoverIndex(index); // Set the hovered slide
  };

  const handleMouseLeave = () => {
    setHoverIndex(index); // Reset on mouse leave
  };

  return (
    <Container className="mt-5 ">
      <div className="expanding-slider">
      <Swiper
          slidesPerView={5}
          spaceBetween={10}
          centeredSlides={true}
          navigation={true}
          modules={[Navigation]}
          allowTouchMove={false}
          loop={true}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className="mySwiper"
          breakpoints={{
            1200:{
              slidesPerView: 5,
            },
            1024: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 1,
            },
          }}
        >
          {slides.map((slide, index) => (
            <SwiperSlide
              key={index}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <div
                className={`slide-card ${hoverIndex === index ? "active" : ""}`}
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="slide-content">
                  {hoverIndex === index && (
                    <>
                      <h2>{slide.title}</h2>
                      <p>{slide.content}</p>
                      <div className="slide-logos">
                        {slide.logos?.map((logo, i) => (
                          <img key={i} src={logo} alt="logo" className="partner-logo" />
                        ))}
                      </div>
                      <button className="learn-more">Learn More</button>
                    </>
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Container>
  );
};

export default SecondSection;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CaseStudyCarousel.css";
import img1 from "../../../assets/texture/1.png";
import img2 from "../../../assets/texture/2.png";
import img3 from "../../../assets/texture/3.png";
import img4 from "../../../assets/texture/4.png";
import img5 from "../../../assets/texture/5.png";
import img6 from "../../../assets/texture/6.png";
import img7 from "../../../assets/texture/7.png";
import img8 from "../../../assets/texture/8.png";
import img9 from "../../../assets/texture/9.png";
import img10 from "../../../assets/texture/10.png";

const CaseStudyCarousel = () => {
  const slides = [
    { img: img1, link: "#" },
    { img: img2, link: "#" },
    { img: img3, link: "#" },
    { img: img4, link: "#" },
    { img: img5, link: "#" },
    { img: img6, link: "#" },
    { img: img7, link: "#" },
    { img: img8, link: "#" },
    { img: img9, link: "#" },
    { img: img10, link: "#" },
  ];

  return (
    <section className="case-section py-5">
      <Container>
        {/* 🔹 Section Heading */}
        <Row className="text-center mb-4">
          <Col>
            <p className="section-header-tech">
              <h6 className="subtitle" >
                view our portfolio <span className="divider"></span>
              </h6>
            </p>
            <h2 className="title" style={{ textAlign: "left", color: "#fff" }}>
              Case Study
            </h2>
            <p className="image-carousel-content" >
              We understand, collaborate, and empower! From complex Software
              Development Service to Seamless Integration, experience how our
              next-gen IT consulting and software solutions can transform and
              accelerate your business.
            </p>
          </Col>
        </Row>

        {/* 🔹 Swiper Carousel */}
        <Swiper
          modules={[Autoplay]}
          slidesPerView={5}
          spaceBetween={30}
          loop={true}
          freeMode={true}
          speed={4500}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          grabCursor={true}
          allowTouchMove={false}
          breakpoints={{
            320: { slidesPerView: 1.3, spaceBetween: 15 },
            768: { slidesPerView: 2.3, spaceBetween: 25 },
            992: { slidesPerView: 3.3, spaceBetween: 30 },
            1200: { slidesPerView: 5, spaceBetween: 40 },
          }}
          className="case-swiper"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <a
                href={slide.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
              >
                <div
                  className="case-card"
                  style={{
                    marginTop: index % 2 === 0 ? "40px" : "0px",
                  }}
                >
                  <img src={slide.img} alt={`Case ${index + 1}`} />
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* 🔹 Right-Aligned Button */}
        <div className="view-all-btn">
          <a href="/portfolio">
            View All →
          </a>
        </div>
      </Container>

      {/* 🔹 Bottom Wave Divider */}
      <section className="wave-section">
        <div className="wave wave1"></div>
        <div className="wave wave2"></div>
        <div className="wave wave3"></div>
        <div className="wave wave4"></div>
      </section>
    </section>
  );
};

export default CaseStudyCarousel;

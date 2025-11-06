import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./CarouselComponent.css";

const CarouselComponent = () => {
  const images = [
    { src: "https://ahaanmedia.com/asc/gallery/gallery1.jpg", alt: "Slide 1" },
    { src: "https://ahaanmedia.com/asc/gallery/gallery2.jpg", alt: "Slide 2" },
    { src: "https://ahaanmedia.com/asc/gallery/gallery3.jpg", alt: "Slide 3" },
    { src: "https://ahaanmedia.com/asc/gallery/gallery4.jpg", alt: "Slide 4" },
    { src: "https://ahaanmedia.com/asc/gallery/gallery5.jpg", alt: "Slide 5" },
    { src: "https://ahaanmedia.com/asc/gallery/gallery6.jpg", alt: "Slide 6" },
  ];

  return (
    <div className="custom-carousel-wrapper position-relative">
      <div className="carousel-header text-center section-header-tech">
        <h6 className="subtitle">
          Technology Use <span className="divider"></span>
        </h6>
        <h2 className="carousel-title title">
          The Asia Business Show Singapore 2024
        </h2>
        <p className="carousel-subtitle image-carousel-content">
          Driven to be future-ready, and push beyond the building blocks of
          technology, digital, and marketing, Ahaan Software Consulting proudly
          participated in The Asia Business Show 2024 in Singapore—the
          powerhouse of innovation and enterprise!
        </p>
      </div>

      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={10}
        slidesPerView={4}
        loop={true}
        navigation={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          992: { slidesPerView: 3 },
          1200: { slidesPerView: 4 },
        }}
        className="carousel-track"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="carousel-slide">
            <img src={image.src} alt={image.alt} className="carousel-img" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarouselComponent;

import React from "react";
import FirstBanner from "../../Layouts/Body/FirstBanner";
import FirstSection from "../../Layouts/Body/FirstSection";
import ThirdSection from "../../Layouts/Body/ThirdSection";
import WhyChooseUs from "../../Layouts/Body/WhyChooseUs";
import TotalProject from "../../Layouts/Body/TotalProject";
import OurProcess from "../../Layouts/Body/OurProcess";
import SecondBanner from "../../Layouts/Body/SecondBanner";
import ImageCarousel from "../../Layouts/Body/ImageCarousel";
import TestimonialCarousel from "../../Landing/testimonials/Testimonials";
const Home = () => {
  return (
    <div>
      <FirstBanner />
      <OurProcess />
      <FirstSection />
      <ThirdSection /> 
      <TotalProject />
      <WhyChooseUs />
      <ImageCarousel/>
      <TestimonialCarousel/>
      <SecondBanner />
    </div>
  );
};

export default Home;

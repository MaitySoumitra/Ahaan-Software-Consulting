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
import HeroBanner from "../../Layouts/Body/HeroBanner";
import WhoWeAreSection from "../../Layouts/Body/WhoWeAreSection";
import ServicesSection from "../Portfolio/ServicesSection";
import CaseStudyCarousel from "../../Layouts/Body/CaseStudyCarousel";
import ConnectSection from "../../Layouts/Body/ConnectSection";
const Home = () => {
  return (
    <div>
      {/* <FirstBanner /> */}
      <HeroBanner />
      <WhoWeAreSection />
      <ServicesSection />
      <ThirdSection />
      <TotalProject />
      <FirstSection />
      <WhyChooseUs />
      <OurProcess />
      <ConnectSection/>
      <ImageCarousel />
      <CaseStudyCarousel />
      <TestimonialCarousel />
      <SecondBanner />
    </div>
  );
};

export default Home;

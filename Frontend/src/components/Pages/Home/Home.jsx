import React from "react";
import FirstBanner from "../../Layouts/Body/FirstBanner";
import FirstSection from "../../Layouts/Body/FirstSection";
import SecondSection from "../../Layouts/Body/SecondSection";
import ThirdSection from "../../Layouts/Body/ThirdSection";
import WhyChooseUs from "../../Layouts/Body/WhyChooseUs";
import TotalProject from "../../Layouts/Body/TotalProject";
import OurProcess from "../../Layouts/Body/OurProcess";
import SecondBanner from "../../Layouts/Body/SecondBanner";
import OurIndustry from "../../Layouts/Body/OurIndustry";
import ImageCarousel from "../../Layouts/Body/ImageCarousel";
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
      <SecondBanner />
     
    </div>
  );
};

export default Home;

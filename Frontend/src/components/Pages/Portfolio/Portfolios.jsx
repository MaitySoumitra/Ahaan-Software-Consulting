import React from 'react'
import PortfolioBanner from './PortfolioBanner'
import ServicesSection from './ServicesSection'
import AboutSection from './AboutSection'
import HorizontalTimeline from './HorizontalTimeline'
import ThirdSection from "../../Layouts/Body/ThirdSection";
import CarouselComponent from './CarouselComponent'
import CounterSection from './CounterSection'
import AnimatedTabsSection from './AnimatedTabsSection'
const Portfolios = () => {
  return (
    <>
    <PortfolioBanner/>
    <AnimatedTabsSection/>
    <CounterSection/>
    <ServicesSection/>
    <ThirdSection/>
    <CarouselComponent/>
    
    </>
  )
}

export default Portfolios
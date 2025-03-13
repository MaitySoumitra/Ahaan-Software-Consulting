import React from 'react'
import ResponsiveNavbar from './navbar/Navbar'
import Banner from './banner/Banner'
import Domain from './domain/Domain'
import Services from './service/Service'
import Tech from './technologies/Tech'
import About from './aboutUs/About'
import Counter from './counter/Counter'
import Call from './call/Call'
import Portfolio from './portfolio/Portfolio'
import Brands from './brands/Brands'
import TestimonialCarousel from './testimonials/Testimonials'
import Footer from './footer/Footer'

const Landing = () => {
  return (
    <div>
        <ResponsiveNavbar/>
        <Banner/>
        <Domain/>
        <Services/>
        <Tech/>
        <About/>
        <Call/>
        <Portfolio/>
        <Brands/>
        <TestimonialCarousel/>
        <Footer/>
        
    </div>
  )
}

export default Landing
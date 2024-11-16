import Footer from '@/components/LandingPage/Footer/Footer'
import GetStarted from '@/components/LandingPage/GetStarted/GetStarted'
import { HeroSection } from '@/components/LandingPage/HeroSection/HeroSection'
import KeyBenefits from '@/components/LandingPage/KeyBenefits/KeyBenefits'
import Navbar from '@/components/LandingPage/Navbar/Navbar'
import LandingTestimonial from '@/components/LandingPage/Testimonials/ContentTestimonial'
import Testimonial from '@/components/UseCases/ContentCreation/Testimonial'
import React from 'react'

const page = () => {
  return (

    <>
    <Navbar />
    <HeroSection/>
    <KeyBenefits/>
    <GetStarted/>
    <Footer/>
    </>

)
}

export default page
import Footer from '@/components/LandingPage/Footer/Footer'
import GetStarted from '@/components/LandingPage/GetStarted/GetStarted'
import Navbar from '@/components/LandingPage/Navbar/Navbar'
import Testimonial from '@/components/UseCases/ContentCreation/Testimonial'
import ScheduleHeroSection from '@/components/UseCases/SchedulingContent/HeroSection'
import WhyScheduling from '@/components/UseCases/SchedulingContent/WhyScheduling'
import React from 'react'

const page = () => {
  return (
    <>

    <div className="">
<Navbar/>
    </div>
    <div className="">
<ScheduleHeroSection/>
    </div>
    <div className="">
      <WhyScheduling/>
    </div>
    <div className="">
  <Testimonial/>
</div>
<div className="">
<GetStarted 
        background="bg-[#070314]"
        title="Experience the power of AI-driven content creation"
        buttonText="Get Started"
        buttonLink="/"
        paddingy="py-20"
      />
</div>
<div className="">
  <Footer/>
</div>
    </>

  )
}

export default page
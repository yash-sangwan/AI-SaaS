import Footer from '@/components/LandingPage/Footer/Footer'
import GetStarted from '@/components/LandingPage/GetStarted/GetStarted'
import Navbar from '@/components/LandingPage/Navbar/Navbar'
import ContentHeroSection from '@/components/UseCases/ContentCreation/HeroSection'
import Testimonial from '@/components/UseCases/ContentCreation/Testimonial'
import WhyContentCreation from '@/components/UseCases/ContentCreation/WhyContentCreation'
import React from 'react'

const page = () => {
  return (
<>
<div className="">
  <Navbar />
</div>
<div className="">
<ContentHeroSection />
</div>
<div className="">
<WhyContentCreation/>
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
import Footer from '@/components/LandingPage/Footer/Footer'
import GetStarted from '@/components/LandingPage/GetStarted/GetStarted'
import Navbar from '@/components/LandingPage/Navbar/Navbar'
import CollaborationTestimonials from '@/components/LandingPage/Testimonials/CollaborationTestimonials'
import CollaborativeWorkflowHeroSection from '@/components/UseCases/CollaborativeWorkflow/HeroSection'
import WhyCollaboration from '@/components/UseCases/CollaborativeWorkflow/WhyCollaboration'
import Testimonial from '@/components/UseCases/ContentCreation/Testimonial'
import React from 'react'

const page = () => {
  return (
<>
<div className="">
    <Navbar />
</div>
<div className="">
    <CollaborativeWorkflowHeroSection/>
</div>
<div className="">
    <WhyCollaboration/>
</div>
<div className="">
  <CollaborationTestimonials/>
</div>
<div className="">
<GetStarted
        background="bg-[#070314]"
        title="Experience the power of AI-driven content creation"
        buttonText="Get Started"
        buttonLink="/"
        paddingy="py-2"
      />
</div>
<div className="">
  <Footer/>
</div>
</>

)
}

export default page
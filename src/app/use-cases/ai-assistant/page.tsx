import Footer from "@/components/LandingPage/Footer/Footer";
import GetStarted from "@/components/LandingPage/GetStarted/GetStarted";
import Navbar from "@/components/LandingPage/Navbar/Navbar";
import CollaborationTestimonials from "@/components/LandingPage/Testimonials/CollaborationTestimonials";
import AIAssistantHeroSection from "@/components/UseCases/AIAssistant/HeroSection";
import WhyAIAssistant from "@/components/UseCases/AIAssistant/WhyAIAssistant";
import AutomatedWorkflowHeroSection from "@/components/UseCases/AutomatedWorkflow/HeroSection";
import WhyAutomatedWorkflow from "@/components/UseCases/AutomatedWorkflow/WhyAutomatedWorkflow";
import Testimonial from "@/components/UseCases/ContentCreation/Testimonial";
import React from "react";

const page = () => {
  return (
    <>
      <div className="">
        <Navbar />
      </div>
      <div className="">
<AIAssistantHeroSection />
      </div>
      <div className="">
<WhyAIAssistant/>
      </div>
      <div className="">
        <CollaborationTestimonials  />
      </div>
      <div className="">
        <GetStarted
          background="bg-[#070314]"
          title="Experience the power of AI-driven content creation"
          buttonText="Get Started"
          buttonLink="/"
          paddingy="py-4"
        />
      </div>
      <div className="">
        <Footer />
      </div>
    </>
  );
};

export default page;

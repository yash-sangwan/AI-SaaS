import Footer from "@/components/LandingPage/Footer/Footer";
import GetStarted from "@/components/LandingPage/GetStarted/GetStarted";
import Navbar from "@/components/LandingPage/Navbar/Navbar";
import AIAnalyticsHeroSection from "@/components/UseCases/AIAnalytics/HeroSection";
import WhyAIAnalytics from "@/components/UseCases/AIAnalytics/WhyAIAnalytics";
import Testimonial from "@/components/UseCases/ContentCreation/Testimonial";
import React from "react";

const page = () => {
  return (
    <>
      <div className="">
        <Navbar />
      </div>
      <div className="">
        <AIAnalyticsHeroSection />
      </div>
      <div className="">
        <WhyAIAnalytics />
      </div>
      <div className="">
  <Testimonial
  
  />
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
  );
};

export default page;

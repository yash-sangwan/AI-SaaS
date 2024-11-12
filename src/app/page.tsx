import { FeatureSections } from "@/components/LandingPage/FeatureSection/FeatureSections";
import { HeroSection } from "@/components/LandingPage/HeroSection/HeroSection";
import KeyBenefits from "@/components/LandingPage/KeyBenefits/KeyBenefits";
import Navbar from "@/components/LandingPage/Navbar/Navbar";
import Testimonials from "@/components/LandingPage/Testimonials/Testimonial";
import { Inter } from "@next/font/google";
import { Key } from "lucide-react";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export default function Home() {
  return (
    <>
      <div className={`${inter.className} bg-black`}>
        <Navbar />
      </div>
      <div className="">
        <HeroSection />
      </div>
      <div className="">
        <FeatureSections />
      </div>
      <div className="">
        <KeyBenefits />
      </div>
      <div className="">
        <Testimonials/>
      </div>
    </>
  );
}

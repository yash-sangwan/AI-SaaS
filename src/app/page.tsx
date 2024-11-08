import { FeatureSections } from "@/components/LandingPage/FeatureSection/FeatureSections";
import { HeroSection } from "@/components/LandingPage/HeroSection/HeroSection";
import Navbar from "@/components/LandingPage/Navbar/Navbar";
import { Inter } from "@next/font/google";

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
    </>
  );
}

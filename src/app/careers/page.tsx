import Careers from "@/components/Careers/Careers";
import Footer from "@/components/LandingPage/Footer/Footer";
import Navbar from "@/components/LandingPage/Navbar/Navbar";
import { Car } from "lucide-react";
import React from "react";

const page = () => {
  return (
    <>
      <div className="">
        <Navbar />
      </div>
      <div className="">
        <Careers />
      </div>
      <div className="">
        <Footer/>
      </div>
    </>
  );
};

export default page;

"use client";
import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import RoadmapSection from "./RoadmapSection";
import TokenCards from "./TokenCards";
import Footer from "./Footer";

const SnoopyLandingPage: React.FC = () => {
  return (
    <main className="overflow-x-hidden w-full text-white bg-[#050817] min-h-screen font-['Poppins'] relative">
      {/* Space stars background for entire page */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        {/* First set of stars */}
        <div className="absolute h-1 w-1 bg-white rounded-full top-[5%] left-[10%] opacity-60"></div>
        <div className="absolute h-2 w-2 bg-white rounded-full top-[8%] left-[85%] opacity-40"></div>
        <div className="absolute h-1 w-1 bg-white rounded-full top-[15%] left-[20%] opacity-70"></div>
        <div className="absolute h-1.5 w-1.5 bg-white rounded-full top-[18%] left-[70%] opacity-50"></div>
        <div className="absolute h-1 w-1 bg-white rounded-full top-[25%] left-[15%] opacity-60"></div>
        <div className="absolute h-1 w-1 bg-white rounded-full top-[30%] left-[80%] opacity-70"></div>
        <div className="absolute h-2 w-2 bg-white rounded-full top-[35%] left-[30%] opacity-40"></div>
        <div className="absolute h-1 w-1 bg-white rounded-full top-[42%] left-[65%] opacity-50"></div>
        
        {/* Second set of stars */}
        <div className="absolute h-1.5 w-1.5 bg-white rounded-full top-[50%] left-[25%] opacity-60"></div>
        <div className="absolute h-1 w-1 bg-white rounded-full top-[55%] left-[90%] opacity-40"></div>
        <div className="absolute h-1 w-1 bg-white rounded-full top-[62%] left-[5%] opacity-50"></div>
        <div className="absolute h-2 w-2 bg-white rounded-full top-[70%] left-[45%] opacity-30"></div>
        <div className="absolute h-1 w-1 bg-white rounded-full top-[75%] left-[75%] opacity-70"></div>
        <div className="absolute h-1.5 w-1.5 bg-white rounded-full top-[82%] left-[35%] opacity-50"></div>
        <div className="absolute h-1 w-1 bg-white rounded-full top-[90%] left-[60%] opacity-40"></div>
        <div className="absolute h-1 w-1 bg-white rounded-full top-[95%] left-[15%] opacity-60"></div>
        
        {/* Larger glowing elements */}
        <div className="absolute top-[10%] right-[5%] w-24 h-24 rounded-full bg-gradient-to-br from-[#7EEBFF] to-[#5692FF] opacity-5 blur-[30px]"></div>
        <div className="absolute top-[60%] left-[5%] w-32 h-32 rounded-full bg-gradient-to-br from-[#A389FF] to-[#7B4DFF] opacity-5 blur-[40px]"></div>
        <div className="absolute bottom-[15%] right-[10%] w-40 h-40 rounded-full bg-gradient-to-br from-[#FFD868] to-[#FF9C4D] opacity-5 blur-[50px]"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 md:px-8 lg:px-10">
        <Navbar />
        <div className="flex flex-col items-center">
          <HeroSection />
          <TokenCards />
          
          {/* Full-width Roadmap Section */}
          <div className="w-full mt-32">
            <RoadmapSection />
          </div>
          
          {/* About Us Section */}
          <div className="w-full mt-24">
            <AboutSection />
          </div>
          
          <Footer />
        </div>
      </div>
    </main>
  );
};

export default SnoopyLandingPage;

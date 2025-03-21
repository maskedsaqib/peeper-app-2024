"use client";
import React from "react";
import SpaceButton from "./SpaceButton";

const HeroSection: React.FC = () => {
  return (
    <section className="flex flex-col items-center w-full pt-14 relative">
      <div className="relative w-full">
        {/* Hero text with gradient fade effect */}
        <div className="relative w-full">
          <h1 className="font-bold text-center uppercase mx-auto relative">
            <span className="inline-block text-[200px] max-lg:text-[150px] max-md:text-8xl max-sm:text-7xl bg-gradient-to-r from-transparent via-white to-transparent bg-clip-text text-transparent">
              peeper.lol
            </span>
          </h1>
        </div>
        
        {/* Peeper character positioned in center of hero text - increased size */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-[500px] max-lg:w-[450px] max-md:w-[350px] max-sm:w-[300px]">
          <img 
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d9641eb9420e3ff185990b00009978e78b82f9c7" 
            alt="Peeper Character - A cute cartoon bird mascot"
            className="w-full h-auto"
          />
        </div>
      </div>
      
      {/* Content below - adjusted margin from top */}
      <div className="flex flex-col gap-4 items-center mt-28 max-w-3xl mx-auto">
        <h2 className="text-3xl font-light text-center max-md:text-2xl max-sm:text-xl">
          Track Crypto Influencers in Real-Time
        </h2>
        <p className="text-xl text-center text-white text-opacity-60 max-md:text-lg max-sm:text-base">
          Get high-signal information from top crypto voices before it reaches
          mainstream channels
        </p>
        <div className="mt-4">
          <SpaceButton 
            text="Get Started" 
            onClick={() => console.log("Get Started clicked")} 
          />
        </div>
        
        {/* Three cards section - updated to match design in image */}
        <div className="w-full mt-32 px-4">
          <div className="flex flex-col md:flex-row justify-center items-center md:items-stretch gap-6 max-w-6xl mx-auto">
            {/* Fair Launch Card */}
            <div className="w-[350px] h-[350px] bg-[#0F1527] rounded-xl border border-[#2A3654] p-8 flex flex-col items-center backdrop-blur-sm bg-opacity-60 transition-all hover:border-[#7EEBFF]/50 hover:shadow-[0_0_20px_rgba(126,235,255,0.15)]">
              <div className="w-20 h-20 rounded-full bg-gradient-to-b from-[#7EEBFF] to-[#2A3654] mb-8 flex items-center justify-center relative">
                <div className="absolute inset-0 rounded-full border border-[#7EEBFF]/30 shadow-[0_0_15px_rgba(126,235,255,0.2)]"></div>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white/90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-light text-center mb-4 bg-gradient-to-r from-[#7EEBFF] to-[#80FFDB] bg-clip-text text-transparent">Fair Launch</h3>
              <p className="text-white/60 text-center text-sm leading-relaxed">
                From concept to deployment, we create high-performance dApps tailored for finance and, gaming
              </p>
            </div>

            {/* 1 Billion Supply Card */}
            <div className="w-[350px] h-[350px] bg-[#0F1527] rounded-xl border border-[#2A3654] p-8 flex flex-col items-center backdrop-blur-sm bg-opacity-60 transition-all hover:border-[#A389FF]/50 hover:shadow-[0_0_20px_rgba(163,137,255,0.15)]">
              <div className="w-20 h-20 rounded-full bg-gradient-to-b from-[#A389FF] to-[#2A3654] mb-8 flex items-center justify-center relative">
                <div className="absolute inset-0 rounded-full border border-[#A389FF]/30 shadow-[0_0_15px_rgba(163,137,255,0.2)]"></div>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white/90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-light text-center mb-4 bg-gradient-to-r from-[#A389FF] to-[#D78FFF] bg-clip-text text-transparent">1 Billion supply</h3>
              <p className="text-white/60 text-center text-sm leading-relaxed">
                Seamless, secure crypto wallet solutions for storing, sending, and managing digital assets.
              </p>
            </div>

            {/* Dex Pumpfun Card */}
            <div className="w-[350px] h-[350px] bg-[#0F1527] rounded-xl border border-[#2A3654] p-8 flex flex-col items-center backdrop-blur-sm bg-opacity-60 transition-all hover:border-[#FFD868]/50 hover:shadow-[0_0_20px_rgba(255,216,104,0.15)]">
              <div className="w-20 h-20 rounded-full bg-gradient-to-b from-[#FFD868] to-[#2A3654] mb-8 flex items-center justify-center relative">
                <div className="absolute inset-0 rounded-full border border-[#FFD868]/30 shadow-[0_0_15px_rgba(255,216,104,0.2)]"></div>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white/90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-light text-center mb-4 bg-gradient-to-r from-[#FFD868] to-[#FFA41B] bg-clip-text text-transparent">dex Pumpfun</h3>
              <p className="text-white/60 text-center text-sm leading-relaxed">
                Launch your own next-gen marketplace for NFTs with end-to-end support, from minting to trading.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

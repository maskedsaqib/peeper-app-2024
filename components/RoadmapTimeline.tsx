import React from "react";

const RoadmapTimeline: React.FC = () => {
  return (
    <div className="mt-10 relative">
      {/* Galaxy path connecting planets - centered */}
      <div className="absolute left-1/2 top-0 bottom-0 w-3 hidden md:block bg-gradient-to-b from-[#7EEBFF] via-[#A389FF] to-[#FFD868] -translate-x-1/2 opacity-30 rounded-full blur-[4px]"></div>
      <div className="absolute left-1/2 top-0 bottom-0 w-1 hidden md:block bg-gradient-to-b from-[#7EEBFF] via-[#A389FF] to-[#FFD868] -translate-x-1/2"></div>
      
      {/* Timeline Content */}
      <div className="space-y-24 relative">
        {/* 10% Milestone - Left side */}
        <div className="flex flex-col md:flex-row relative">
          {/* Planet point on timeline */}
          <div className="absolute left-1/2 top-8 w-10 h-10 rounded-full bg-gradient-to-br from-[#7EEBFF] to-[#5692FF] transform -translate-x-1/2 hidden md:block shadow-[0_0_15px_rgba(126,235,255,0.5)] z-10">
            {/* Planet rings */}
            <div className="absolute top-1/2 left-1/2 w-14 h-3 border-2 border-[#7EEBFF]/40 rounded-full -translate-x-1/2 -translate-y-1/2 rotate-12"></div>
          </div>
          
          {/* Connector line for desktop - to left */}
          <div className="absolute left-1/2 top-8 h-0.5 w-12 bg-[#7EEBFF] hidden md:block blur-[1px] transform -translate-x-full"></div>
          
          {/* Content positioned to the left of the line */}
          <div className="md:w-1/2 md:pr-12 flex justify-end">
            <div className="w-full bg-[#0F1527] rounded-xl border border-[#2A3654] p-6 transition-all hover:border-[#7EEBFF]/50 hover:shadow-[0_0_20px_rgba(126,235,255,0.15)] backdrop-blur-sm bg-opacity-60">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-[120px] flex-shrink-0">
                  <div className="text-4xl font-semibold bg-gradient-to-r from-[#7EEBFF] to-[#5692FF] bg-clip-text text-transparent">
                    10%
                  </div>
                </div>
                <div>
                  <h4 className="text-2xl font-medium text-white mb-3">
                    Cosmic Foundation
                  </h4>
                  <ul className="space-y-2 text-[#B4C5FF]">
                    <li className="flex items-start">
                      <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#7EEBFF] mt-2 mr-2 shadow-[0_0_5px_rgba(126,235,255,0.7)]"></span>
                      <span>Launch the website to establish an official presence</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#7EEBFF] mt-2 mr-2 shadow-[0_0_5px_rgba(126,235,255,0.7)]"></span>
                      <span>Deploy core technology and smart contracts</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#7EEBFF] mt-2 mr-2 shadow-[0_0_5px_rgba(126,235,255,0.7)]"></span>
                      <span>Begin community growth through airdrops and partnerships</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          {/* Empty div for the right side */}
          <div className="md:w-1/2 hidden md:block"></div>
        </div>

        {/* 30% Milestone - Right side */}
        <div className="flex flex-col md:flex-row relative">
          {/* Planet point on timeline */}
          <div className="absolute left-1/2 top-8 w-10 h-10 rounded-full bg-gradient-to-br from-[#A389FF] to-[#7B4DFF] transform -translate-x-1/2 hidden md:block shadow-[0_0_15px_rgba(163,137,255,0.5)] z-10">
            {/* Planet crater details */}
            <div className="absolute top-2 left-2 w-2 h-2 rounded-full bg-[#0F1527] opacity-40"></div>
            <div className="absolute bottom-3 right-2 w-1.5 h-1.5 rounded-full bg-[#0F1527] opacity-40"></div>
          </div>
          
          {/* Connector line for desktop - to right */}
          <div className="absolute left-1/2 top-8 h-0.5 w-12 bg-[#A389FF] hidden md:block blur-[1px]"></div>
          
          {/* Empty div for the left side */}
          <div className="md:w-1/2 hidden md:block"></div>
          
          {/* Content positioned to the right of the line */}
          <div className="md:w-1/2 md:pl-12">
            <div className="w-full bg-[#0F1527] rounded-xl border border-[#2A3654] p-6 transition-all hover:border-[#A389FF]/50 hover:shadow-[0_0_20px_rgba(163,137,255,0.15)] backdrop-blur-sm bg-opacity-60">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-[120px] flex-shrink-0">
                  <div className="text-4xl font-semibold bg-gradient-to-r from-[#A389FF] to-[#7B4DFF] bg-clip-text text-transparent">
                    30%
                  </div>
                </div>
                <div>
                  <h4 className="text-2xl font-medium text-white mb-3">
                    Nebula Integration
                  </h4>
                  <ul className="space-y-2 text-[#B4C5FF]">
                    <li className="flex items-start">
                      <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#A389FF] mt-2 mr-2 shadow-[0_0_5px_rgba(163,137,255,0.7)]"></span>
                      <span>Implement AI-driven features to enhance product value</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#A389FF] mt-2 mr-2 shadow-[0_0_5px_rgba(163,137,255,0.7)]"></span>
                      <span>Introduce a premium model with subscription or one-time fees</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#A389FF] mt-2 mr-2 shadow-[0_0_5px_rgba(163,137,255,0.7)]"></span>
                      <span>Use generated revenue for a buyback and burn mechanism</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 70% Milestone - Left side */}
        <div className="flex flex-col md:flex-row relative">
          {/* Planet point on timeline */}
          <div className="absolute left-1/2 top-8 w-10 h-10 rounded-full bg-gradient-to-br from-[#D78FFF] to-[#B54DFF] transform -translate-x-1/2 hidden md:block shadow-[0_0_15px_rgba(215,143,255,0.5)] z-10">
            {/* Planet ring */}
            <div className="absolute top-1/2 left-1/2 w-16 h-4 border border-[#D78FFF]/30 rounded-full -translate-x-1/2 -translate-y-1/2 -rotate-12"></div>
            <div className="absolute top-1/2 left-1/2 w-14 h-3 border border-[#D78FFF]/30 rounded-full -translate-x-1/2 -translate-y-1/2 -rotate-12"></div>
          </div>
          
          {/* Connector line for desktop - to left */}
          <div className="absolute left-1/2 top-8 h-0.5 w-12 bg-[#D78FFF] hidden md:block blur-[1px] transform -translate-x-full"></div>
          
          {/* Content positioned to the left of the line */}
          <div className="md:w-1/2 md:pr-12 flex justify-end">
            <div className="w-full bg-[#0F1527] rounded-xl border border-[#2A3654] p-6 transition-all hover:border-[#D78FFF]/50 hover:shadow-[0_0_20px_rgba(215,143,255,0.15)] backdrop-blur-sm bg-opacity-60">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-[120px] flex-shrink-0">
                  <div className="text-4xl font-semibold bg-gradient-to-r from-[#D78FFF] to-[#B54DFF] bg-clip-text text-transparent">
                    70%
                  </div>
                </div>
                <div>
                  <h4 className="text-2xl font-medium text-white mb-3">
                    Galactic Expansion
                  </h4>
                  <ul className="space-y-2 text-[#B4C5FF]">
                    <li className="flex items-start">
                      <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#D78FFF] mt-2 mr-2 shadow-[0_0_5px_rgba(215,143,255,0.7)]"></span>
                      <span>Secure listings on centralized exchanges (CEX) for liquidity</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#D78FFF] mt-2 mr-2 shadow-[0_0_5px_rgba(215,143,255,0.7)]"></span>
                      <span>Execute large-scale marketing campaigns with influencers and ads</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#D78FFF] mt-2 mr-2 shadow-[0_0_5px_rgba(215,143,255,0.7)]"></span>
                      <span>Expand utilities with sniper bots and advanced trading tools</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          {/* Empty div for the right side */}
          <div className="md:w-1/2 hidden md:block"></div>
        </div>

        {/* 100% Milestone - Right side */}
        <div className="flex flex-col md:flex-row relative">
          {/* Planet point on timeline */}
          <div className="absolute left-1/2 top-8 w-10 h-10 rounded-full bg-gradient-to-br from-[#FFD868] to-[#FF9C4D] transform -translate-x-1/2 hidden md:block shadow-[0_0_15px_rgba(255,216,104,0.5)] z-10">
            {/* Solar flares */}
            <div className="absolute -top-1 left-1/2 w-8 h-1 bg-[#FFD868]/40 rounded-full -translate-x-1/2 blur-[2px]"></div>
            <div className="absolute -bottom-1 left-1/2 w-8 h-1 bg-[#FFD868]/40 rounded-full -translate-x-1/2 blur-[2px]"></div>
            <div className="absolute top-1/2 -left-1 w-1 h-8 bg-[#FFD868]/40 rounded-full -translate-y-1/2 blur-[2px]"></div>
            <div className="absolute top-1/2 -right-1 w-1 h-8 bg-[#FFD868]/40 rounded-full -translate-y-1/2 blur-[2px]"></div>
          </div>
          
          {/* Connector line for desktop - to right */}
          <div className="absolute left-1/2 top-8 h-0.5 w-12 bg-[#FFD868] hidden md:block blur-[1px]"></div>
          
          {/* Empty div for the left side */}
          <div className="md:w-1/2 hidden md:block"></div>
          
          {/* Content positioned to the right of the line */}
          <div className="md:w-1/2 md:pl-12">
            <div className="w-full bg-[#0F1527] rounded-xl border border-[#2A3654] p-6 transition-all hover:border-[#FFD868]/50 hover:shadow-[0_0_20px_rgba(255,216,104,0.15)] backdrop-blur-sm bg-opacity-60">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-[120px] flex-shrink-0">
                  <div className="text-4xl font-semibold bg-gradient-to-r from-[#FFD868] to-[#FF9C4D] bg-clip-text text-transparent">
                    100%
                  </div>
                </div>
                <div>
                  <h4 className="text-2xl font-medium text-white mb-3">
                    Cosmic Dominance
                  </h4>
                  <ul className="space-y-2 text-[#B4C5FF]">
                    <li className="flex items-start">
                      <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#FFD868] mt-2 mr-2 shadow-[0_0_5px_rgba(255,216,104,0.7)]"></span>
                      <span>Achieve mass adoption and ecosystem maturity</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#FFD868] mt-2 mr-2 shadow-[0_0_5px_rgba(255,216,104,0.7)]"></span>
                      <span>Continuously innovate and refine features to maintain a competitive edge</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#FFD868] mt-2 mr-2 shadow-[0_0_5px_rgba(255,216,104,0.7)]"></span>
                      <span>Solidify the project as an industry leader</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoadmapTimeline;

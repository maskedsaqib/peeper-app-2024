import React from "react";
import RoadmapTimeline from "./RoadmapTimeline";
import SpaceButton from "./SpaceButton";

const RoadmapSection: React.FC = () => {
  return (
    <section id="roadmap" className="w-full mt-10">
      <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#7EEBFF] to-[#80FFDB] bg-clip-text text-transparent text-center">Roadmap</h2>
      <p className="text-white text-opacity-60 text-center mb-8">
        Our journey to transform the crypto notification landscape
      </p>
      <RoadmapTimeline />
      
      {/* Call to action */}
      <div className="flex justify-center mt-16">
        <SpaceButton 
          text="Join Our Mission" 
          onClick={() => console.log("Join Our Mission clicked")} 
        />
      </div>
    </section>
  );
};

export default RoadmapSection;

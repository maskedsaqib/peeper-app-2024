import React from "react";
import FeatureCard from "./FeatureCard";

const FeaturesSection: React.FC = () => {
  return (
    <section className="w-full mt-24">
      <div className="flex gap-10 max-md:flex-wrap max-md:justify-center">
        <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-2 max-md:grid-cols-1">
          <FeatureCard
            title="Fair Launch"
            description="From concept to deployment, we create high-performance dApps tailored for finance and gaming."
          />
          <FeatureCard
            title="1 Billion supply"
            description="Seamless, secure crypto wallet solutions for storing, sending, and managing digital assets."
            isSpecial={true}
          />
          <FeatureCard
            title="Dex Pumpfun"
            description="Launch your own next-gen marketplace for NFTs with end-to-end support, from minting to trading."
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

import React from "react";

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="w-full mt-10">
      <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#A389FF] to-[#D78FFF] bg-clip-text text-transparent text-center">About Us</h2>
      <p className="text-white text-opacity-60 text-center">
        Our Telegram bot delivers instant notifications when notable Twitter personalities mention specific tokens,
        providing you with early insights for potential market movements.
      </p>
    </section>
  );
};

export default AboutSection;

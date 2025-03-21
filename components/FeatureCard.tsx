import React from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  isSpecial?: boolean;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  isSpecial = false,
}) => {
  return (
    <article
      className={`
      relative rounded-lg border border-white/30
      bg-gradient-to-b from-white/5 to-transparent
      p-8 flex flex-col items-center h-full
      ${isSpecial ? "shadow-lg shadow-white/10 border-white/50 ring-1 ring-white/20 z-10 transform translate-y-[-10px]" : ""}
    `}
    >
      <div className="w-[82px] h-[82px] rounded-full bg-gradient-to-b from-white to-white/40 mb-6"></div>
      <h3 className="text-[28px] font-light text-white mb-4 text-center">
        {title}
      </h3>
      <p className="text-[16px] text-white/63 text-center">{description}</p>
    </article>
  );
};

export default FeatureCard;

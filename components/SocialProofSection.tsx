import React from "react";
import TweetCard from "./TweetCard";

const SocialProofSection: React.FC = () => {
  return (
    <section className="w-full mt-24">
      <div className="flex gap-10 max-md:flex-wrap max-md:justify-center">
        <TweetCard
          username="@kanyewest"
          content="This Peeper bot getting my tweets before I even post them 😂"
        />
        <TweetCard
          username="@elonmusk"
          content="Just heard about peeper.. might need to check this out. Zero delay notificaiton? 🔥"
        />
      </div>
    </section>
  );
};

export default SocialProofSection;

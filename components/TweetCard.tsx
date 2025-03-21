import React from "react";

interface TweetCardProps {
  username: string;
  content: string;
}

const TweetCard: React.FC<TweetCardProps> = ({ username, content }) => {
  // Split content by spaces to handle multi-line tweets
  const contentLines = content.split(/(?<=\s)/g);
  const firstLine = contentLines.slice(0, contentLines.length / 2).join("");
  const secondLine = contentLines.slice(contentLines.length / 2).join("");

  return (
    <div className="relative">
      <div className="w-[545px] h-[87px] max-w-full border border-white rounded-[26px] p-5 flex items-center">
        <div className="w-[56px] h-[56px] rounded-full bg-gradient-to-b from-white to-white/40 mr-5"></div>
        <div className="flex flex-col">
          <span className="text-[15px] font-light text-white">{username}</span>
          <p className="text-[16px] font-semibold text-white">
            {firstLine}
            <br />
            {secondLine}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TweetCard;

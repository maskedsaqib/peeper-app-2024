import React from "react";

const ArrowIcon: React.FC = () => {
  return (
    <div>
      <svg
        width="25"
        height="25"
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-[24px] h-[24px]"
      >
        <mask
          id="mask0_9_94"
          style={{ maskType: "alpha" }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="25"
          height="25"
        >
          <rect
            x="0.380127"
            y="0.765625"
            width="24"
            height="24"
            fill="#D9D9D9"
          ></rect>
        </mask>
        <g mask="url(#mask0_9_94)">
          <path
            d="M14.3801 18.7656L12.9801 17.3156L16.5301 13.7656H4.38013V11.7656H16.5301L12.9801 8.21563L14.3801 6.76562L20.3801 12.7656L14.3801 18.7656Z"
            fill="white"
            fillOpacity="0.7"
          ></path>
        </g>
      </svg>
    </div>
  );
};

export default ArrowIcon;

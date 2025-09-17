import React from "react";
import ArrowIcon from "./ArrowIcon";

const ContractAddressSection: React.FC = () => {
  return (
    <section className="w-full flex justify-center md:justify-end mt-12 md:mt-16">
      <div className="flex gap-4 items-center p-4 rounded-2xl border bg-[linear-gradient(180deg,rgba(255,255,255,0.05)_0%,rgba(153,153,153,0.00)_100%)] border-white border-opacity-30 max-w-[320px] hover:border-opacity-50 transition-all cursor-pointer">
        <div className="flex flex-col">
          <h3 className="text-xl font-semibold">snoopy.mom</h3>
          <p className="mt-2 text-xl font-light">Contract Address</p>
        </div>
        <ArrowIcon />
      </div>
    </section>
  );
};

export default ContractAddressSection;

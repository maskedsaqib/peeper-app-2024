import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full mt-20 py-10 border-t border-[#2A3654]/30">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 w-full">
        <div>
          <div className="text-2xl font-semibold bg-gradient-to-r from-[#7EEBFF] to-[#80FFDB] bg-clip-text text-transparent">peeper</div>
          <p className="text-sm text-white/60 mt-2">
            Real-time crypto influencer tracking
          </p>
        </div>
        
        <div className="flex flex-col items-center md:items-end">
          <div className="flex gap-6 mb-4">
            <a href="#" className="text-white/60 hover:text-[#7EEBFF] transition-colors">
              Twitter
            </a>
            <a href="#" className="text-white/60 hover:text-[#A389FF] transition-colors">
              Telegram
            </a>
            <a href="#" className="text-white/60 hover:text-[#FFD868] transition-colors">
              Jupiter Link
            </a>
          </div>
          <div className="text-white text-opacity-60 text-sm text-center mt-8">
            © {new Date().getFullYear()} Peeper. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
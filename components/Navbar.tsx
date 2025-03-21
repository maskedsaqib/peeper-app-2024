import React from "react";
import Logo from "./Logo";

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center py-8">
      <a
        href="#roadmap"
        className="text-base font-medium text-white text-opacity-50 hover:text-opacity-100 transition-opacity"
        aria-label="View roadmap"
        tabIndex={0}
      >
        roadmap
      </a>
      <Logo />
      <a
        href="#about"
        className="text-base font-medium text-white text-opacity-50 hover:text-opacity-100 transition-opacity"
        aria-label="About us"
        tabIndex={0}
      >
        about us
      </a>
    </nav>
  );
};

export default Navbar;

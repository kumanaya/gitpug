import React from "react";

import Logo from "../assets/images/logo.svg";

const Header: React.FC = () => {
  return (
    <div className="header bg-customheaderbg h-16 flex items-center justify-between p-4">
      <div className="flex items-center">
        <img
          src={Logo}
          alt="Profile Avatar"
          className="w-8 h-8 rounded-full mr-2"
        />
        <span className="text-white">kumanaya</span>
      </div>
    </div>
  );
};

export default Header;

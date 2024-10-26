import React from "react";
import HeaderLogo from "./Logo";

const Header = () => {
  return (
    <header>
      <div className="container flex items-center justify-between">
        <HeaderLogo />
      </div>
    </header>
  );
};

export default Header;

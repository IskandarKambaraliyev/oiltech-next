import React from "react";
import HeaderLogo from "./Logo";
import LangSwitcher from "./LangSwitcher";

const Header = () => {
  return (
    <header className="h-20 md:h-[6.5rem] flex-center z-header">
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-8">
          <HeaderLogo className="w-[6rem] md:w-[9rem] h-auto" />

          <div className="flex items-center gap-4">
            <LangSwitcher />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

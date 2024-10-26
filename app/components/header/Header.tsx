import React from "react";
import HeaderLogo from "./Logo";
import CustomButton from "../custom/buttons/Button";

const Header = () => {
  return (
    <header>
      <div className="container flex items-center justify-between">
        <HeaderLogo />

        <CustomButton color="green" variant="outlined">
          Hello
        </CustomButton>
      </div>
    </header>
  );
};

export default Header;

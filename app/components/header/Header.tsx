import React from "react";
import HeaderLogo from "./Logo";
import CustomButton from "../custom/buttons/Button";
import CustomCircleButton from "../custom/buttons/Circle";

const Header = () => {
  return (
    <header>
      <div className="container flex items-center justify-between">
        <HeaderLogo />

        <CustomButton color="white" variant="solid">
          Hello
        </CustomButton>

        <CustomCircleButton>rus</CustomCircleButton>
      </div>
    </header>
  );
};

export default Header;

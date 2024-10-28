import React from "react";
import { ReturnIcon } from "../Icons";

type Props = {
  children: React.ReactNode;
};

const CustomSectionTitle = ({ children }: Props) => {
  return (
    <h3 className="flex items-center gap-2 text-base md:text-2xl font-semibold text-green-main">
      <span>{children}</span>

      <ReturnIcon />
    </h3>
  );
};

export default CustomSectionTitle;

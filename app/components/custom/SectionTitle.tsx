import React from "react";
import { ReturnIcon } from "../Icons";
import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const CustomSectionTitle = ({ className, children }: Props) => {
  return (
    <h3
      className={cn(
        "flex items-center gap-2 text-base md:text-2xl font-semibold text-green-main",
        className
      )}
    >
      <span>{children}</span>

      <ReturnIcon />
    </h3>
  );
};

export default CustomSectionTitle;

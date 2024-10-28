import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  className?: string;
  children: React.ReactNode;
};

const CustomTitle = ({ className, children }: Props) => {
  return (
    <h2
      className={cn(
        "text-[2.5rem] md:text-[3rem] xl:text-[3.75rem] font-medium line-clamp-3 leading-tight",
        className
      )}
    >
      {children}
    </h2>
  );
};

export default CustomTitle;

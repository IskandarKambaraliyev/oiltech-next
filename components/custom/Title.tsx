import { ReactNode } from "react";

import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  children: ReactNode;
};

const CustomTitle = ({ className, children }: Props) => {
  return (
    <h2
      className={cn(
        "text-[1.5rem] md:text-[3rem] xl:text-[3.75rem] font-medium line-clamp-4 leading-tight",
        className
      )}
    >
      {children}
    </h2>
  );
};

export default CustomTitle;

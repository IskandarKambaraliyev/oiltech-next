import React from "react";

type Props = {
  className?: string;
  children: React.ReactNode;
};

const CustomTitle = ({ className, children }: Props) => {
  return (
    <h2
      className={`${
        className ? className : ""
      } text-[2.5rem] md:text-[3rem] xl:text-[3.75rem] font-medium line-clamp-3 leading-tight`}
    >
      {children}
    </h2>
  );
};

export default CustomTitle;

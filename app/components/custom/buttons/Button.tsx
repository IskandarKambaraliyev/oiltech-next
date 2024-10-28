"use client";

import { ButtonHTMLAttributes, FC, ReactNode } from "react";
import { Link } from "@/i18n/routing";
import classNames from "classnames";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  onClick?: () => void;
  variant?: "solid" | "outlined";
  color?: "green" | "blue" | "white";
  disabled?: boolean;
  href?: string;
};

const CustomButton: FC<ButtonProps> = ({
  children,
  onClick,
  variant = "solid",
  color = "green",
  disabled,
  href,
  ...props
}) => {
  if (href) {
    return (
      <Link
        href={href}
        className={`${getClass(variant, color)}`}
        onClick={onClick}
      >
        {children}
      </Link>
    );
  }
  return (
    <button
      className={`${getClass(variant, color)}`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default CustomButton;

function getClass(
  variant: "solid" | "outlined",
  color: "green" | "blue" | "white"
) {
  const baseClasses =
    "py-4 px-10 active:opacity-90 transition-all flex-center gap-2 max-sm:w-full text-center";

  return classNames(baseClasses, {
    "bg-green-main text-white-main hover:shadow-btn-green":
      variant === "solid" && color === "green",
    "bg-blue-main text-white-main hover:shadow-btn-blue":
      variant === "solid" && color === "blue",
    "bg-white-main text-blue-main hover:shadow-btn-white":
      variant === "solid" && color === "white",

    "bg-black/10 border border-green-main text-green-main hover:bg-green-main hover:text-white-main hover:shadow-btn-green backdrop-blur":
      variant === "outlined" && color === "green",

    "bg-black/10 border border-blue-main text-blue-main hover:bg-blue-main hover:text-white-main hover:shadow-btn-blue backdrop-blur":
      variant === "outlined" && color === "blue",

    "bg-black/10 border border-white-main text-white-main hover:bg-white-main hover:text-blue-main hover:shadow-btn-white backdrop-blur":
      variant === "outlined" && color === "white",
  });
}

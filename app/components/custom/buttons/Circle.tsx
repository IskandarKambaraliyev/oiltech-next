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

const CustomCircleButton: FC<ButtonProps> = ({
  children,
  onClick,
  variant = "outlined",
  color = "white",
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

export default CustomCircleButton;

function getClass(
  variant: "solid" | "outlined",
  color: "green" | "blue" | "white"
) {
  const baseClasses =
    "size-14 flex-center overflow-hidden rounded-full active:opacity-90 text-sm transition-all";

  return classNames(baseClasses, {
    "bg-green-main text-white-main ": variant === "solid" && color === "green",
    "bg-blue-main text-white-main": variant === "solid" && color === "blue",
    "bg-white-main text-blue-main": variant === "solid" && color === "white",

    "border border-green-main text-green-main hover:bg-green-main hover:text-white-main ":
      variant === "outlined" && color === "green",

    "border border-blue-main text-blue-main hover:bg-blue-main hover:text-white-main":
      variant === "outlined" && color === "blue",

    "border border-white-main text-white-main hover:bg-white-main hover:text-blue-main":
      variant === "outlined" && color === "white",
  });
}

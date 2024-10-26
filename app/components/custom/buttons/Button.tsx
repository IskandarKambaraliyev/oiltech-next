"use client";
import { ButtonHTMLAttributes, FC, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  onClick?: () => void;
  variant?: "solid" | "outlined";
  isLoading?: boolean;
}

const CustomButton: FC<ButtonProps> = ({
  children,
  onClick,
  variant = "solid",
  isLoading = false,
  disabled,
  ...props
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled || isLoading}
      className={`button ${variant} ${isLoading ? "loading" : ""}`}
      {...props}
    >
      {isLoading ? "Loading..." : children}
    </button>
  );
};

export default CustomButton;

"use client";
import { Link } from "@/i18n/routing";
import { ButtonHTMLAttributes, FC, ReactNode } from "react";
import styles from "./styles.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  onClick?: () => void;
  variant?: "solid" | "outlined";
  color?: "green" | "blue" | "white";
  disabled?: boolean;
  href?: string;
}

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
        className={`${styles.custom_button}`}
        data-color={color}
        data-variant={variant}
        onClick={onClick}
      >
        {children}
      </Link>
    );
  }
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${styles.custom_button}`}
      data-color={color}
      data-variant={variant}
      {...props}
    >
      {children}
    </button>
  );
};

export default CustomButton;

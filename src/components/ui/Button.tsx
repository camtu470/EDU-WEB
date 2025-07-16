import React from "react";
import classNames from "classnames";

export type ButtonVariant = "primary" | "secondary" | "basic";
export type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = "primary",
  size = "md",
  disabled = false,
  className = "",
  type = "button",
}) => {
  const base = " transition duration-200";

  const variantStyles: Record<ButtonVariant, string> = {
    primary:
      "bg-black text-white font-bold rounded-full transform hover:-translate-y-1 transition duration-400",
    secondary:
      "bg-[#096B0E] hover:bg-[#09530C] text-white rounded-lg font-bold transform hover:-translate-y-1 transition duration-400",

    basic:
      " rounded-3xl font-medium border border-gray-400 text-gray-800 hover:bg-gray-100",
  };

  const sizeStyles: Record<ButtonSize, string> = {
    sm: "px-4 py-2 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classNames(
        base,
        variantStyles[variant],
        sizeStyles[size],
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
    >
      {children}
    </button>
  );
};

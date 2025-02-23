import React from "react";
import clsx from "clsx";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  light?: boolean; // New optional prop
  submit?: boolean;
  inverted?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, className, onClick, light, submit, inverted }) => {
  return (
    <button
      onClick={onClick}
      type={submit ? 'submit' : "button"}
      className={clsx(
        "relative flex items-center justify-center px-5 py-2.5 border rounded-lg font-inter font-medium text-[16px] leading-[20px] transition",
        // Default Dark Theme Styles
        !light && [
          "border-gray-600 bg-gradient-to-b from-transparent to-gray-700/30 bg-gray-500/10",
          "shadow-[inset_0px_0px_12px_rgba(255,255,255,0.24)] text-white",
          "hover:bg-white hover:border-white hover:text-black"
        ],
        // Light Theme Styles (for white backgrounds)
        light && [
          "border-gray-400 text-gray-800",
          "hover:bg-[#1a1a1a] hover:text-white"
        ],
        // Inverted Styles (opposite of light)
        inverted && [
          "text-white bg-gray-900",
          "hover:bg-transparent hover:text-gray-900 hover:border-gray-900"
        ],
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;

import React from "react";
import clsx from "clsx";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, className, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "relative flex items-center justify-center px-5 py-2.5 border border-gray-600 rounded-lg",
        "bg-gradient-to-b from-transparent to-gray-700/30 bg-gray-500/10",
        "shadow-[inset_0px_0px_12px_rgba(255,255,255,0.24)] text-white",
        "font-inter font-medium text-[16px] leading-[20px]",
        "transition hover:bg-white hover:border-white hover:text-black",
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
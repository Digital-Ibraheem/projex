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
        "relative flex items-center justify-center px-5 py-2.5 border border-[#003F8C] rounded-lg",
        "bg-gradient-to-b from-transparent to-blue-900/30 bg-blue-500/10",
        "shadow-[inset_0px_0px_12px_rgba(191,151,255,0.24)] text-[#F4F0FF]",
        "font-inter font-medium text-[16px] leading-[20px]",
        "transition hover:bg-blue-600 hover:shadow-lg",
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;

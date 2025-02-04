'use client';

import { useState } from "react";
import clsx from "clsx";

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="relative z-50 p-0 border-none bg-transparent flex md:hidden"
    >
      <svg
        width="50"
        height="70"
        viewBox="0 0 100 100"
        className={clsx("transition-all", { "opened": isOpen })}
      >
        <path
          className="line line1 stroke-gray-200 stroke-[6] transition-all duration-600 ease-in-out"
          d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
          style={{
            strokeDasharray: isOpen ? "90 207" : "60 207",
            strokeDashoffset: isOpen ? "-134" : "0",
          }}
        />
        <path
          className="line line2 stroke-gray-200 stroke-[6] transition-all duration-600 ease-in-out"
          d="M 20,50 H 80"
          style={{
            strokeDasharray: isOpen ? "1 60" : "60 60",
            strokeDashoffset: isOpen ? "-30" : "0",
          }}
        />
        <path
          className="line line3 stroke-gray-200 stroke-[6] transition-all duration-600 ease-in-out"
          d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
          style={{
            strokeDasharray: isOpen ? "90 207" : "60 207",
            strokeDashoffset: isOpen ? "-134" : "0",
          }}
        />
      </svg>
    </button>
  );
}

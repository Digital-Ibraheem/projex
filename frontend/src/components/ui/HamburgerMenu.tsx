'use client';

import { useState } from "react";
import styles from "./HamburgerMenu.module.css";

interface HamburgerMenuProps {
  onClick?: () => void;
}

export default function HamburgerMenu({ onClick }: HamburgerMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
    onClick && onClick();
  };

  return (
    <button
      className={`${styles.menu} ${isOpen ? styles.open : ""}`}
      onClick={handleClick}
      aria-label="Main Menu"
      aria-expanded={isOpen}
    >
      <div className={styles.icon}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </button>
  );
}

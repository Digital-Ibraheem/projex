'use client';

import { useState } from "react";
import styles from "./HamburgerMenu.module.css";

interface HamburgerMenuProps {
  onClick: () => void;
  isSidebarOpen?: boolean;
}

export default function HamburgerMenu({ onClick, isSidebarOpen }: HamburgerMenuProps) {

  return (
    <button
      className={`${styles.menu} ${isSidebarOpen ? styles.open : ""}`}
      onClick={onClick}
      aria-label="Main Menu"
      aria-expanded={isSidebarOpen}
    >
      <div className={styles.icon}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </button>
  );
}

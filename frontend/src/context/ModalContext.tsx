// src/context/ModalContext.tsx
"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type ModalType = "login" | "signup" | null;

interface ModalContextType {
  activeModal: ModalType;
  openModal: (modal: "login" | "signup") => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [activeModal, setActiveModal] = useState<ModalType>(null);

  const openModal = (modal: "login" | "signup") => {
    setActiveModal(modal);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  return (
    <ModalContext.Provider value={{ activeModal, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};

// Custom hook for using ModalContext
export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};
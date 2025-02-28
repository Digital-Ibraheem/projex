"use client";

import { createContext, useContext, useState, useEffect } from "react";

interface User {
  id: number;
  name: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  isLoggedIn: boolean;
  login: (userData: User) => void;
  logout: () => void;
  openLoginModal: (message?: string) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loginMessage, setLoginMessage] = useState<string | null>(null);

  // Persist session using local storage
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  const login = (userData: User) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData)); // Store in local storage
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  // Function to trigger login modal with an optional message
  const openLoginModal = (message?: string) => {
    setLoginMessage(message || "Please log in to continue.");
    // You would typically trigger a modal state update here
  };

  return (
    <AuthContext.Provider value={{ user, isLoggedIn: !!user, login, logout, openLoginModal }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook for using AuthContext
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};

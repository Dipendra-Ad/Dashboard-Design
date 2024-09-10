import React, { createContext, useContext, useState, useEffect } from "react";
import { AuthContextType, AuthProviderProps } from "../types";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const storedAuth = localStorage.getItem("isAuthenticated");
    const storedToken = localStorage.getItem("token");

    setIsAuthenticated(storedAuth === "true");
    setToken(storedToken);
  }, []);

  const login = (newToken: string) => {
    setIsAuthenticated(true);
    setToken(newToken);
    localStorage.setItem("isAuthenticated", "true");
    localStorage.setItem("token", newToken);
  };

  const logout = () => {
    setIsAuthenticated(false);
    setToken(null);
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (context === undefined) {
//     throw new Error("useAuth must be used within an AuthProvider");
//   }
//   return context;
// };

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context !== undefined) {
    return context;
  }
  throw new Error("useAuth must be used within an AuthProvider");
};

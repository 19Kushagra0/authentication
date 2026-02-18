"use client";
import { createContext, useState } from "react";
import { useContext } from "react";

// created a box
const authContext = createContext();

// filling the box
export function BoxProvider({ children }) {
  const [isAuth, setIsAuth] = useState(false);
  const login = () => {
    setIsAuth(true);
  };
  const logout = () => {
    setIsAuth(false);
  };
  return (
    <authContext.Provider value={{ login, logout, isAuth }}>
      {children}
    </authContext.Provider>
  );
}

// export the box
export function useBox() {
  return useContext(authContext);
}

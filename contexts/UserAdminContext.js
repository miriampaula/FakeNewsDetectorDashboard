"use client"
import { createContext, useContext, useState } from "react";

const UserAdminContext = createContext();

export const UserAdminProvider = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(false);

  const toggleUserAdmin = () => {
    setIsAdmin((prevIsAdmin) => !prevIsAdmin);
  };

  return (
    <UserAdminContext.Provider value={{ isAdmin, toggleUserAdmin }}>
      {children}
    </UserAdminContext.Provider>
  );
};

export const useUserAdmin = () => useContext(UserAdminContext);

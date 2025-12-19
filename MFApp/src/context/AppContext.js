import { createContext, useEffect, useState } from "react";
import React from "react";
export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const userD = sessionStorage.getItem("USER");
    if (userD) {
      setUser(JSON.parse(userD));
    }
  }, []);

  const login = (userData) => {
    setLoading(true);
    setTimeout(() => {
      setUser(userData);
      sessionStorage.setItem("USER", JSON.stringify(userData));
      setLoading(false);
    }, 1000);
  };

  const logout = () => {
    setUser(null);
    sessionStorage.clear();
  };

  const value = {
    user,
    loading,

    // functions
    login,
    logout,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppProvider;

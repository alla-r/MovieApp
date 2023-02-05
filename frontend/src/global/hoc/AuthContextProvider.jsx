import React, { createContext, useContext } from "react";
import useAuth from "../hooks/useAuth";

const AuthContext = createContext();

const useAuthContext = () => {
  const user = useContext(AuthContext);
  if (user === undefined) {
    throw new Error("useAuthContext can only be used inside AuthProvider");
  }

  return user;
}

const AuthProvider = ({ children }) => {
  const auth = useAuth()

  return (
    <AuthContext.Provider value={auth}>
      {children}
    </AuthContext.Provider>
  )
}

export {useAuthContext, AuthProvider};
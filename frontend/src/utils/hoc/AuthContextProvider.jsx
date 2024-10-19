import React, { createContext, useContext } from 'react';
import useAuth from '../../utils/hooks/useAuth';

const AuthContext = createContext();

const useAuthContext = () => {
  const user = useContext(AuthContext);
  if (user === undefined) {
    throw new Error('useAuthContext can only be used inside AuthProvider');
  }

  return user;
};

// eslint-disable-next-line react/prop-types
function AuthProvider({ children }) {
  const auth = useAuth();

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export { useAuthContext, AuthProvider };

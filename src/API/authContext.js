import { setDate } from 'date-fns';
import { useState, createContext, useContext } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [data, SetData] = useState(null);

  const login = () => {
    setDate(data);
  };

  const logout = () => {
    setDate(null);
  };

  return <AuthContext.Provider>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};

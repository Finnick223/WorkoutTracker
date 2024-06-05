import { useState, createContext, useEffect } from 'react';
import { getItemFromStorage } from '../utils/getItemFromStorage';

export const AuthContext = createContext({
  isLoggedIn: false,
});

export const AuthProvider = ({ children }: any) => {
  const token = getItemFromStorage('token');
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(!!token);

  useEffect(() => {
    setIsLoggedIn(!!token);
  }, [token]);

  return (
    <AuthContext.Provider value={{ isLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};
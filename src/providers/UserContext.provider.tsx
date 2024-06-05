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


//! Todo isloggedin is always false in routes.routes.tsx file i guess i need reactquery and isloading prop otherwise idk its fucked up
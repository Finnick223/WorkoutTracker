// import { useState, createContext  } from 'react';

// export const getItemFromStorage = (key: any) => {
//   const item = window.localStorage.getItem(key);
//   return item ? JSON.parse(item) : null;
// };

// const AuthContext = createContext({
//   isLoggedIn: false,
//   login: () => {},
//   logout: () => {},
// });

// export const AuthProvider = (props: any) => {
//   const user = getItemFromStorage('user');
//   const [isloggedIn, setIsLoggedIn] = useState(!!(user && user.email));

//   const login = () => setIsLoggedIn(true);
//   const logout = () => setIsLoggedIn(false);

//   return (
//     <AuthContext.Provider value={{ isloggedIn, login, logout }} {...props} />
//   );
// };

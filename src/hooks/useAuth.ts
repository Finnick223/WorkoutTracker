import { useAuth } from 'src/providers/UserContext.provider';
import { jwtDecode } from 'jwt-decode';
import { useEffect, useMemo } from 'react';

const validateToken = (token: string | null): boolean => {
  if (!token) return false;

  try {
    const decoded: { exp: number } = jwtDecode(token);
    const currentTime = Date.now() / 1000;
    return decoded.exp > currentTime;
  } catch (error) {
    console.error('Invalid token:', error);
    return false;
  }
};

const useAuthStatus = () => {
  const authContext = useAuth();

  if (!authContext) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  const { token, isLoading, login, logout } = authContext;

  const isLoggedIn = !!token && validateToken(token);
  useEffect(() => {
    if (!isLoggedIn) {
      logout();
    }
  }, [isLoggedIn, logout]);

  return useMemo(
    () => ({
      isLoggedIn,
      isLoading,
      token,
      login,
      logout,
    }),
    [isLoggedIn, isLoading, token, login, logout],
  );
};

export default useAuthStatus;

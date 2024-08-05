import { useQueryClient } from '@tanstack/react-query';
import { useAuth } from 'src/providers/UserContext.provider';

const useAuthStatus = () => {
  const authContext = useAuth();

  if (!authContext) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  const { token, isLoading, login, logout } = authContext;
  const queryClient = useQueryClient();

  const authToken = queryClient.getQueryData(['authToken']);
  const isLoggedIn = !!(token || authToken);

  return {
    isLoggedIn,
    isLoading,
    token,
    login,
    logout,
  };
};

export default useAuthStatus;

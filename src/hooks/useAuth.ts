import { useQueryClient } from '@tanstack/react-query';
import { useAuth } from 'src/providers/UserContext.provider';

const useAuthStatus = () => {
  const { token, login, logout }: any = useAuth();
  const queryClient = useQueryClient();

  const authToken = queryClient.getQueryData(['authToken']);
  const isLoggedIn = !!(token || authToken);

  return {
    isLoggedIn,
    token,
    login,
    logout,
  };
};

export default useAuthStatus;

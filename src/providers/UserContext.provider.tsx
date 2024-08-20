import { createContext, useContext } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useCookies } from 'react-cookie';
import {
  AuthContextType,
  AuthProviderProps,
} from 'src/interfaces/auth.interfaces';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const queryClient = useQueryClient();
  const [cookies, setCookie, removeCookie] = useCookies(['token']);

  const fetchToken = () => {
    return cookies.token || null;
  };

  const { data: token, isLoading } = useQuery({
    queryKey: ['authToken'],
    queryFn: fetchToken,
    staleTime: Infinity,
    gcTime: 3600000,
  });

  const login = useMutation<string, Error, string>({
    mutationFn: async (newToken: string) => {
      setCookie('token', newToken, { maxAge: 3600, sameSite: 'strict' });
      return newToken;
    },
    onSuccess: (newToken) => {
      queryClient.setQueryData(['authToken'], newToken);
    },
  });

  const logout = useMutation({
    mutationFn: async () => {
      removeCookie('token');
      return null;
    },
    onSuccess: () => {
      queryClient.setQueryData(['authToken'], null);
    },
  });

  return (
    <AuthContext.Provider
      value={{ token, isLoading, login: login, logout: logout.mutate }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

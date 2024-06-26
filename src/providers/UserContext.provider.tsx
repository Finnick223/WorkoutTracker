import { createContext, useContext } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useCookies } from 'react-cookie';
import { AuthContextType, AuthProviderProps } from '../interfaces/Interfaces';

const AuthContext = createContext<AuthContextType>({
  token: null,
  login: () => {},
  logout: () => {},
});

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const queryClient = useQueryClient();
  const [cookies, setCookie, removeCookie] = useCookies(['token']);

  const fetchToken = () => {
    return cookies.token || null;
  };

  const { data: token } = useQuery({
    queryKey: ['authToken'],
    queryFn: fetchToken,
    initialData: null,
  });

  const login = useMutation<string, Error, string>({
    mutationFn: async (newToken: string) => {
      setCookie('token', newToken, { maxAge: 3600, sameSite: true });
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
      value={{ token, login: login.mutate, logout: logout.mutate }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

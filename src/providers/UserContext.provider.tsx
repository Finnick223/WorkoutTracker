import { createContext, useContext, useEffect } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';


const AuthContext = createContext<{ token: string | null, login: (token: string) => void, logout: () => void }>({
  token: null,
  login: () => {},
  logout: () => {}
});

export const AuthProvider = ({ children }: any) => {
  const queryClient = useQueryClient();

  const fetchToken = () => {
    return localStorage.getItem('token');
  };

  const { data: token } = useQuery({queryKey: ['authToken'],queryFn: fetchToken, 
    initialData: null
  });

  useEffect(() => {
    if (token) {
      localStorage.setItem('token', token);
    } else {
      localStorage.removeItem('token');
    }
  }, [token]);

  const login = useMutation<string, Error, string>({
    mutationFn: async (newToken: string) => {
      localStorage.setItem('token', newToken);
      return newToken;
    },
    onSuccess: (newToken) => {
      queryClient.setQueryData(['authToken'], newToken);
    }
  });

  const logout = useMutation({
    mutationFn: async () => {
      localStorage.removeItem('token');
      return null;
    },
    onSuccess: () => {
      queryClient.setQueryData(['authToken'], null);
    }
  });

  return (
    <AuthContext.Provider value={{ token, login: login.mutate, logout: logout.mutate }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

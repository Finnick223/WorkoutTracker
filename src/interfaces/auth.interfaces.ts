import { ReactNode } from 'react';

export interface AuthContextType {
  token: string | null;
  login: (token: string) => void;
  logout: () => void;
}

export interface AuthProviderProps {
  children: ReactNode;
}

export type FormDataType = {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  repasswd: string;
  gender: 'FEMALE' | 'MALE' | 'OTHER';
  termsAndConditions: boolean;
};

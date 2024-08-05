import { UseMutationResult } from '@tanstack/react-query';
import { ReactNode } from 'react';

export interface AuthContextType {
  token: string;
  isLoading: boolean;
  login: UseMutationResult<string, Error, string, unknown>;
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

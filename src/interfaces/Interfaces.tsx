import { ReactNode } from "react";
import { Training, User } from "../client/src";

export type FormDataType = {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  repasswd: string;
  gender: 'FEMALE' | 'MALE' | 'OTHER';
  termsAndConditions: boolean;
};

export interface EditUserModalProps {
  id: string | undefined;
  open: boolean;
  handleEditClose: () => void;
  user: User | undefined;
}

export interface AuthContextType {
  token: string | null;
  login: (token: string) => void;
  logout: () => void;
}
export interface AuthProviderProps {
  children: ReactNode;
}

export interface TrainingExtended extends Training {
  page: number,
  size: number,
}
import { User } from "../client/src";

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
  open: boolean;
  handleEditClose: () => void;
  handleEditSave: () => void;
  user: User | undefined;
}
export type FormDataType = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  repasswd: string;
  gender: 'female' | 'male';
  termsAndConditions: boolean;
};

export interface ActionData {
  token?: string;
  error?: string;
}
import axios from 'axios';
import { User, UserApi } from 'src/client/src';
import { createInitOverrides } from '@utils/createInitOverrides';
import { FieldValues } from 'react-hook-form';

const userApi = new UserApi();

export const loginUser = async (
  creds: { email: string; password: string } | FieldValues,
) => {
  const response = await axios.post('http://188.68.247.208:8080/auth/signin', {
    email: creds.email,
    password: creds.password,
  });
  return response.data.token;
};

export const updateUser = async (token: string, user: User): Promise<User> => {
  const initOverrides = createInitOverrides(token);

  const requestParameters = {
    userCreate: user,
  };
  return userApi.updateCurrentUser(requestParameters, initOverrides);
};

export const getCurrentUser = async (token: string): Promise<User> => {
  const initOverrides = createInitOverrides(token);

  return await userApi.getCurrentUser(initOverrides);
};

export const requestPasswordReset = async (email: string) => {
  const response = await axios.post(
    'http://188.68.247.208:8080/request-password-reset',
    email,
  );
  return response.data.message;
};

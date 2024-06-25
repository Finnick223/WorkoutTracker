import axios from 'axios'
import { Training, TrainingApi, User, UserApi } from '../../client/src';


  const trainingApi = new TrainingApi();
  const userApi = new UserApi();

  export const loadTrainings = async (token: string, page: number, size: number): Promise<Training[]> => {
    const initOverrides = {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    };
    const requestParameters = {
      page: page,
      size: size,
    };
    return await trainingApi.getTrainings(requestParameters, initOverrides);
  };

  export const loginUser = async (creds: any) => {
    const response = await axios.post('http://188.68.247.208:8080/auth/signin', {
      email: creds.email,
      password: creds.password,
    });
    return response.data.token;
  };

  export const updateUser = async (token: string, user: User): Promise<User> => {
    const initOverrides = {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      }
    };
    const requestParameters = {
      user: user,
    }
    return userApi.updateCurrentUser(requestParameters,initOverrides)
  }

export const getCurrentUser = async (token: string): Promise<User> => {
  const initOverrides = {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  };
  return await userApi.getCurrentUser(initOverrides);
};

export const requestPasswordReset = async (email: string) => {
  const response = await axios.post('http://188.68.247.208:8080/request-password-reset', email);
  return response.data.message
}
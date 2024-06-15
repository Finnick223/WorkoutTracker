import axios from 'axios'
import { Training, TrainingApi } from '../../client/src';


  const api = new TrainingApi();

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
    return await api.getTrainings(requestParameters, initOverrides);
  };

  export const loginUser = async (creds: any) => {
    const response = await axios.post('http://188.68.247.208:8080/auth/signin', {
      email: creds.email,
      password: creds.password,
    });
    return response.data.token;
  };


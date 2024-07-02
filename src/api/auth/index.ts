import axios from 'axios'
import { Training, TrainingApi, User, UserApi, UserMeasurement, UserMeasurementApi } from '../../client/src';


  const trainingApi = new TrainingApi();
  const userApi = new UserApi();
  const MeasApi = new UserMeasurementApi();


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

  export const addTraining = async (token: string, training: Training) => {
    const initOverrides = {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    }
    const requestParameters = {
      trainingCreate: training
    }
    return await trainingApi.createTraining(requestParameters, initOverrides)
}
  export const deleteTraining = async ({token, trainingId}: {token: string, trainingId: string}) => {
    const initOverrides = {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    };
    const requestParameters = {
      trainingId: trainingId,
    }
    return await trainingApi.deleteTraining(requestParameters,initOverrides)
  }

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
      'Content-Type': 'application/json'
    }
  };
  const requestParameters = {
    userCreate: user,
  };
  return userApi.updateCurrentUser(requestParameters, initOverrides);
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

export const getUserMeasurement = async (token: string) => {
  const initOverrides = {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  };
  const requestParameters = {
    userMeasurementId: 'b7393418-f187-4ada-999e-2158a2e8ae02'
  }

  return await MeasApi.getUserMeasurementById(requestParameters, initOverrides)
}
export const updateUserMeasurement = async ({token, userMeasurement}: {token: string, userMeasurement: UserMeasurement}) => {
  const initOverrides = {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  };
  const requestParameters = {
    userMeasurementId: 'b7393418-f187-4ada-999e-2158a2e8ae02',
    userMeasurementCreate: userMeasurement
  }
  return await MeasApi.updateUserMeasurement(requestParameters, initOverrides)
}
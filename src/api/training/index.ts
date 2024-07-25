import { Training, TrainingApi } from 'src/client/src';
import { createInitOverrides } from '@utils/createInitOverrides';

const trainingApi = new TrainingApi();

export const loadTrainings = async (
  token: string,
  page: number,
  size: number,
): Promise<Training[]> => {
  const initOverrides = createInitOverrides(token);

  const requestParameters = {
    page: page,
    size: size,
  };
  return await trainingApi.getTrainings(requestParameters, initOverrides);
};

export const addTraining = async (token: string, training: Training) => {
  const initOverrides = createInitOverrides(token);

  const requestParameters = {
    trainingCreate: training,
  };
  return await trainingApi.createTraining(requestParameters, initOverrides);
};

export const updateTraining = async ({
  token,
  trainingId,
  name,
  description,
}: {
  token: string;
  trainingId: string;
  name: string;
  description: string;
}) => {
  const initOverrides = createInitOverrides(token);

  const requestParameters = {
    trainingId: trainingId,
    trainingCreate: { name, description },
  };
  return await trainingApi.updateTraining(requestParameters, initOverrides);
};

export const deleteTraining = async ({
  token,
  trainingId,
}: {
  token: string;
  trainingId: string;
}) => {
  const initOverrides = createInitOverrides(token);

  const requestParameters = {
    trainingId: trainingId,
  };
  return await trainingApi.deleteTraining(requestParameters, initOverrides);
};

export const getTrainingDetails = async (token: string, exerciseId: string) => {
  const initOverrides = createInitOverrides(token);

  const requestParameters = {
    trainingId: exerciseId,
  };
  return await trainingApi.getTrainingById(requestParameters, initOverrides);
};

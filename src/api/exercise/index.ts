import {
  CreateExerciseRequest,
  DeleteExerciseRequest,
  ExerciseApi,
  ExerciseCreate,
  UpdateExerciseRequest,
} from 'src/client/src';
import { createInitOverrides } from '@utils/createInitOverrides';

const ExerApi = new ExerciseApi();

export const addExercise = async ({
  token,
  exerciseCreate,
}: {
  token: string;
  exerciseCreate: ExerciseCreate;
}) => {
  const initOverrides = createInitOverrides(token);

  const requestParameters: CreateExerciseRequest = {
    exerciseCreate: exerciseCreate,
  };
  console.log('request add' + requestParameters);
  return await ExerApi.createExercise(requestParameters, initOverrides);
};

export const updateExercise = async ({
  token,
  exerciseCreate,
  exerciseId,
}: {
  token: string;
  exerciseCreate: ExerciseCreate;
  exerciseId: string;
}) => {
  const initOverrides = createInitOverrides(token);

  const requestParameters: UpdateExerciseRequest = {
    exerciseCreate: exerciseCreate,
    exerciseId: exerciseId,
  };
  console.log('request update' + requestParameters);
  return await ExerApi.updateExercise(requestParameters, initOverrides);
};

export const deleteExercise = async ({
  token,
  exerciseId,
}: {
  token: string;
  exerciseId: string;
}) => {
  const initOverrides = createInitOverrides(token);
  const requestParameters: DeleteExerciseRequest = {
    exerciseId: exerciseId,
  };

  return await ExerApi.deleteExercise(requestParameters, initOverrides);
};

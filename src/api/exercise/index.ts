import {
  Exercise,
  ExerciseApi,
  GetExercisesByNameRequest,
} from 'src/client/src';
import { createInitOverrides } from '@utils/createInitOverrides';

const exerciseApi = new ExerciseApi();

export const getExercisesByName = async (
  exerciseName: string,
  token: string,
): Promise<Exercise[]> => {
  const initOverrides = createInitOverrides(token);

  const requestParameters: GetExercisesByNameRequest = {
    exerciseName: exerciseName,
  };

  return await exerciseApi.getExercisesByName(requestParameters, initOverrides);
};

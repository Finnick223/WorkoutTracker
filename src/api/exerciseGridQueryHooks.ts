import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {
  deleteExercise,
  getTrainingDetails,
  updateExercises,
} from './training';
import toast from 'react-hot-toast';
import { ExerciseUpdate } from 'src/client/src';

export const useGetTrainingDetails = (token: string, trainingId: string) => {
  return useQuery({
    queryKey: ['exercises', trainingId],
    queryFn: () => getTrainingDetails(token, trainingId),
  });
};

export const useDeleteExercise = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({
      token,
      trainingId,
      exerciseId,
    }: {
      token: string;
      trainingId: string;
      exerciseId: string;
    }) => deleteExercise({ token, trainingId, exerciseId }),
    onSuccess: () => {
      queryClient.invalidateQueries();
      toast.success('Exercise deleted successfully');
    },
  });
};

export const usePatchExercise = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({
      token,
      exerciseUpdate,
      trainingId,
    }: {
      token: string;
      exerciseUpdate: Array<ExerciseUpdate>;
      trainingId: string;
    }) => updateExercises({ token, exerciseUpdate, trainingId }),
    onSuccess: () => {
      queryClient.invalidateQueries();
      toast.success('Exercise updated successfully');
    },
  });
};

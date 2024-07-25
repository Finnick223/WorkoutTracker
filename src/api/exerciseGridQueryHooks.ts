import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { addExercise, deleteExercise, updateExercise } from './exercise';
import { getTrainingDetails } from './training';
import toast from 'react-hot-toast';

export const useGetTrainingDetails = (token: string, trainingId: string) => {
  return useQuery({
    queryKey: ['exercises', trainingId],
    queryFn: () => getTrainingDetails(token, trainingId),
  });
};

export const useAddExercise = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({
      token,
      exerciseCreate,
    }: {
      token: string;
      exerciseCreate: any;
    }) => addExercise({ token, exerciseCreate }),
    onSuccess: () => {
      queryClient.invalidateQueries();
      toast.success('Exercise created successfully');
    },
  });
};

export const useDeleteExercise = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({
      token,
      exerciseId,
    }: {
      token: string;
      exerciseId: string;
    }) => deleteExercise({ token, exerciseId }),
    onSuccess: () => {
      queryClient.invalidateQueries();
      toast.success('Exercise deleted successfully');
    },
  });
};

export const useUpdateExercise = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({
      token,
      exerciseCreate,
      exerciseId,
    }: {
      token: string;
      exerciseCreate: any;
      exerciseId: string;
    }) => updateExercise({ token, exerciseCreate, exerciseId }),
    onSuccess: () => {
      queryClient.invalidateQueries();
      toast.success('Exercise updated successfully');
    },
  });
};

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getUserMeasurement, updateUserMeasurement } from 'src/api/auth';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import useAuthStatus from 'src/hooks/useAuth';
import { useEffect } from 'react';

export const useUserMeasurements = () => {
  const { token } = useAuthStatus();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { data, isSuccess, isError } = useQuery({
    queryKey: ['Measurements'],
    queryFn: () => getUserMeasurement(token),
  });

  useEffect(() => {
    if (isError) {
      navigate('/error');
    }
  }, [isError, navigate]);

  const { mutate } = useMutation({
    mutationFn: updateUserMeasurement,
    onSuccess: (data) => {
      queryClient.setQueryData(['Measurements'], data);
      toast.success('Measurements updated successfully');
    },
    onError: (error) => {
      toast.error('Error: ' + error);
    },
  });

  return { data, isSuccess, mutate, token };
};

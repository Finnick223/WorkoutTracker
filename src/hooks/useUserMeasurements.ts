import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getUserMeasurement, addUserMeasurement } from 'src/api/userPage';
import toast from 'react-hot-toast';
import useAuthStatus from 'src/hooks/useAuth';
import { useEffect } from 'react';
import { useModal } from 'src/components/modals/Error.modal';

export const useUserMeasurements = () => {
  const { token } = useAuthStatus();
  const { openModal, ErrorModalComponent } = useModal();
  const queryClient = useQueryClient();

  const { data, isSuccess, isError } = useQuery({
    queryKey: ['Measurements'],
    queryFn: () => getUserMeasurement(token),
    retry: 0,
  });

  useEffect(() => {
    if (isError) {
      openModal();
    }
  }, [isError, openModal]);

  const { mutate } = useMutation({
    mutationFn: addUserMeasurement,
    onSuccess: (data) => {
      queryClient.setQueryData(['Measurements'], data);
      toast.success('Measurement added successfully');
    },
    onError: (error) => {
      toast.error('Error: ' + error);
    },
  });

  return { data, isSuccess, mutate, token, ErrorModalComponent };
};

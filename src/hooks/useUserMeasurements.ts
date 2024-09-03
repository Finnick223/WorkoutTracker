import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { addUserMeasurement, getAllUserMeasurements } from 'src/api/userPage';
import toast from 'react-hot-toast';
import useAuthStatus from 'src/hooks/useAuth';
import { useEffect } from 'react';
import { useModal } from 'src/components/modals/Error.modal';

export const useUserMeasurements = () => {
  const { token } = useAuthStatus();
  const { openModal, ErrorModalComponent } = useModal();
  const queryClient = useQueryClient();

  const { data, isSuccess, isLoading, isError, status, error } = useQuery({
    queryKey: ['Measurements', 'firstPage'],
    queryFn: () => getAllUserMeasurements({ token, pageParam: 0 }),
  });

  useEffect(() => {
    if (isError) {
      openModal();
    }
  }, [isError, openModal]);

  const { mutate } = useMutation({
    mutationFn: addUserMeasurement,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['Measurements'],
        refetchType: 'all',
      });
      toast.success('Measurement added successfully');
    },
    onError: (error) => {
      toast.error('Error: ' + error);
    },
  });

  return {
    data,
    isLoading,
    isSuccess,
    error,
    status,
    mutate,
    token,
    ErrorModalComponent,
  };
};

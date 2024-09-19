import {
  useQuery,
  useMutation,
  useQueryClient,
  useInfiniteQuery,
} from '@tanstack/react-query';
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

  const {
    data: infiniteData,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status: infiniteStatus,
  } = useInfiniteQuery({
    queryKey: ['Measurements', 'infinite'],
    queryFn: ({ pageParam }) => getAllUserMeasurements({ token, pageParam }),
    initialPageParam: 0,
    getNextPageParam: (lastPage, pages) => {
      if (lastPage.length < 10) return undefined;
      return pages.length;
    },
  });

  return {
    data,
    infiniteData,
    isLoading,
    isSuccess,
    error,
    status,
    infiniteStatus,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    mutate,
    token,
    ErrorModalComponent,
  };
};

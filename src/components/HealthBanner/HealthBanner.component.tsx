import { Box } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { memo } from 'react';
import { checkHealth } from 'src/api/health';

export const HealthBanner = memo(() => {
  const { data, isSuccess } = useQuery({
    queryKey: ['health'],
    queryFn: checkHealth,
    retry: true,
    retryDelay: (attempt) => Math.min(1000 * 2 ** attempt, 30000), // Exponential backoff
    staleTime: 60000,
  });

  if (isSuccess && data?.status === 'UP') return null;

  return (
    <Box
      sx={{
        backgroundColor: 'error.main',
        padding: '8px',
        textAlign: 'center',
        position: 'sticky',
        width: '100%',
        top: 0,
        zIndex: 999,
        boxShadow: 4,
      }}
    >
      Our server is currently experiencing problems. We apologize for the
      inconvenience and ask you to check back later.
    </Box>
  );
});

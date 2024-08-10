import { Box } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { memo, useEffect, useState } from 'react';
import { checkHealth } from 'src/api/health';

export const HealthBanner = memo(() => {
  const [isHealthy, setIsHealthy] = useState(true);

  const { data, isSuccess, isError } = useQuery({
    queryKey: ['health'],
    queryFn: checkHealth,
    retryDelay: 1000,
    refetchInterval: 60000,
  });
  useEffect(() => {
    if (isSuccess && data.status === 'UP') {
      setIsHealthy(true);
    } else setIsHealthy(false);
  }, [isSuccess, data, isError]);

  if (isHealthy) return null;

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

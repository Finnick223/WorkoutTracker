import { Box, CircularProgress, Grid } from '@mui/material';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuthStatus from 'src/hooks/useAuth';

export const NotFoundPage = () => {
  const { isLoggedIn, isLoading } = useAuthStatus();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading) {
      isLoggedIn ? navigate('/') : navigate('/Login');
    }
  }, [isLoggedIn, isLoading, navigate]);

  return (
    <Grid container alignContent="center" direction="column">
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <CircularProgress />
      </Box>
    </Grid>
  );
};

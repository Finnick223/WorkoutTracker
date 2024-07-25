import { Button, CssBaseline, Grid } from '@mui/material';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuthStatus from 'src/hooks/useAuth';

export const NotFoundPage = () => {
  const { isLoggedIn } = useAuthStatus();
  const navigate = useNavigate();

  useEffect(() => {
    isLoggedIn ? navigate('/') : navigate('/Login');
  }, [isLoggedIn, navigate]);

  return (
    <>
      <CssBaseline />
      <Grid container alignContent="center" direction="column">
        {isLoggedIn ? (
          <Link to="/">
            <Button variant="contained">Powrót do strony głównej</Button>
          </Link>
        ) : (
          <Link to="/Login">
            <Button variant="contained">Zaloguj się</Button>
          </Link>
        )}
      </Grid>
    </>
  );
};

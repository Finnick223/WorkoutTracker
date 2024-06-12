import { CircularProgress, Typography } from '@mui/material';
import useAuthStatus from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { CssBaseline } from '@mui/material';

const LogoutUser = () => {
  const { logout } = useAuthStatus();
  const navigate = useNavigate();

  useEffect(() => {
    logout();
    navigate('/');
  }, []);
  return (
    <>
      <CssBaseline />
      <Typography>logging out....</Typography>
      <CircularProgress />
    </>
  );
};

export default LogoutUser;

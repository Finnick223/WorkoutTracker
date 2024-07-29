import { CircularProgress, Typography } from '@mui/material';
import useAuthStatus from 'src/hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const LogoutUser = () => {
  const { logout } = useAuthStatus();
  const navigate = useNavigate();

  useEffect(() => {
    logout();
    navigate('/');
  }, []);
  return (
    <>
      <Typography>logging out....</Typography>
      <CircularProgress />
    </>
  );
};

export default LogoutUser;

import {
  Box,
  Container,
  CssBaseline,
  Typography,
  Avatar,
  CircularProgress,
  Button,
} from '@mui/material';
import useAuthStatus from 'src/hooks/useAuth.ts';
import { getCurrentUser } from 'src/api/auth';
import { User } from 'src/client/src';
import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import EditNoteIcon from '@mui/icons-material/EditNote';
import EditUserModal from 'src/components/modals/EditProfile.modal.tsx';
import { useModal } from 'src/components/modals/Error.modal';

function Profile() {
  const { token } = useAuthStatus();
  const [user, setUser] = useState<User>();
  const [isEditOpen, setIsEditOpen] = useState<boolean>(false);
  const { openModal, ErrorModalComponent } = useModal();

  const { data, isSuccess, isFetching, isError } = useQuery({
    queryKey: ['profile'],
    queryFn: () => getCurrentUser(token),
  });

  useEffect(() => {
    if (isSuccess) {
      setUser(data);
    }
    if (isError) {
      openModal();
    }
  }, [isSuccess, isError, data, openModal]);

  const handleEditOpen = () => setIsEditOpen(true);
  const handleEditClose = () => setIsEditOpen(false);

  if (isFetching) {
    return (
      <Container maxWidth="lg">
        <CssBaseline />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
          }}
        >
          <CircularProgress />
        </Box>
      </Container>
    );
  }

  return (
    <>
      <Container maxWidth="lg">
        <CssBaseline />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1 }}></Avatar>
          <Typography variant="h2" sx={{ mb: 4 }}>
            {user?.firstName}'s Profile
          </Typography>
          <Box sx={{ alignItems: 'flex-start' }}>
            <Typography variant="h6">Email: {user?.email}</Typography>
            <Typography variant="h6">First Name: {user?.firstName}</Typography>
            <Typography variant="h6">Last Name: {user?.lastName}</Typography>
            <Typography variant="h6">Gender: {user?.gender}</Typography>
            <Button
              variant="contained"
              color="primary"
              startIcon={<EditNoteIcon />}
              fullWidth
              onClick={handleEditOpen}
              sx={{ my: 2 }}
            >
              Edit
            </Button>
          </Box>
        </Box>
      </Container>
      <EditUserModal
        id={user?.id}
        open={isEditOpen}
        handleEditClose={handleEditClose}
        user={user}
      />
      <ErrorModalComponent />
    </>
  );
}

export default Profile;

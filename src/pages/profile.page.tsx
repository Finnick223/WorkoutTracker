import { Box, Container, CssBaseline, Typography, Avatar, CircularProgress, TextField } from '@mui/material';
import useAuthStatus from '../hooks/useAuth.ts';
import { getCurrentUser } from '../api/auth';
import { User } from '../client/src';
import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';


function EditIcon() {
  return null;
}

function Profile() {
  const { token } = useAuthStatus();
  const [user, setUser] = useState<User>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);
  const [isEditOpen, setIsEditOpen] = useState<boolean>(false);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userData = await getCurrentUser(token);
        setUser(userData);
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
        setIsLoading(false);
      }
    };

    fetchUserData();
  }, [token]);

  const handleEditOpen = () => setIsEditOpen(true);
  const handleEditClose = () => setIsEditOpen(false);

  const handleEditSave = () => {
    // Add logic to save edited user information here
    handleEditClose();
  };

  if (isLoading) {
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

  if (isError) {
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
          <Typography variant="h4" color="error">
            Failed to load user data
          </Typography>
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
            px: 10,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Avatar sx={{ m: 1 }}></Avatar>
          <Typography variant="h2" sx={{ mb: 4 }}>
            {user?.firstName} {user?.lastName}'s Profile
          </Typography>
          <Typography variant="h6">Email: {user?.email}</Typography>
          <Typography variant="h6">First Name: {user?.firstName}</Typography>
          <Typography variant="h6">Last Name: {user?.lastName}</Typography>
          {user?.gender && <Typography variant="h6">Gender: {user.gender}</Typography>}
          {user?.userMeasurements && <Typography variant="h6">Measurements: {JSON.stringify(user.userMeasurements)}</Typography>}
          <Button variant="contained" color="primary" startIcon={<EditIcon />} onClick={handleEditOpen}>
            Edit
          </Button>
        </Box>
      </Container>

      <Modal
        open={isEditOpen}
        onClose={handleEditClose}
        aria-labelledby="edit-user-modal"
        aria-describedby="edit-user-modal-description"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography id="edit-user-modal" variant="h6" component="h2">
            Edit User Information
          </Typography>
          <TextField
            margin="normal"
            fullWidth
            label="First Name"
            defaultValue={user?.firstName}
            variant="outlined"
          />
          <TextField
            margin="normal"
            fullWidth
            label="Last Name"
            defaultValue={user?.lastName}
            variant="outlined"
          />
          <TextField
            margin="normal"
            fullWidth
            label="Email"
            defaultValue={user?.email}
            variant="outlined"
          />
          {user?.gender && (
            <TextField
              margin="normal"
              fullWidth
              label="Gender"
              defaultValue={user?.gender}
              variant="outlined"
            />
          )}
          <Button
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
            onClick={handleEditSave}
          >
            Save
          </Button>
        </Box>
      </Modal>
    </>
  );
}

export default Profile;

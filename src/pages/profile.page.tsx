import {
  Box,
  Container,
  Typography,
  Avatar,
  CircularProgress,
  Button,
  Paper,
  Stack,
  IconButton,
} from '@mui/material';
import useAuthStatus from 'src/hooks/useAuth.ts';
import { getCurrentUser } from 'src/api/auth';
import { User } from 'src/client/src';
import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import EditNoteIcon from '@mui/icons-material/EditNote';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import EditUserModal from 'src/components/modals/EditProfile.modal.tsx';
import { useModal } from 'src/components/modals/Error.modal';
import { AnimatePage } from 'src/animations/AnimatePage';

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
      <AnimatePage>
        <Container maxWidth="sm">
          <Stack
            direction={'column'}
            justifyContent={'space-around'}
            alignItems={'center'}
            spacing={2}
            sx={{ mb: 8 }}
          >
            <Typography variant="h3">{user?.firstName}'s Profile</Typography>
            <Paper
              component={Box}
              width={'100%'}
              sx={{ m: 2, p: 2, borderRadius: 2 }}
            >
              <Typography mb={1} variant="body2" color={'text.secondary'}>
                Profile picture
              </Typography>
              <Stack direction={'row'} spacing={2}>
                <Avatar />
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<EditNoteIcon />}
                  fullWidth
                  // onClick={handleEditOpen}
                  sx={{ my: 2 }}
                >
                  Change
                </Button>
                <Button
                  variant="contained"
                  color="error"
                  startIcon={<HighlightOffIcon />}
                  fullWidth
                  // onClick={handleEditOpen}
                  sx={{ my: 2 }}
                >
                  Remove
                </Button>
              </Stack>
            </Paper>
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={2}
              width={'100%'}
            >
              <Paper
                sx={{
                  p: 4,
                  borderRadius: 2,
                }}
              >
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography
                    variant="h6"
                    sx={{ color: 'primary.main', fontWeight: 'bold' }}
                  >
                    Personal Information
                  </Typography>
                  <IconButton onClick={handleEditOpen} color="primary">
                    <EditNoteIcon />
                  </IconButton>
                </Box>
                <Stack spacing={2} mt={2}>
                  <Box>
                    <Typography
                      variant="body2"
                      sx={{ color: 'text.secondary' }}
                    >
                      First Name
                    </Typography>
                    <Typography variant="h6">{user?.firstName}</Typography>
                  </Box>
                  <Box>
                    <Typography
                      variant="body2"
                      sx={{ color: 'text.secondary' }}
                    >
                      Last Name
                    </Typography>
                    <Typography variant="h6">{user?.lastName}</Typography>
                  </Box>
                  <Box>
                    <Typography
                      variant="body2"
                      sx={{ color: 'text.secondary' }}
                    >
                      Email address
                    </Typography>
                    <Typography variant="h6">{user?.email}</Typography>
                  </Box>
                  <Box>
                    <Typography variant="body2" color={'text.secondary'}>
                      Gender
                    </Typography>
                    <Typography variant="h6">{user?.genders}</Typography>
                  </Box>
                </Stack>
              </Paper>
              {/* 2 column */}
              <Paper
                sx={{
                  p: 4,
                  borderRadius: 2,
                }}
              >
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography
                    variant="h6"
                    sx={{ color: 'primary.main', fontWeight: 'bold' }}
                  >
                    User Settings
                  </Typography>
                  <IconButton onClick={handleEditOpen} color="primary">
                    <EditNoteIcon />
                  </IconButton>
                </Box>
                <Stack spacing={2} mt={2}>
                  <Box>
                    <Typography
                      variant="body2"
                      sx={{ color: 'text.secondary' }}
                    >
                      First Name
                    </Typography>
                    <Typography variant="h6">{user?.firstName}</Typography>
                  </Box>
                  <Box>
                    <Typography
                      variant="body2"
                      sx={{ color: 'text.secondary' }}
                    >
                      Last Name
                    </Typography>
                    <Typography variant="h6">{user?.lastName}</Typography>
                  </Box>
                  <Box>
                    <Typography
                      variant="body2"
                      sx={{ color: 'text.secondary' }}
                    >
                      Email address
                    </Typography>
                    <Typography variant="h6">{user?.email}</Typography>
                  </Box>
                  <Box>
                    <Typography variant="body2" color={'text.secondary'}>
                      Gender
                    </Typography>
                    <Typography variant="h6">{user?.genders}</Typography>
                  </Box>
                </Stack>
              </Paper>
            </Stack>
          </Stack>
        </Container>
      </AnimatePage>
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

import {
  Box,
  Container,
  Typography,
  Avatar,
  Button,
  Paper,
  Stack,
  IconButton,
  Switch,
  FormControlLabel,
  Skeleton,
} from '@mui/material';
import { useContext } from 'react';
import { ColorModeContext } from 'src/providers/MaterialUI.provider';
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
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';

function Profile() {
  const colorMode = useContext(ColorModeContext);
  const isDark = colorMode.mode === 'dark';
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
      <Container maxWidth="md">
        <Grid2 container spacing={2}>
          <Grid2 xs={12}>
            <Typography variant="h3" align="center" mb={2}>
              <Skeleton width={'100%'} />
            </Typography>
            <Paper
              component={Box}
              width={'100%'}
              sx={{ px: 4, py: 2, borderRadius: 2 }}
            >
              <Typography mb={1} variant="body2" color={'text.secondary'}>
                Profile picture
              </Typography>
              <Stack direction={'row'} spacing={2}>
                <Skeleton variant="circular" width={80} height={40} />
                <Skeleton variant="rectangular" height={40} width="100%" />
                <Skeleton variant="rectangular" height={40} width="100%" />
              </Stack>
            </Paper>
          </Grid2>
          <Grid2 xs={12} sm={6}>
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
                <Skeleton variant="circular" width={40} height={40} />
              </Box>
              <Stack spacing={2} mt={2}>
                <Box>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    First Name
                  </Typography>
                  <Skeleton
                    width={120}
                    variant="text"
                    sx={{ fontSize: '1.3rem' }}
                  />
                </Box>
                <Box>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Last Name
                  </Typography>
                  <Skeleton
                    width={120}
                    variant="text"
                    sx={{ fontSize: '1.3rem' }}
                  />
                </Box>
                <Box>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Email address
                  </Typography>
                  <Skeleton
                    width={180}
                    variant="text"
                    sx={{ fontSize: '1.3rem' }}
                  />
                </Box>
                <Box>
                  <Typography variant="body2" color={'text.secondary'}>
                    Gender
                  </Typography>
                  <Skeleton
                    width={100}
                    variant="text"
                    sx={{ fontSize: '1.5rem' }}
                  />
                </Box>
              </Stack>
            </Paper>
          </Grid2>
          <Grid2 xs={12} sm={6}>
            <Paper
              sx={{
                p: 4,
                borderRadius: 2,
                mb: 8,
              }}
            >
              <Typography
                variant="h6"
                sx={{ color: 'primary.main', fontWeight: 'bold' }}
              >
                Settings
              </Typography>
              <Stack spacing={2} mt={2}>
                <Skeleton width={150} height={40} />
              </Stack>
            </Paper>
          </Grid2>
        </Grid2>
      </Container>
    );
  }

  return (
    <>
      <AnimatePage>
        <Container maxWidth="md">
          <Grid2 container spacing={2}>
            <Grid2 xs={12}>
              <Typography variant="h3" align="center" mb={2}>
                {user?.firstName}'s Profile
              </Typography>
              <Paper
                component={Box}
                width={'100%'}
                sx={{ px: 4, py: 2, borderRadius: 2 }}
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
                    // onClick={handleChange}
                    sx={{ my: 2 }}
                  >
                    Change
                  </Button>
                  <Button
                    variant="contained"
                    color="error"
                    startIcon={<HighlightOffIcon />}
                    fullWidth
                    // onClick={handleDelete}
                    sx={{ my: 2 }}
                  >
                    Remove
                  </Button>
                </Stack>
              </Paper>
            </Grid2>
            <Grid2 xs={12} sm={6}>
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
            </Grid2>
            <Grid2 xs={12} sm={6}>
              <Paper
                sx={{
                  p: 4,
                  borderRadius: 2,
                  mb: 8,
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ color: 'primary.main', fontWeight: 'bold' }}
                >
                  Settings
                </Typography>
                <Stack spacing={2} mt={2}>
                  <Box>
                    <FormControlLabel
                      control={
                        <Switch
                          checked={isDark}
                          onChange={colorMode.toggleColorMode}
                        />
                      }
                      label="Dark Mode"
                    />
                  </Box>
                </Stack>
              </Paper>
            </Grid2>
          </Grid2>
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

import { useState } from 'react';
import {
  Box,
  TextField,
  FormControl,
  InputLabel,
  Avatar,
  OutlinedInput,
  InputAdornment,
  IconButton,
  Container,
  Typography,
  Grid,
  Button,
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useForm, Controller } from 'react-hook-form';
import { loginUser } from 'src/api/auth';
import { ForgotPasswordModal } from 'src/components/modals/ForgotPassword.modal';
import useAuthStatus from 'src/hooks/useAuth';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { AnimatePage } from 'src/animations/AnimatePage';
import CustomLink from 'src/components/Link/Link.component';

function LoginPage() {
  const { login } = useAuthStatus();
  const [showPassword, setShowPassword] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: loginUser,
    onSuccess: (token) => {
      login.mutate(token);
      toast.success('Logged in successfully');
      navigate('/');
    },
    onError: (error) => {
      toast.error('Try other credentials');
      console.error('Login failed:', error.message);
    },
  });

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
  };

  const submit = handleSubmit((values) => mutation.mutate(values));

  return (
    <>
      <AnimatePage>
        <Container component="main" maxWidth="xs">
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1 }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5" sx={{ mb: 4 }}>
              Sign in
            </Typography>
            <form onSubmit={submit}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Controller
                    name="email"
                    control={control}
                    defaultValue=""
                    rules={{ required: 'Email is required' }}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        fullWidth
                        label="Email"
                        error={!!errors.email}
                        helperText={
                          errors.email ? (errors.email.message as string) : ''
                        }
                        autoFocus
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControl
                    fullWidth
                    variant="outlined"
                    error={!!errors.password}
                  >
                    <InputLabel htmlFor="outlined-adornment-password">
                      Password
                    </InputLabel>
                    <Controller
                      name="password"
                      control={control}
                      defaultValue=""
                      rules={{ required: 'Password is required' }}
                      render={({ field }) => (
                        <OutlinedInput
                          {...field}
                          id="password"
                          type={showPassword ? 'text' : 'password'}
                          endAdornment={
                            <InputAdornment position="end">
                              <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                              >
                                {showPassword ? (
                                  <VisibilityOff />
                                ) : (
                                  <Visibility />
                                )}
                              </IconButton>
                            </InputAdornment>
                          }
                          label="Password"
                        />
                      )}
                    />
                    {errors.password && (
                      <Typography color="error" variant="body2">
                        {errors.password.message as string}
                      </Typography>
                    )}
                  </FormControl>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'flex-end',
                    }}
                  >
                    <ForgotPasswordModal />
                  </Box>
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 2, mb: 1 }}
                disabled={login.isPending}
              >
                {login.isPending ? 'Logging in...' : 'Log in'}
              </Button>
              {login.isError && (
                <Typography color="error" variant="body2" align="center">
                  {login.error.message}
                </Typography>
              )}
              <Grid container justifyContent="flex-end">
                <CustomLink href="/Register" color="inherit" variant="body2">
                  Don't have an account? Register
                </CustomLink>
              </Grid>
            </form>
          </Box>
        </Container>
      </AnimatePage>
    </>
  );
}

export default LoginPage;

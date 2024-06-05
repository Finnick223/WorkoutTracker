//! Login feature using reactrouter/remix style (wanted to try it)
import { useEffect, useState } from 'react';
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
  CssBaseline,
  Typography,
  Grid,
  Button,
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import {
  useNavigation,
  Form,
  useActionData,
} from 'react-router-dom';
import axios from 'axios';
import { ForgotPasswordModal } from '../components/ForgotPasswordModal';
import { useUser } from '../hooks/useUser';
import { ActionData } from '../interfaces/Interfaces';


export const loginUser = async (creds: any) => {
  try {
    const response = await axios.post('http://188.68.247.208:8080/auth/signin', {
      email: creds.email,
      password: creds.password
    });
    return response.data.token;
  } catch (err) {
    console.error('Wystąpił błąd api:', err);
    throw new Error('Login failed. Please check your email and password.');
  }
};

export async function action({ request }: any) {
  const formData = await request.formData();
  const email = formData.get('email');
  const password = formData.get('password');

  try {
    const token = await loginUser({ email, password });
    return { token };
  } catch (err: any) {
    console.error('logowanie nie powiodlo sie: ', err.message);
    return { error: err.message };
  }
}

function LoginPage() {
  const { login } = useUser()
  const [showPassword, setShowPassword] = useState(false);
  const actionData = useActionData() as ActionData;

  useEffect(() => {
    if (actionData && actionData.token) {
      login(actionData.token);
    }
  }, [actionData, login]);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
  };

  const navigation = useNavigation();

  return (
    <>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
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
          <Form className="form--register" method="post" replace>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  name="email"
                  required
                  fullWidth
                  id="email"
                  label="email"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl
                  fullWidth
                  variant="outlined"
                >
                  <InputLabel htmlFor="outlined-adornment-password">
                    Password*
                  </InputLabel>
                  <OutlinedInput
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
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    required
                    label="Password"
                    name="password"
                  />
                </FormControl>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled={navigation.state === 'submitting'}
            >
              {navigation.state === 'submitting' ? 'Logging in...' : 'Log in'}
            </Button>
            {actionData && actionData.error && (
              <Typography color="error" variant="body2" align="center">
                {actionData.error}
              </Typography>
            )}
            <ForgotPasswordModal/>
          </Form>
        </Box>
      </Container>
    </>
  );
}

export default LoginPage;

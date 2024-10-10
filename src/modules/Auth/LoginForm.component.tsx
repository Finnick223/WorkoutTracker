import { Box, Avatar, Typography, Grid, Button } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useForm, FormProvider } from 'react-hook-form';
import { loginUser } from 'src/api/auth';
import { ForgotPasswordModal } from 'src/components/modals/ForgotPassword.modal';
import useAuthStatus from 'src/hooks/useAuth';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { yupResolver } from '@hookform/resolvers/yup';
import { Input } from 'src/components/CustomInput/InputForm.component';
import InputFormPassword from 'src/components/CustomPasswordInput/InputPassword.component';
import { loginSchema } from 'src/validators/login.validator';
import CustomLink from 'src/components/Link/Link.component';

export default function LoginForm() {
  const { login } = useAuthStatus();
  const navigate = useNavigate();

  const methods = useForm({
    resolver: yupResolver(loginSchema),
    mode: 'onSubmit',
  });
  const {
    handleSubmit,
    formState: { isValid },
  } = methods;

  const mutation = useMutation({
    mutationFn: loginUser,
    onSuccess: (token) => {
      login.mutate(token);
      toast.success('Logged in successfully');
      navigate('/');
    },
    onError: () => {
      toast.error('Try other credentials');
    },
  });

  const submit = handleSubmit((values) => mutation.mutate(values));

  return (
    <FormProvider {...methods}>
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
        <form data-testid="login-form" onSubmit={submit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Input
                id="email"
                name="email"
                label="Email"
                type="text" // TODO: change to email in future
                required
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <InputFormPassword
                name="password"
                label="Password*"
                type="password"
                required
              />
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
            disabled={!isValid || login.isPending}
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
    </FormProvider>
  );
}

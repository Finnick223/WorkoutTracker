import { FormDataType } from 'src/interfaces/auth.interfaces';
import {
  Box,
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  FormLabel,
  Avatar,
  Typography,
  Grid,
  Checkbox,
  Button,
  FormHelperText,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form';
import InputFormPassword from 'src/components/CustomPasswordInput/InputPassword.component';
import { yupResolver } from '@hookform/resolvers/yup';
import { Input } from 'src/components/CustomInput/InputForm.component';
import axios from 'axios';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { registerSchema } from 'src/validators/auth.validator';
import toast from 'react-hot-toast';
import CustomLink from 'src/components/Link/Link.component';

export default function RegisterForm() {
  const navigate = useNavigate();

  const formMethods = useForm<FormDataType>({
    resolver: yupResolver(registerSchema),
    mode: 'onBlur',
  });

  const mutation = useMutation({
    mutationFn: (data: FormDataType) => {
      const payload = {
        email: data.email,
        firstName: data.firstName,
        lastName: data.lastName,
        password: data.password,
        isTermsAndConditionsAccepted: data.termsAndConditions,
        genders: [data.gender],
      };
      return axios.post('http://188.68.247.208:8080/auth/signup', payload);
    },
  });

  const onSubmit: SubmitHandler<FormDataType> = (data) => {
    mutation.mutate(data, {
      onSuccess: () => {
        toast.success('Account created! You can login now');
        navigate('/Login');
      },
      onError: (error) => {
        console.log('Error: ', error);
        toast.error('Something went wrong');
      },
    });
  };

  return (
    <>
      <FormProvider {...formMethods}>
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
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            onSubmit={formMethods.handleSubmit(onSubmit)}
            sx={{ mt: 2 }}
          >
            <Grid container spacing={1.5}>
              <Grid item xs={12} sm={6}>
                <Input
                  autoComplete="given-name"
                  name="firstName"
                  required
                  id="firstName"
                  label="First Name"
                  type="text"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Input
                  autoComplete="family-name"
                  name="lastName"
                  required
                  id="lastName"
                  label="Last Name"
                  type="text"
                />
              </Grid>
              <Grid item xs={12}>
                <Input
                  autoComplete="email"
                  name="email"
                  required
                  id="email"
                  label="Email"
                  type="email"
                />
              </Grid>
              <Grid item xs={12}>
                <InputFormPassword
                  name="password"
                  type="password"
                  label="Password*"
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <InputFormPassword
                  label="Repassword*"
                  name="repasswd"
                  type="password"
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl error={!!formMethods.formState.errors.gender}>
                  <FormLabel id="radio-buttons-group">Gender</FormLabel>
                  <RadioGroup aria-labelledby="radio-buttons-group">
                    <FormControlLabel
                      value="FEMALE"
                      control={<Radio />}
                      label="Female"
                      {...formMethods.register('gender')}
                    />
                    <FormControlLabel
                      value="MALE"
                      control={<Radio />}
                      label="Male"
                      {...formMethods.register('gender')}
                    />
                    <FormControlLabel
                      value="OTHER"
                      control={<Radio />}
                      label="Other"
                      {...formMethods.register('gender')}
                    />
                  </RadioGroup>
                  <FormHelperText>
                    {formMethods.formState.errors.gender?.message}
                  </FormHelperText>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox color="primary" />}
                  label="I agree with terms"
                  {...formMethods.register('termsAndConditions')}
                  defaultChecked={false}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 1, mb: 1 }}
              disabled={!formMethods.formState.isValid}
            >
              {mutation.isPending ? 'Signing Up...' : 'Sign Up'}
            </Button>
            <Grid container justifyContent="flex-end" mb={6}>
              <CustomLink href="/Login" color="inherit" variant="body2">
                Already have an account? Sign in
              </CustomLink>
            </Grid>
          </Box>
        </Box>
      </FormProvider>
    </>
  );
}

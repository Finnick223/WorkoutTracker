import { useState } from 'react';
import {
  Box,
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  FormLabel,
  Avatar,
  Container,
  CssBaseline,
  Typography,
  Grid,
  Checkbox,
  Button,
  Link,
  FormHelperText,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form';
import InputFormPassword from '../components/InputPassword.component';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Input } from '../components/InputForm.component';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

interface FormDataType {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  repasswd: string;
  gender: 'female' | 'male';
  termsAndConditions: boolean;
}

const registerSchema = yup.object().shape({
  email: yup.string().required().email(),
  firstName: yup.string().min(3).required(),
  lastName: yup.string().min(3).required(),
  password: yup.string().min(6).required(),
  repasswd: yup
    .string()
    .min(6)
    .oneOf([yup.ref('password')], 'Passwords do not match')
    .required(),
  gender: yup
    .string()
    .oneOf(['female', 'male'], 'Please select a gender')
    .required(),
  termsAndConditions: yup
    .boolean()
    .oneOf([true], 'Accepting terms is required')
    .required(),
});

export default function Register() {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const navigate = useNavigate();

  const formMethods = useForm<FormDataType>({
    resolver: yupResolver(registerSchema),
    mode: 'onBlur',
  });

  const onSubmit: SubmitHandler<FormDataType> = async (data) => {
    try {
      await axios.post('http://188.68.247.208:8080/auth/signup', {
        email: data.email,
        password: data.password,
        firstName: data.firstName,
        lastName: data.lastName,
        isTermsAndConditionsAccepted: data.termsAndConditions,
        genders: [data.gender.toUpperCase()], // Convert gender to uppercase
      });
      navigate('/welcome');
    } catch (err) {
      setErrorMessage('Problem with API communication');
    }
  };

  return (
    <>
      <FormProvider {...formMethods}>
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
                  <FormControl
                    error={!!formMethods.formState.errors.gender}
                  >
                    <FormLabel id="radio-buttons-group">Gender</FormLabel>
                    <RadioGroup aria-labelledby="radio-buttons-group">
                      <FormControlLabel
                        value="female"
                        control={<Radio />}
                        label="Female"
                        {...formMethods.register('gender')}
                      />
                      <FormControlLabel
                        value="male"
                        control={<Radio />}
                        label="Male"
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
              {errorMessage && (
                <Typography color="error" sx={{ mt: 1 }}>
                  {errorMessage}
                </Typography>
              )}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 1, mb: 1 }}
                disabled={!formMethods.formState.isValid}
              >
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="/Login" variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </FormProvider>
    </>
  );
}

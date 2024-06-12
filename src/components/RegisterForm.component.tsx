import { FormDataType } from '../interfaces/Interfaces';
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
import InputFormPassword from './InputPassword.component';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Input } from './InputForm.component';
import axios from 'axios';

export default function RegisterForm() {
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
      .oneOf(['FEMALE', 'MALE', 'OTHER'], 'Please select a gender')
      .required(),
    termsAndConditions: yup
      .boolean()
      .oneOf([true], 'Accepting terms is required')
      .required(),
  });

  const formMethods = useForm<FormDataType>({
    resolver: yupResolver(registerSchema),
    mode: 'onBlur',
  });

  const onSubmit: SubmitHandler<FormDataType> = async (data) => {
    const payload = {
      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName,
      password: data.password,
      isTermsAndConditionsAccepted: data.termsAndConditions,
      genders: [data.gender],
    };

    try {
      const response = await axios.post('http://188.68.247.208:8080/auth/signup', payload);
      console.log('Response:', response.data);
    } catch (error) {
      console.error('Error:', error);
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

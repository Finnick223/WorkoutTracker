import { FormDataType } from './Interfaces';
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
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form';
import InputFormPassword from './InputPassword.component';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Input } from './InputForm.component';
import { FormHelperText } from '@mui/material';

export default function Form() {
  const registerSchema = yup.object().shape({
    email: yup.string().required().email(),
    firstName: yup.string().min(3).required(),
    lastName: yup.string().min(3).required(),
    password: yup.string().min(6).required(),
    repasswd: yup
      .string()
      .min(6)
      .oneOf([yup.ref('password')], 'passwords Dont Match')
      .required(),
    gender: yup
      .string()
      .oneOf(['female', 'male'], 'Please select a gender')
      .required(),
    termsAndConditions: yup
      .boolean()
      .oneOf([true], 'Accept terms is required')
      .required(),
  });

  const formMethods = useForm<FormDataType>({
    resolver: yupResolver(registerSchema),
    mode: 'onBlur',
  });
  const onSubmit: SubmitHandler<FormDataType> = (data: any) =>
    console.log(data);

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
                    error={formMethods.formState.errors.gender ? true : false}
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
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 1, mb: 1 }}
                disabled={!formMethods.formState.isValid}
              >
                {' '}
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="/login" variant="body2">
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

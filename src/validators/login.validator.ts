import * as yup from 'yup';

export const loginSchema = yup.object().shape({
  email: yup.string().required('Email is required'), //TODO add .email() when changed in login
  password: yup.string().required('Password is required').min(6),
});

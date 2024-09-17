import * as yup from 'yup';

export const profileSchema = yup.object().shape({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  gender: yup.string().required('Gender is required'),
  age: yup
    .number()
    .required('Age is required')
    .positive('Must be positive number'),
  height: yup
    .number()
    .required('Height is required')
    .positive('Must be positive number'),
});

import * as yup from 'yup';

export const registerSchema = yup.object().shape({
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

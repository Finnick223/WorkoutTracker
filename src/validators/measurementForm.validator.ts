import * as yup from 'yup';

export const measurementSchema = yup.object().shape({
  weight: yup.number().required().positive(),
  arms: yup.number().required().positive(),
  chest: yup.number().required().positive(),
  belly: yup.number().required().positive(),
  legs: yup.number().required().positive(),
});

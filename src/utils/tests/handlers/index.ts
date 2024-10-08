import {
  errorSignUp,
  successfulSignIn,
  successfulSignUp,
  errorSignIn,
} from './auth.handlers';
import {
  profileMock,
  usermeasurementMock,
  trainingMock,
  notWorkingProfileMock,
  ExerciseMock,
} from './home.handlers';

export const handlers = [
  errorSignUp,
  successfulSignUp,
  successfulSignIn,
  errorSignIn,
  profileMock,
  usermeasurementMock,
  trainingMock,
  notWorkingProfileMock,
  ExerciseMock,
];

import { errorSignUp, SignIn, successfulSignUp } from './auth.handlers';

export const handlers = [errorSignUp, successfulSignUp, SignIn];

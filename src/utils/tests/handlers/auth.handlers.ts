import { http, HttpResponse } from 'msw';

export const errorSignUp = http.post(
  'http://188.68.247.208:8080/auth/signup',
  async () => {
    return HttpResponse.json(
      { message: 'Something went wrong' },
      { status: 500 },
    );
  },
);

export const successfulSignUp = http.post(
  'http://188.68.247.208:8080/auth/signup',
  async () => {
    return HttpResponse.json({ message: 'User created' }, { status: 200 });
  },
);

export const errorSignIn = http.post(
  'http://188.68.247.208:8080/auth/signin',
  async ({ request }) => {
    const response = await request.json();
    return HttpResponse.json(response, { status: 500 });
  },
);
export const successfulSignIn = http.post(
  'http://188.68.247.208:8080/auth/signin',
  async () => {
    return HttpResponse.json(
      {
        token:
          'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzdHJpbmciLCJpYXQiOjE3MjgxMjA3ODYsImV4cCI6MTcyODEyNDM4Nn0.QP_r2QKXviZoxTsoQ8jduXGc880Or8WoOEEWTxHoqxo',
      },
      { status: 200 },
    );
  },
);

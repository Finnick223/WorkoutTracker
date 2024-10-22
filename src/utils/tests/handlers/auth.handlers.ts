import { baseURL } from '@utils/baseURL';
import { http, HttpResponse } from 'msw';

export const errorSignUp = http.post(`${baseURL}/auth/signup`, async () => {
  return HttpResponse.json(
    { message: 'Something went wrong' },
    { status: 500 },
  );
});

export const successfulSignUp = http.post(
  `${baseURL}/auth/signup`,
  async () => {
    return HttpResponse.json({ message: 'User created' }, { status: 200 });
  },
);

export const errorSignIn = http.post(
  `${baseURL}/auth/signin`,
  async ({ request }) => {
    const response = await request.json();
    return HttpResponse.json(response, { status: 500 });
  },
);
export const successfulSignIn = http.post(
  `${baseURL}/auth/signin`,
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

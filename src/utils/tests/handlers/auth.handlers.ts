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

export const SignIn = http.post(
  'http://188.68.247.208:8080/auth/signin',
  async ({ request }) => {
    const response = await request.json();
    return HttpResponse.json(response, { status: 200 });
  },
);

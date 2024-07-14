import { http, HttpResponse } from 'msw'

export const getCurrentUser =
    http.get('/user/me', () => {
      return HttpResponse.json({
        id: 'c7b3d8e0-5e0b-4b0f-8b3a-3b9f4b3d3b3d',
        email: 'string',
        firstName: 'John',
        lastName: 'Maverick',
        gender: 'MALE'
      })
    })
    
  export const SignIn = 
    http.post('http://188.68.247.208:8080/auth/signin', async ({request}) => {
        const response = await request.json();
        return HttpResponse.json(response, {status: 200});
        
    })

import { http, HttpResponse } from 'msw';

const profileData = {
  id: 'c14bf34e-40eb-4ca1-b3cf-9766a0da9129',
  email: 'string',
  firstName: 'string',
  lastName: 'string',
  genders: 'MALE',
  age: 22,
  height: 180,
};

const measurementData = [
  {
    id: '7fb390aa-3779-4c3c-ba86-ab4ca1219daf',
    createdOn: '2024-09-10T10:34:19.40672',
    modifiedOn: '2024-09-10T10:34:19.40672',
    weight: 89,
    arms: 40,
    chest: 99.5,
    belly: 77,
    legs: 59,
  },
];

const exerciseData = [
  {
    id: 'a3506791-b8a9-4269-aa3d-acfe6cc851ae',
    createdOn: '2024-09-13T16:04:56.455668',
    modifiedOn: '2024-09-13T16:05:06.445072',
    name: 'Bench Press',
    description: null,
    sets: [
      { reps: 15, weight: 80 },
      { reps: 1, weight: 1 },
    ],
  },
  {
    id: '0cd4391f-c4b2-487d-9832-d7bf273426b4',
    createdOn: '2024-09-13T16:41:47.919442',
    modifiedOn: '2024-09-13T16:41:53.966591',
    name: 'Bench Press',
    description: null,
    sets: [{ reps: 2, weight: 100 }],
  },
];

// Training data
const trainingData = [
  {
    id: '2168fc5e-152d-4df8-8262-f96bd1fd4750',
    createdOn: '2024-09-16T14:54:13.744936',
    modifiedOn: '2024-09-16T14:54:13.744936',
    name: 'trening silowy',
    description: 'push',
  },
];

export const profileMock = http.get(
  'http://188.68.247.208:8080/user/me',
  () => {
    return HttpResponse.json(profileData);
  },
);

export const usermeasurementMock = http.get(
  'http://188.68.247.208:8080/usermeasurement',
  () => {
    return HttpResponse.json(measurementData);
  },
);

export const trainingMock = http.get(
  'http://188.68.247.208:8080/training',
  () => {
    return HttpResponse.json(trainingData);
  },
);

export const notWorkingProfileMock = http.get(
  'http://188.68.247.208:8080/user/me',
  () => {
    console.log('Error handler triggered');

    return HttpResponse.json(
      { message: 'Internal Server Error' },
      { status: 500 },
    );
  },
);

export const ExerciseMock = http.get(
  'http://188.68.247.208:8080/exercise/Bench%20Press',
  () => {
    return HttpResponse.json(exerciseData);
  },
);

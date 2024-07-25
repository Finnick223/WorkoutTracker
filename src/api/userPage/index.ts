import { UserMeasurement, UserMeasurementApi } from 'src/client/src';
import { createInitOverrides } from '@utils/createInitOverrides';

const MeasApi = new UserMeasurementApi();

export const getUserMeasurement = async (token: string) => {
  const initOverrides = createInitOverrides(token);

  const requestParameters = {
    userMeasurementId: 'b7393418-f187-4ada-999e-2158a2e8ae02',
  };

  return await MeasApi.getUserMeasurementById(requestParameters, initOverrides);
};

export const updateUserMeasurement = async ({
  token,
  userMeasurement,
}: {
  token: string;
  userMeasurement: UserMeasurement;
}) => {
  const initOverrides = createInitOverrides(token);

  const requestParameters = {
    userMeasurementId: 'b7393418-f187-4ada-999e-2158a2e8ae02',
    userMeasurementCreate: userMeasurement,
  };
  return await MeasApi.updateUserMeasurement(requestParameters, initOverrides);
};

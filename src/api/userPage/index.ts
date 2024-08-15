import { UserMeasurement, UserMeasurementApi } from 'src/client/src';
import { createInitOverrides } from '@utils/createInitOverrides';

const MeasApi = new UserMeasurementApi();

export const getAllUserMeasurements = async ({
  token,
  pageParam,
}: {
  token: string;
  pageParam: number;
}) => {
  const initOverrides = createInitOverrides(token);

  const requestParameters = {
    page: pageParam,
    size: 10,
  };
  return await MeasApi.getUserMeasurements(requestParameters, initOverrides);
};

export const addUserMeasurement = async ({
  token,
  userMeasurement,
}: {
  token: string;
  userMeasurement: UserMeasurement;
}) => {
  const initOverrides = createInitOverrides(token);

  const requestParameters = {
    userMeasurementCreate: userMeasurement,
  };
  return await MeasApi.createUserMeasurement(requestParameters, initOverrides);
};

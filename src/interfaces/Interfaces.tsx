import { ReactNode } from 'react';
import { Training, User, UserMeasurement, ExerciseSet } from '../client/src';
// import { GridRowModesModel, GridRowsProp } from '@mui/x-data-grid';

export type FormDataType = {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  repasswd: string;
  gender: 'FEMALE' | 'MALE' | 'OTHER';
  termsAndConditions: boolean;
};

export interface AddTrainingModalProps {
  open: boolean;
  handleAddClose: () => void;
}
export interface EditUserModalProps {
  id: string | undefined;
  open: boolean;
  handleEditClose: () => void;
  user: User | undefined;
}

export interface AuthContextType {
  token: string | null;
  login: (token: string) => void;
  logout: () => void;
}
export interface AuthProviderProps {
  children: ReactNode;
}

export interface TrainingExtended extends Training {
  page: number;
  size: number;
}
export interface MeasurementFormProps {
  measurements: UserMeasurement;
  onSubmit: (userMeasurement: any) => void;
  onPartChange: (part: string) => void;
}

export interface EditToolbarProps {
  trainingId: string;
  // setRows: (newRows: (oldRows: GridRowsProp) => GridRowsProp) => void;
  // setRowModesModel: (
  //   newModel: (oldModel: GridRowModesModel) => GridRowModesModel,
  // ) => void;
}

export interface Rows {
  id: string;
  createdOn: string;
  modifiedOn: string;
  name: string;
  description: string;
  sets: Array<ExerciseSet>;
  trainingId: string;
  weight1?: number;
  reps1?: number;
  weight2?: number;
  reps2?: number;
  weight3?: number;
  reps3?: number;
}

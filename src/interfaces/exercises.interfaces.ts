import { ExerciseSet } from 'src/client/src';
// import { GridRowModesModel, GridRowsProp } from '@mui/x-data-grid';

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

export interface EditToolbarProps {
  trainingId: string;
  // setRows: (newRows: (oldRows: GridRowsProp) => GridRowsProp) => void;
  // setRowModesModel: (
  //   newModel: (oldModel: GridRowModesModel) => GridRowModesModel,
  // ) => void;
}

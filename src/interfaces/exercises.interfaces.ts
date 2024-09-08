import { GridRowModesModel } from '@mui/x-data-grid';
import { ExerciseSet } from 'src/client/src';

export interface Rows {
  id?: string;
  createdOn?: string;
  modifiedOn?: string;
  name?: string;
  description?: string;
  sets?: Array<ExerciseSet>;
  trainingId?: string;
  weight1?: number;
  reps1?: number;
  weight2?: number;
  reps2?: number;
  weight3?: number;
  reps3?: number;
}
export interface EditToolbarProps {
  setRowModesModel: (
    model: (oldModel: GridRowModesModel) => GridRowModesModel,
  ) => void;
  setRows: (prevRows: React.SetStateAction<Rows[]>) => void;
  trainingId: string;
  numSets: number;
  setNumSets: React.Dispatch<React.SetStateAction<number>>;
}

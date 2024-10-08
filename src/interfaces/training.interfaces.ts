import { Training } from 'src/client/src';

export interface AddTrainingModalProps {
  open: boolean;
  handleAddClose: () => void;
}

export interface UpdateTrainingModalProps {
  open: boolean;
  handleModalClose: () => void;
  page: number;
  size: number;
  trainingId: string;
  name: string | undefined;
  description: string | undefined;
}

export interface TrainingExtended extends Training {
  page: number;
  size: number;
}

export interface WeightProgressChartProps {
  weights: number[];
  dates: Date[];
}

export interface LastTrainingCardProps {
  trainingData: Training[];
}

export interface ExerciseChartProps {
  weights: number[];
  dates: Date[];
}

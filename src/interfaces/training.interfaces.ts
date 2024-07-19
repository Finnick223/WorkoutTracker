import { Training } from 'src/client/src';

export interface AddTrainingModalProps {
  open: boolean;
  handleAddClose: () => void;
}

export interface TrainingExtended extends Training {
  page: number;
  size: number;
}

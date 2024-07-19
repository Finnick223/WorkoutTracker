import { User, UserMeasurement } from 'src/client/src';

export interface EditUserModalProps {
  id: string | undefined;
  open: boolean;
  handleEditClose: () => void;
  user: User | undefined;
}

export interface MeasurementFormProps {
  measurements: UserMeasurement;
  onSubmit: (userMeasurement: any) => void;
  onPartChange: (part: string) => void;
}

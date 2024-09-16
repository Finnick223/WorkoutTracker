import { FieldValues, SubmitHandler } from 'react-hook-form';
import { User } from 'src/client/src';
import { PartsInput } from 'reactjs-human-body/dist/components/BodyComponent/BodyComponent';

export interface EditUserModalProps {
  id: string | undefined;
  open: boolean;
  handleEditClose: () => void;
  user: User | undefined;
}

export interface MeasurementFormProps {
  height: number | string;
  onSubmit: SubmitHandler<FieldValues>;
  onPartChange: (part: 'arms' | 'legs' | keyof PartsInput) => void;
}

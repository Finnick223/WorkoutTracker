import { yupResolver } from '@hookform/resolvers/yup';
import { TextField, Button, Box } from '@mui/material';
import { useForm } from 'react-hook-form';
import { UserMeasurement } from 'src/client/src';
import { MeasurementFormProps } from 'src/interfaces/user.interfaces';
import { measurementSchema } from 'src/validators/measurementForm.validator';

const MeasurementForm: React.FC<MeasurementFormProps> = ({
  measurements,
  onSubmit,
  onPartChange,
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid, isSubmitting },
  } = useForm({ resolver: yupResolver(measurementSchema) });

  const handleFormSubmit = (data: UserMeasurement) => {
    onSubmit(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <Box display={'flex'} flexDirection={'row'}>
        <TextField
          label="Age"
          variant="outlined"
          margin="normal"
          defaultValue={measurements.age}
          {...register('age')}
        />
        <TextField
          label="Height"
          variant="outlined"
          margin="normal"
          defaultValue={measurements.height}
          {...register('height')}
        />
        <TextField
          label="Weight"
          variant="outlined"
          margin="normal"
          {...register('weight')}
        />
      </Box>
      <Box display={'flex'} flexDirection={'column'}>
        <TextField
          label="Arms"
          variant="outlined"
          margin="normal"
          onClick={() => onPartChange('arms')}
          {...register('arms')}
        />
        <TextField
          label="Chest"
          variant="outlined"
          margin="normal"
          onClick={() => onPartChange('chest')}
          {...register('chest')}
        />
        <TextField
          label="Stomach"
          variant="outlined"
          margin="normal"
          onClick={() => onPartChange('stomach')}
          {...register('belly')}
        />
        <TextField
          label="Legs"
          variant="outlined"
          margin="normal"
          onClick={() => onPartChange('legs')}
          {...register('legs')}
        />
        <Button
          variant="contained"
          type="submit"
          sx={{ mt: 4 }}
          fullWidth
          disabled={!isValid || isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Add new Measurement'}
        </Button>
      </Box>
    </form>
  );
};

export default MeasurementForm;

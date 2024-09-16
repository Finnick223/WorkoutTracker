import { yupResolver } from '@hookform/resolvers/yup';
import { TextField, Button, Box } from '@mui/material';
import { useForm } from 'react-hook-form';
import { UserMeasurement } from 'src/client/src';
import { MeasurementFormProps } from 'src/interfaces/user.interfaces';
import { measurementSchema } from 'src/validators/measurementForm.validator';

const MeasurementForm: React.FC<MeasurementFormProps> = ({
  height,
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
          label="Height"
          variant="outlined"
          margin="normal"
          fullWidth
          disabled
          defaultValue={height}
        />
        <TextField
          label="Weight"
          variant="outlined"
          margin="normal"
          fullWidth
          autoFocus
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

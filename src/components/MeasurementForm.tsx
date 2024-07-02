import { TextField, Button, Box } from '@mui/material';
import { useForm } from 'react-hook-form';
import { MeasurementFormProps } from '../interfaces/Interfaces';


const MeasurementForm: React.FC<MeasurementFormProps> = ({ measurements, onSubmit, onPartChange }) => {
  const { register, handleSubmit } = useForm();

  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <Box display={'flex'} flexDirection={'row'}>
          <TextField
            label="Age"
            variant="outlined"
            margin="normal"
            defaultValue={measurements.age}
            {...register("age")}
          />
          <TextField
            label="Height"
            variant="outlined"
            margin="normal"
            defaultValue={measurements.height}
            {...register("height")}
          />
          <TextField
            label="Weight"
            variant="outlined"
            margin="normal"
            defaultValue={measurements.weight}
            {...register("weight")}
          />
        </Box>
        <Box display={'flex'} flexDirection={'column'}>
          <TextField
            label="Arms"
            variant="outlined"
            margin="normal"
            onClick={() => onPartChange('arms')}
            defaultValue={measurements.arms}
            {...register("arms")}
          />
          <TextField
            label="Chest"
            variant="outlined"
            margin="normal"
            onClick={() => onPartChange('chest')}
            defaultValue={measurements.chest}
            {...register("chest")}
          />
          <TextField
            label="Stomach"
            variant="outlined"
            margin="normal"
            onClick={() => onPartChange('stomach')}
            defaultValue={measurements.belly}
            {...register("belly")}
          />
          <TextField
            label="Legs"
            variant="outlined"
            margin="normal"
            onClick={() => onPartChange('legs')}
            defaultValue={measurements.legs}
            {...register("legs")}
          />
          <Button variant="contained" type="submit" sx={{ mt: 4 }} fullWidth>
            Update
          </Button>
        </Box>
    </form>
  );
};

export default MeasurementForm;
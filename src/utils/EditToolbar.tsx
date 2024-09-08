import {
  Button,
  MenuItem,
  Select,
  SelectChangeEvent,
  FormControl,
  InputLabel,
} from '@mui/material';
import { GridRowModes, GridToolbarContainer } from '@mui/x-data-grid';
import { EditToolbarProps } from 'src/interfaces/exercises.interfaces';
import AddIcon from '@mui/icons-material/Add';
import CustomLink from 'src/components/Link/Link.component';
import { motion } from 'framer-motion';
import { usePatchExercise } from 'src/hooks/useExerciseGridQueryHooks';
import useAuthStatus from 'src/hooks/useAuth';
import { useCallback, useState } from 'react';

export default function EditToolbar(props: EditToolbarProps) {
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const { token } = useAuthStatus();
  const { mutate } = usePatchExercise();
  const { numSets, setNumSets, setRows, setRowModesModel, trainingId } = props;

  const handleClick = useCallback(() => {
    setIsButtonDisabled(true);
    const exerciseUpdate = [
      {
        name: '',
        sets: [],
      },
    ];

    mutate(
      { token, trainingId, exerciseUpdate },
      {
        onSuccess: (response) => {
          const exercises = response.exercises || [];
          if (exercises.length > 0) {
            const lastExercise = exercises[exercises.length - 1];
            const newId = lastExercise.id;

            if (newId) {
              setRows((prevRows) => [...prevRows, lastExercise]);
              setRowModesModel((oldModel) => ({
                ...oldModel,
                [newId]: { mode: GridRowModes.Edit, fieldToFocus: 'name' },
              }));
            }
          }
        },
        onSettled: () => {
          setTimeout(() => {
            setIsButtonDisabled(false);
          }, 600);
        },
        onError: (error) => {
          console.error('Update failed:', error);
        },
      },
    );
  }, [mutate, token, trainingId, setRows, setRowModesModel]);

  const handleNumSetsChange = (event: SelectChangeEvent<number>) => {
    setNumSets(Number(event.target.value));
  };

  return (
    <GridToolbarContainer>
      <CustomLink href=".." color="inherit">
        <Button>
          &larr; <span>Back to all trainings</span>
        </Button>
      </CustomLink>
      <Button
        color="primary"
        startIcon={<AddIcon />}
        onClick={handleClick}
        component={motion.div}
        whileHover={{
          scale: 1.2,
          transition: { duration: 0.3 },
        }}
        whileTap={{ scale: 0.9 }}
        disabled={isButtonDisabled}
      >
        Add Exercise
      </Button>
      <FormControl
        size="small"
        sx={{ width: { xs: '100%', sm: 'auto' }, minWidth: 120, m: 1 }}
      >
        <InputLabel id="num-sets-label">Sets</InputLabel>
        <Select
          labelId="num-sets-label"
          value={numSets}
          onChange={handleNumSetsChange}
          label="Sets"
        >
          {[1, 2, 3, 4, 5].map((num) => (
            <MenuItem key={num} value={num}>
              {num}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </GridToolbarContainer>
  );
}

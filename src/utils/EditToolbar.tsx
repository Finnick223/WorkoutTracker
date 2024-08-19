import { Button } from '@mui/material';
import { GridRowModes, GridToolbarContainer } from '@mui/x-data-grid';
import { EditToolbarProps } from 'src/interfaces/exercises.interfaces';
import AddIcon from '@mui/icons-material/Add';
import CustomLink from 'src/components/Link/Link.component';
import { motion } from 'framer-motion';
import { usePatchExercise } from 'src/hooks/useExerciseGridQueryHooks';
import useAuthStatus from 'src/hooks/useAuth';
import { useCallback, useState } from 'react';

export default function EditToolbar(props: EditToolbarProps) {
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);
  const { token } = useAuthStatus();
  const { mutate } = usePatchExercise();
  const trainingId = props.trainingId;

  const handleClick = useCallback(() => {
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

            const id = setInterval(() => {
              if (newId) {
                props.setRowModesModel((oldModel) => ({
                  ...oldModel,
                  [newId]: { mode: GridRowModes.Edit, fieldToFocus: 'name' },
                }));
                clearInterval(id);
                setIntervalId(null);
              }
            }, 100);
            setIntervalId(id);
          }
        },
        onError: (error) => {
          console.error('Update failed:', error);
        },
      },
    );
  }, [mutate, token, trainingId, props]);

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
        disabled={!!intervalId}
      >
        Add Exercise
      </Button>
    </GridToolbarContainer>
  );
}

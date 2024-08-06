import { Button } from '@mui/material';
import { GridToolbarContainer } from '@mui/x-data-grid';
import useAuthStatus from 'src/hooks/useAuth';
import { EditToolbarProps } from 'src/interfaces/exercises.interfaces';
import AddIcon from '@mui/icons-material/Add';
import { useAddExercise } from 'src/api/exerciseGridQueryHooks';
import CustomLink from 'src/components/Link/Link.component';
import { motion } from 'framer-motion';

export default function EditToolbar(props: EditToolbarProps) {
  const { token } = useAuthStatus();
  const { mutate } = useAddExercise();

  const handleClick = () => {
    const exerciseCreate = {
      name: '',
      trainingId: props.trainingId,
      sets: [],
    };
    mutate({ token, exerciseCreate });
  };
  return (
    <GridToolbarContainer>
      <CustomLink href="./" color="inherit">
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
      >
        Add Exercise
      </Button>
    </GridToolbarContainer>
  );
}

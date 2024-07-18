import { Button } from '@mui/material';
import { GridToolbarContainer } from '@mui/x-data-grid';
import useAuthStatus from 'src/hooks/useAuth';
import { EditToolbarProps } from 'src/interfaces/Interfaces';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';
import { useAddExercise } from 'src/api/exerciseGridQueryHooks';

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
      <Button variant="text">
        <Link
          to=".."
          relative="path"
          style={{
            color: 'inherit',
            textDecoration: 'inherit',
          }}
        >
          &larr; <span>Back to all trainings</span>
        </Link>
      </Button>
      <Button color="primary" startIcon={<AddIcon />} onClick={handleClick}>
        Add Exercise
      </Button>
    </GridToolbarContainer>
  );
}

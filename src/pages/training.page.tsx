import { useEffect, useState } from 'react';
import TrainingCard from 'src/modules/Training/TrainingCard.component.tsx';
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CssBaseline,
  Fab,
  Paper,
  Skeleton,
  Stack,
  TablePagination,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { Training } from '../client/src';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { loadTrainings } from '../api/auth';
import useAuthStatus from '../hooks/useAuth.ts';
import AddTrainingModal from '../components/modals/AddTraining.modal.tsx';

function TrainingPage() {
  const [trainings, setTrainings] = useState<Training[]>([]);
  const [page, setPage] = useState<number>(0);
  const [size, setSize] = useState<number>(10);
  const [isAddOpen, setIsAddOpen] = useState<boolean>(false);
  const navigate = useNavigate();
  const { token } = useAuthStatus();

  const handleAddOpen = () => setIsAddOpen(true);
  const handleAddClose = () => setIsAddOpen(false);

  const { data, isSuccess, isFetching, isError } = useQuery({
    queryKey: ['trainings', page, size],
    queryFn: () => loadTrainings(token, page, size),
  });

  useEffect(() => {
    if (isSuccess) {
      setTrainings(data);
    }
    if (isError) {
      navigate('/error');
    }
  }, [isSuccess, isError, data]);

  const handlePageChange = (
    _event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => {
    setPage(newPage);
  };

  const handleSizeChange = (event: { target: { value: string } }) => {
    setSize(parseInt(event.target.value));
    setPage(0);
  };

  return (
    <>
      <CssBaseline />
      <Box
        sx={{ display: 'inline-flex', textAlign: 'center', flexWrap: 'wrap' }}
      >
        {isFetching
          ? Array.from(new Array(size)).map((_, index) => (
              <Paper elevation={4} sx={{ width: '16vw', m: 2 }} key={index}>
                <Card sx={{ width: '16vw' }}>
                  <CardContent>
                    <Skeleton variant="text" sx={{ fontSize: 14 }} />
                    <Skeleton variant="text" sx={{ fontSize: '0.83em' }} />
                    <Skeleton variant="text" sx={{ fontSize: '0.83em' }} />
                    <Skeleton variant="text" sx={{ fontSize: 14, mb: 1.5 }} />
                  </CardContent>
                  <CardActions sx={{ justifyContent: 'center' }}>
                    <Skeleton variant="rounded" width={40} height={40} />
                    <Skeleton variant="rounded" width={40} height={40} />
                  </CardActions>
                </Card>
              </Paper>
            ))
          : trainings.map((training) => (
              <TrainingCard
                id={training.id}
                createdOn={training.createdOn?.slice(0, 10)}
                name={training.name}
                description={training.description}
                key={training.id}
                page={page}
                size={size}
              />
            ))}
      </Box>
      <Stack
        spacing={2}
        direction="column"
        sx={{ display: 'flex', alignItems: 'center', mt: 4 }}
      >
        <TablePagination
          component="div"
          count={-1}
          page={page}
          onPageChange={handlePageChange}
          rowsPerPage={size}
          onRowsPerPageChange={handleSizeChange}
        />
        <Fab
          variant="extended"
          color="primary"
          aria-label="add"
          onClick={handleAddOpen}
        >
          <AddIcon />
          Add
        </Fab>
        <AddTrainingModal open={isAddOpen} handleAddClose={handleAddClose} />
      </Stack>
    </>
  );
}

export default TrainingPage;

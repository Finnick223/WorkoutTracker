import { useEffect, useState } from 'react';
import TrainingCard from 'src/modules/Training/TrainingCard.component.tsx';
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Fab,
  Paper,
  Skeleton,
  Stack,
  TablePagination,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { Training } from '../client/src';
import { useQuery } from '@tanstack/react-query';
import { loadTrainings } from 'src/api/training';
import useAuthStatus from 'src/hooks/useAuth.ts';
import AddTrainingModal from 'src/components/modals/AddTraining.modal.tsx';
import { useModal } from 'src/components/modals/Error.modal.tsx';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';

function TrainingPage() {
  const [trainings, setTrainings] = useState<Training[]>([]);
  const [page, setPage] = useState<number>(0);
  const [size, setSize] = useState<number>(10);
  const [isAddOpen, setIsAddOpen] = useState<boolean>(false);
  const { token } = useAuthStatus();
  const { openModal, ErrorModalComponent } = useModal();

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
      openModal();
    }
  }, [isSuccess, isError, data, openModal]);

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
      <Box
        sx={{
          textAlign: 'center',
          flexGrow: 1,
        }}
      >
        <Fab
          variant="extended"
          color="primary"
          aria-label="add"
          onClick={handleAddOpen}
        >
          <AddIcon />
          Add
        </Fab>
        <Grid2 container spacing={2} margin={1} justifyContent="center">
          {isFetching
            ? Array.from(new Array(size)).map((_, index) => (
                <Grid2>
                  <Paper elevation={4} sx={{ width: '16em' }} key={index}>
                    <Card sx={{ width: '16em' }}>
                      <CardContent>
                        <Skeleton variant="text" sx={{ fontSize: 14 }} />
                        <Skeleton variant="text" sx={{ fontSize: '0.83em' }} />
                        <Skeleton variant="text" sx={{ fontSize: '0.83em' }} />
                        <Skeleton
                          variant="text"
                          sx={{ fontSize: 14, mb: 1.5 }}
                        />
                      </CardContent>
                      <CardActions sx={{ justifyContent: 'center' }}>
                        <Skeleton variant="rounded" width={40} height={40} />
                        <Skeleton variant="rounded" width={40} height={40} />
                      </CardActions>
                    </Card>
                  </Paper>
                </Grid2>
              ))
            : trainings.map((training) => (
                <Grid2>
                  <TrainingCard
                    id={training.id}
                    createdOn={training.createdOn?.slice(0, 10)}
                    name={training.name}
                    description={training.description}
                    key={training.id}
                    page={page}
                    size={size}
                  />
                </Grid2>
              ))}
        </Grid2>
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
        <AddTrainingModal open={isAddOpen} handleAddClose={handleAddClose} />
      </Stack>
      <ErrorModalComponent />
    </>
  );
}

export default TrainingPage;

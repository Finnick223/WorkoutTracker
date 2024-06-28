import { useEffect, useState } from 'react';
import TrainingCard from '../components/TrainingCard.component.tsx';
import { Box, Button, CircularProgress, CssBaseline, Fab, FormControl, InputLabel, MenuItem, Select, Stack } from '@mui/material';
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
    queryKey: ["trainings", page, size],
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

  const handlePreviousPage = () => {
    setPage(prevPage => Math.max(prevPage - 1, 0));
  };
  
  const handleNextPage = () => {
    setPage(prevPage => prevPage + 1);
  };

  const handleSizeChange = (event: { target: { value: string; }; }) => {
    setSize(parseInt(event.target.value));
    setPage(0);
  };

  return (
    <>
      <CssBaseline />
      <Box sx={{ display: 'inline-flex', textAlign: 'center' }}>
        {isFetching ? <CircularProgress /> : trainings.map((training) => (
          <TrainingCard
            id={training.id}
            createdOn={training.createdOn?.slice(0,10)}
            name={training.name}
            description={training.description}
            key={training.id}
            page={page}
            size={size}
          />
        ))}
      </Box>
      <Stack spacing={2} direction="column" sx={{ display: 'flex', alignItems: 'center', mt: 4 }}>
      <Box>
        <Button onClick={handlePreviousPage} disabled={page === 0}>Previous Page</Button>
        <Button onClick={handleNextPage}>Next Page</Button>
      </Box>
      <FormControl>
        <InputLabel>Items</InputLabel>
        <Select id="pageSize" value={size.toString()} label="Items" onChange={handleSizeChange} autoWidth>
          <MenuItem value={5}>5</MenuItem >
          <MenuItem value={10}>10</MenuItem >
          <MenuItem value={20}>20</MenuItem >
          <MenuItem value={50}>50</MenuItem >
        </Select>
        </FormControl>
        <Fab variant="extended" color="primary" aria-label="add" onClick={handleAddOpen}>
          <AddIcon />
          Add
        </Fab>
        <AddTrainingModal 
          open={isAddOpen}
          handleAddClose={handleAddClose}
        />
      </Stack>
    </>
  );
}

export default TrainingPage;

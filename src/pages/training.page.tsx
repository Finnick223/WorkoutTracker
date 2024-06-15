import { useEffect, useState } from 'react';
import TrainingCard from '../components/TrainingItem.component.tsx';
import { Box, Button, CircularProgress, CssBaseline, FormControl, InputLabel, MenuItem, Select, Stack } from '@mui/material';
import { Training } from '../client/src';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { loadTrainings } from '../api/auth/index.ts';
import useAuthStatus from '../hooks/useAuth.ts';

function TrainingPage() {
  const [trainings, setTrainings] = useState<Training[]>([]);
  const [page, setPage] = useState<number>(0); // Start from page 0
  const [size, setSize] = useState<number>(10);
  const navigate = useNavigate();
  const { token } = useAuthStatus();

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
            name={training.name}
            description={training.description}
            key={training.id}
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
        <Select id="pageSize" value={size.toString()} label="Items"onChange={handleSizeChange} autoWidth>
          <MenuItem value={5}>5</MenuItem >
          <MenuItem value={10}>10</MenuItem >
          <MenuItem value={20}>20</MenuItem >
          <MenuItem value={50}>50</MenuItem >
        </Select>
        </FormControl>
      </Stack>
    </>
  );
}

export default TrainingPage;

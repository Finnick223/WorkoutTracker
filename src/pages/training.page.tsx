import { useEffect, useState } from 'react';
import TrainingCard from '../components/TrainingItem.component.tsx';
import { Box, CircularProgress, CssBaseline } from '@mui/material';
import { Configuration, Training, TrainingApi } from '../client/src';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import useAuthStatus from '../hooks/useAuth.ts';

function TrainingPage() {
  const [trainings, setTrainings] = useState<Training[]>([]);
  const [page, setPage] = useState<number>(0); // Start from page 0
  const [size, setSize] = useState<number>(10); // Default page size
  const { token } = useAuthStatus();
  const navigate = useNavigate();

  //TODO This should be in other file
  const config = new Configuration({
    username: 'string',
    password: 'string',
  });
  const api = new TrainingApi(config);

  const loadTrainings = async () => {
    const initOverrides = {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    };
    const requestParameters = {
      page: page,
      size: size,
    };
    return await api.getTrainings(requestParameters, initOverrides);
  };

  const { data, isSuccess, isLoading, isError } = useQuery({
    queryKey: ["trainings", page, size],
    queryFn: loadTrainings,
  });

  useEffect(() => {
    if (isSuccess) {
      setTrainings(data);
    }
    if (isError) {
      navigate('/error');
    }
  }, [isSuccess, isError, data, navigate]);

  const handleNextPage = () => {
    setPage(prevPage => prevPage + 1);
  };

  const handlePreviousPage = () => {
    setPage(prevPage => Math.max(prevPage - 1, 0));
  };

  const handleSizeChange = (event: { target: { value: string; }; }) => {
    setSize(parseInt(event.target.value));
    setPage(0);
  };

  return (
    <>
      <CssBaseline />
      <Box sx={{ display: 'inline-flex', textAlign: 'center' }}>
        {isLoading ? <CircularProgress /> : trainings.map((training) => (
          <TrainingCard
            id={training.id}
            name={training.name}
            description={training.description}
            key={training.id}
          />
        ))}
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
        <button onClick={handlePreviousPage} disabled={page === 0}>Previous Page</button>
        <button onClick={handleNextPage}>Next Page</button>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
        <label htmlFor="pageSize">Items per page:</label>
        <select id="pageSize" value={size} onChange={handleSizeChange}>
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={50}>50</option>
        </select>
      </Box>
    </>
  );
}

export default TrainingPage;

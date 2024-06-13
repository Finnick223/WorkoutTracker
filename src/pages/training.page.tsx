import { useEffect, useState } from 'react';
import TrainingCard from '../components/TrainingItem.component.tsx';
import { Box, CircularProgress, CssBaseline } from '@mui/material';
import { Configuration, Training, TrainingApi } from '../client/src';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import useAuthStatus from '../hooks/useAuth.ts';

function TrainingPage() {
  const [trainings, setTrainings] = useState<Training[]>([]);
  const { token } = useAuthStatus()
  const navigate = useNavigate();

  //TODO This should be in other file
  const config = new Configuration({
    username: 'string',
    password: 'string',
    });
    const api = new TrainingApi(config);
    const initOverrides = {
      headers: {
        'Authorization': `Bearer ${token}`
      }}
    const loadTrainings = async () => {
      const fetchedTrainings = await api.getTrainings(initOverrides);
      return fetchedTrainings
    }

    const {data, isSuccess, isLoading, isError} = useQuery({
      queryKey: ["trainings"], 
      queryFn: loadTrainings,
    });
    useEffect(() => {
      if (isSuccess) {
        setTrainings(data);
      }
      if (isError) {
        navigate('/error');
      }
    }, [isSuccess, isError]);

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
      </>
    );
  }
  
  export default TrainingPage;

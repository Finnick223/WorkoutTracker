import { useEffect, useState } from 'react';
import TrainingCard from '../components/TrainingItem.component.tsx';
import { Box, CssBaseline } from '@mui/material';
import { Configuration, Training, TrainingApi } from '../client/src';
import { redirect } from 'react-router-dom';

function TrainingPage() {
  const [trainings, setTrainings] = useState<Training[]>([]);

  const config = new Configuration({
    username: 'string',
    password: 'string',
  });

  useEffect(() => {
    const api = new TrainingApi(config);

    const loadTrainings = async () => {
      try {
        const token = localStorage.getItem('token');
        const initOverrides = {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        };

        const fetchedTrainings = await api.getTrainings(initOverrides);
        setTrainings(fetchedTrainings);
      } catch (error) {
        console.error('Error fetching trainings: ', error);
        redirect('/error');
      }
    };

    loadTrainings();
  }, []);

  return (
    <>
      <CssBaseline />
      <Box sx={{ display: 'inline-flex', textAlign: 'center' }}>
        {trainings.map((training) => (
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

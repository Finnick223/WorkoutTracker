import { useEffect, useState } from 'react';
import TrainingCard from '../components/TrainingItem.component.tsx';
import { Box, CssBaseline } from '@mui/material';
import { Training, Configuration, TrainingApi } from '../client/src/index.ts';
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
        const response = await api.getTrainings();
        const fetchedTrainings = response;
        setTrainings(fetchedTrainings);
      } catch (error) {
        console.error('Error fetching users: ', error);
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

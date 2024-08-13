import { Box, CircularProgress } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { getAllUserMeasurements } from 'src/api/userPage';
import { UserMeasurement } from 'src/client/src';
import MeasurementCard from 'src/modules/User/MeasurementAccordion.component';
import { useAuth } from 'src/providers/UserContext.provider';

function UserHistory() {
  const [Measurements, setMeasurements] = useState<UserMeasurement[]>([]);
  const { token } = useAuth();
  const { data, isSuccess, isError } = useQuery({
    queryFn: () => getAllUserMeasurements(token),
    queryKey: ['measurements'],
  });

  useEffect(() => {
    if (isSuccess) {
      setMeasurements(data);
    }
    if (isError) {
      console.log('dupa');
    }
  }, [isSuccess, isError, data]);
  return (
    <>
      <Grid2>
        <Box
          sx={{
            px: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {isSuccess ? (
            Measurements.map((measurement) => (
              <MeasurementCard
                key={measurement.id}
                createdOn={measurement.createdOn}
                age={measurement.age}
                height={measurement.height}
                weight={measurement.weight}
                arms={measurement.arms}
                chest={measurement.chest}
                belly={measurement.belly}
                legs={measurement.legs}
              />
            ))
          ) : (
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
              }}
            >
              <CircularProgress />
            </Box>
          )}
        </Box>
      </Grid2>
    </>
  );
}

export default UserHistory;

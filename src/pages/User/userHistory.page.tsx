import { Box, Container, Stack } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { AnimatePage } from 'src/animations/AnimatePage';
import { getAllUserMeasurements } from 'src/api/userPage';
import { UserMeasurement } from 'src/client/src';
import CustomLink from 'src/components/Link/Link.component';
import { AuthorizedRoute } from 'src/enums/routes.enums';
import MeasurementCard from 'src/modules/User/MeasurementCard.component';
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
      <AnimatePage>
        <Container maxWidth="lg">
          <Grid2 container direction={'column'}>
            <Grid2>
              <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={12}
                sx={{ pb: { xs: 2, sm: 2 } }}
              >
                <CustomLink href={AuthorizedRoute.User} color="inherit">
                  New Measurement
                </CustomLink>
                <CustomLink href={AuthorizedRoute.History} color="inherit">
                  History
                </CustomLink>
                <CustomLink href={AuthorizedRoute.Charts} color="inherit">
                  Charts
                </CustomLink>
              </Stack>
            </Grid2>
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
                {isSuccess
                  ? Measurements.map((measurement) => (
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
                  : ''}
              </Box>
            </Grid2>
          </Grid2>
        </Container>
      </AnimatePage>
    </>
  );
}

export default UserHistory;

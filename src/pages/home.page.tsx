import {
  Box,
  Container,
  Typography,
  Avatar,
  Paper,
  Button,
  Stack,
} from '@mui/material';
import SportsGymnasticsSharpIcon from '@mui/icons-material/SportsGymnasticsSharp';
import { AnimatePage } from 'src/animations/AnimatePage';
import useAuthStatus from 'src/hooks/useAuth';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { useUserMeasurements } from 'src/hooks/useUserMeasurements';
import CustomLink from 'src/components/Link/Link.component';
import { AuthorizedRoute } from 'src/enums/routes.enums';
import { SparkLineChart } from '@mui/x-charts';
import { useQuery } from '@tanstack/react-query';
import { loadTrainings } from 'src/api/training';

function Home() {
  const { isLoggedIn, token } = useAuthStatus();
  const {
    data: measurementData,
    isLoading: isMeasurementsLoading,
    error: measurementsError,
  } = useUserMeasurements();
  const {
    data: trainingData,
    isLoading: isTrainingLoading,
    error: trainingError,
  } = useQuery({
    queryKey: ['trainings', 0, 10],
    queryFn: () => loadTrainings(token, 0, 10),
  });

  if (!isLoggedIn) {
    return (
      <AnimatePage>
        <Container maxWidth="lg">
          <Box
            sx={{
              px: 10,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Avatar sx={{ m: 1 }}>
              <SportsGymnasticsSharpIcon fontSize="large" />
            </Avatar>
            <Typography variant="h2" sx={{ mb: 4 }}>
              Welcome in Workout tracker
            </Typography>
            <Typography variant="h6">
              This app is used to track your training progress over time and
              help with implementing progressive overload
            </Typography>
          </Box>
        </Container>
      </AnimatePage>
    );
  }

  if (isTrainingLoading || isMeasurementsLoading) {
    return (
      <AnimatePage>
        <Container maxWidth="lg">
          <Typography variant="h4">Loading data...</Typography>
        </Container>
      </AnimatePage>
    );
  }

  if (trainingError || measurementsError) {
    console.log(trainingError);
    console.log(measurementsError);
    return (
      <AnimatePage>
        <Container maxWidth="lg">
          <Typography variant="h4" color="error">
            Error loading data. Please try again later.
          </Typography>
        </Container>
      </AnimatePage>
    );
  }

  if (trainingData && measurementData) {
    return (
      <AnimatePage>
        <Container maxWidth="lg">
          <Grid2
            container
            alignItems={'center'}
            justifyContent={'center'}
            spacing={2}
          >
            <Grid2 xs={4}>
              <Paper component={Box} p={2}>
                <Typography gutterBottom color={'text.secondary'}>
                  Hello User
                </Typography>
                <Stack direction={'column'} spacing={2} p={2}>
                  <CustomLink href={AuthorizedRoute.Training} color="inherit">
                    <Button variant="outlined" fullWidth>
                      Add new training
                    </Button>
                  </CustomLink>
                  <CustomLink href={AuthorizedRoute.User} color="inherit">
                    <Button variant="outlined" fullWidth>
                      Add new measurement
                    </Button>
                  </CustomLink>
                </Stack>
              </Paper>
            </Grid2>
            <Grid2 xs={8}>
              <Paper component={Box} p={1}>
                <Typography color={'text.secondary'} gutterBottom>
                  Last measurement
                </Typography>
                {measurementData && (
                  <Box p={2}>
                    <Stack direction="row" spacing={3} pb={4}>
                      <Typography variant="h6" sx={{ wordSpacing: 12 }}>
                        Date: {measurementData[0].createdOn?.split('T')[0]}
                      </Typography>
                      <Typography variant="h6" sx={{ wordSpacing: 12 }}>
                        Weight: {measurementData[0].weight}
                      </Typography>
                    </Stack>
                    <Stack direction="row" spacing={3}>
                      <Typography variant="h6" sx={{ wordSpacing: 12 }}>
                        Arms: {measurementData[0].arms}cm
                      </Typography>
                      <Typography variant="h6" sx={{ wordSpacing: 12 }}>
                        Chest: {measurementData[0].chest}cm
                      </Typography>
                      <Typography variant="h6" sx={{ wordSpacing: 12 }}>
                        Belly: {measurementData[0].belly}cm
                      </Typography>
                      <Typography variant="h6" sx={{ wordSpacing: 12 }}>
                        Legs: {measurementData[0].legs}cm
                      </Typography>
                    </Stack>
                  </Box>
                )}
              </Paper>
            </Grid2>
            <Grid2 xs={12}>
              <Paper component={Box} p={2}>
                <Typography color={'text.secondary'} gutterBottom>
                  Weight and measurements progress
                </Typography>
                <Box sx={{ width: '100%' }}>
                  <Stack direction={'row'} spacing={2} alignItems={'center'}>
                    <Typography variant="h5">Weight</Typography>
                    <SparkLineChart
                      data={[1, 4, 2, 5, 7, 2, 4, 6]}
                      height={100}
                    />
                  </Stack>
                </Box>
              </Paper>
            </Grid2>
            <Grid2 xs={8}>
              <Paper component={Box} p={2}>
                <Typography gutterBottom color={'text.secondary'}>
                  Workout stats
                </Typography>
                <Button>
                  Add statistics with SPARK LINE! *first need to change
                  exercises name to select*
                </Button>
              </Paper>
            </Grid2>
            <Grid2 xs={4}>
              <Paper component={Box} p={2}>
                <Typography gutterBottom color={'text.secondary'}>
                  Last training at {trainingData[0].createdOn?.slice(0, 10)}
                </Typography>
                <CustomLink
                  href={`/training/${trainingData[0].id}`}
                  color="inherit"
                >
                  <Button>
                    {trainingData[0].name} {trainingData[0].description}
                  </Button>
                </CustomLink>
              </Paper>
            </Grid2>
          </Grid2>
        </Container>
      </AnimatePage>
    );
  }

  return null; // Fallback in case no data is available for some reason
}

export default Home;

import {
  Box,
  Container,
  Typography,
  Paper,
  Button,
  Stack,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { AnimatePage } from 'src/animations/AnimatePage';
import useAuthStatus from 'src/hooks/useAuth';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { useUserMeasurements } from 'src/hooks/useUserMeasurements';
import CustomLink from 'src/components/Link/Link.component';
import { AuthorizedRoute } from 'src/enums/routes.enums';
import { SparkLineChart } from '@mui/x-charts';
import { useQuery } from '@tanstack/react-query';
import { loadTrainings } from 'src/api/training';
import { getCurrentUser } from 'src/api/auth';
import { WelcomeScreen } from 'src/modules/Home/WelcomeScreen.component';
import { LoadingScreen } from 'src/modules/Home/LoadingScreen.component';
import { ErrorScreen } from 'src/modules/Home/ErrorScreen.component';
import { LastMeasurementCard } from 'src/modules/Home/LastMeasurementCard.component';
import { LastTrainingCard } from 'src/modules/Home/LastTrainingCard.component';

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

  const {
    data: profileData,
    isLoading: isProfileLoading,
    error: profileError,
  } = useQuery({
    queryKey: ['profile'],
    queryFn: () => getCurrentUser(token),
  });

  if (!isLoggedIn) return <WelcomeScreen />;
  if (isTrainingLoading || isMeasurementsLoading || isProfileLoading)
    return <LoadingScreen />;
  if (trainingError || measurementsError || profileError)
    return <ErrorScreen />;

  return (
    <AnimatePage>
      <Container maxWidth="lg">
        <Grid2
          container
          alignItems="center"
          justifyContent="center"
          spacing={2}
          mb={2}
        >
          <Grid2 xs={12} sm={4}>
            <Paper component={Box} p={2}>
              <Typography color="text.secondary" gutterBottom>
                Hi {profileData?.firstName}, welcome back!
              </Typography>
              <Stack direction="column" spacing={2} p={2}>
                <CustomLink href={AuthorizedRoute.Training} color="inherit">
                  <Button variant="outlined" fullWidth>
                    <AddIcon /> Add training
                  </Button>
                </CustomLink>
                <CustomLink href={AuthorizedRoute.User} color="inherit">
                  <Button variant="outlined" fullWidth>
                    <AddIcon /> Add measurement
                  </Button>
                </CustomLink>
              </Stack>
            </Paper>
          </Grid2>
          <Grid2 xs={12} sm={8}>
            <LastMeasurementCard measurementData={measurementData ?? []} />
          </Grid2>
          <Grid2 xs={12}>
            <Paper component={Box} p={2}>
              <Typography color="text.secondary" gutterBottom>
                Weight progress
              </Typography>
              <Box sx={{ width: '100%' }}>
                <Stack direction="row" alignItems="center">
                  <Typography variant="h5">Weight</Typography>
                  {measurementData && (
                    <SparkLineChart
                      data={measurementData
                        .map((item) => item.weight)
                        .filter(
                          (weight): weight is number => weight !== undefined,
                        )
                        .reverse()}
                      xAxis={{
                        scaleType: 'time',
                        data: measurementData
                          .map(
                            (item) =>
                              new Date(Date.parse(item.createdOn ?? '')),
                          )
                          .reverse(),
                      }}
                      height={100}
                      showTooltip
                      showHighlight
                    />
                  )}
                </Stack>
              </Box>
            </Paper>
          </Grid2>
          <Grid2 xs={12} sm={8}>
            <Paper component={Box} p={2}>
              <Typography gutterBottom color="text.secondary">
                Workout stats
              </Typography>
              <Button>
                Add statistics with SPARK LINE! *first need to change exercises
                name to select*
              </Button>
            </Paper>
          </Grid2>
          <Grid2 xs={12} sm={4}>
            <LastTrainingCard trainingData={trainingData ?? []} />
          </Grid2>
        </Grid2>
      </Container>
    </AnimatePage>
  );
}

export default Home;

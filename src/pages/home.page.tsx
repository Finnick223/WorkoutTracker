import {
  Box,
  Container,
  Typography,
  Paper,
  Button,
  Stack,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { AnimatePage } from 'src/animations/AnimatePage';
import useAuthStatus from 'src/hooks/useAuth';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { useUserMeasurements } from 'src/hooks/useUserMeasurements';
import CustomLink from 'src/components/Link/Link.component';
import { AuthorizedRoute } from 'src/enums/routes.enums';
import { useQuery } from '@tanstack/react-query';
import { loadTrainings } from 'src/api/training';
import { getCurrentUser } from 'src/api/auth';
import { WelcomeScreen } from 'src/modules/Home/WelcomeScreen.component';
import { LoadingScreen } from 'src/modules/Home/LoadingScreen.component';
import { ErrorScreen } from 'src/modules/Home/ErrorScreen.component';
import { LastMeasurementCard } from 'src/modules/Home/LastMeasurementCard.component';
import { LastTrainingCard } from 'src/modules/Home/LastTrainingCard.component';
import { exerciseNames } from 'src/constants/exerciseGrid.constants';
import { getExercisesByName } from 'src/api/exercise';
import { useCallback, useMemo, useState } from 'react';
import { ExerciseChart } from 'src/modules/Home/ExerciseChart.component';
import { WeightProgressChart } from 'src/modules/Home/WeightProgressChart.component';

function HomeWrapper() {
  const { isLoggedIn } = useAuthStatus();

  if (!isLoggedIn) {
    return <WelcomeScreen />;
  }

  return <Home />;
}

function Home() {
  const { token } = useAuthStatus();
  const [selectedExercise, setSelectedExercise] = useState('Bench Press');

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

  const { data: exerciseData } = useQuery({
    queryKey: ['Exercise', selectedExercise],
    queryFn: () => getExercisesByName(selectedExercise, token),
  });

  const measurementChartData = useMemo(() => {
    if (!measurementData) return { weights: [], dates: [] };

    const weights = measurementData
      .map((item) => item.weight)
      .filter((weight): weight is number => weight !== undefined)
      .reverse();

    const dates = measurementData
      .map((item) => new Date(Date.parse(item.createdOn ?? '')))
      .reverse();

    return { weights, dates };
  }, [measurementData]);

  const chartData = useMemo(() => {
    return exerciseData
      ? exerciseData.map((exercise) => {
          const maxWeight = exercise.sets
            ? Math.max(
                ...exercise.sets
                  .map((set) => set.weight)
                  .filter((weight): weight is number => weight !== undefined),
              )
            : 0;

          return {
            weight: maxWeight,
            date: new Date(Date.parse(exercise.createdOn ?? '')),
          };
        })
      : [];
  }, [exerciseData]);

  const weights = useMemo(
    () => chartData.map((data) => data.weight),
    [chartData],
  );
  const dates = useMemo(() => chartData.map((data) => data.date), [chartData]);

  const exerciseOptions = useMemo(
    () =>
      exerciseNames.map((name) => (
        <MenuItem key={name} value={name}>
          {name}
        </MenuItem>
      )),
    [],
  );

  const handleExerciseChange = useCallback(
    (event: SelectChangeEvent<string>) => {
      setSelectedExercise(event.target.value as string);
    },
    [],
  );

  if (isTrainingLoading || isMeasurementsLoading || isProfileLoading)
    return <LoadingScreen />;
  if (trainingError || measurementsError || profileError)
    return <ErrorScreen />;

  return (
    <AnimatePage>
      <Container maxWidth="lg">
        <Grid2
          container
          justifyContent="center"
          alignItems="stretch"
          spacing={2}
          mb={2}
        >
          <Grid2 xs={12} sm={4}>
            <Paper component={Box} p={2} sx={{ height: '100%' }}>
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
            <Paper component={Box} p={2} sx={{ height: '100%' }}>
              <Typography color="text.secondary" gutterBottom>
                Weight progress
              </Typography>
              <WeightProgressChart
                weights={measurementChartData.weights}
                dates={measurementChartData.dates}
              />
            </Paper>
          </Grid2>
          <Grid2 xs={12} sm={8}>
            <Paper component={Box} p={2} sx={{ height: '100%' }}>
              <Typography gutterBottom color="text.secondary">
                Workout stats
              </Typography>
              <Box sx={{ width: '100%' }}>
                <Stack direction="row" alignItems="center">
                  <FormControl>
                    <InputLabel id="exercise">Exercise</InputLabel>
                    <Select
                      id="exercise"
                      defaultValue={'Bench Press'}
                      label="Exercise"
                      onChange={handleExerciseChange}
                    >
                      {exerciseOptions}
                    </Select>
                  </FormControl>
                  <ExerciseChart weights={weights} dates={dates} />
                </Stack>
              </Box>
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

export default HomeWrapper;

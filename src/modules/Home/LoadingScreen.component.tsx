import { Box, Container, Paper, Skeleton, Stack } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';

export function LoadingScreen() {
  return (
    <Container maxWidth="lg">
      <Grid2
        container
        alignItems="center"
        justifyContent="center"
        spacing={2}
        mb={2}
      >
        {/* skeleton for profile */}
        <Grid2 xs={12} sm={4}>
          <Paper component={Box} p={2}>
            <Skeleton variant="text" width="60%" />
            <Stack direction="column" spacing={2} p={2}>
              <Skeleton variant="rectangular" height={40} />
              <Skeleton variant="rectangular" height={40} />
            </Stack>
          </Paper>
        </Grid2>

        {/* skeleton for last meas */}
        <Grid2 xs={12} sm={8}>
          <Paper component={Box} p={2}>
            <Skeleton variant="text" width="40%" />
            <Stack direction="row" spacing={2} pt={3}>
              <Skeleton variant="rectangular" width="40%" height={40} />
              <Skeleton variant="rectangular" width="40%" height={40} />
            </Stack>
            <Stack direction="row" spacing={2} pt={3}>
              <Skeleton variant="rectangular" width="40%" height={40} />
              <Skeleton variant="rectangular" width="40%" height={40} />
            </Stack>
          </Paper>
        </Grid2>

        {/* skeleton for weight progress */}
        <Grid2 xs={12}>
          <Paper component={Box} p={2}>
            <Skeleton variant="text" width="30%" />
            <Skeleton variant="rectangular" height={100} />
          </Paper>
        </Grid2>

        {/* skeleton for workout stat */}
        <Grid2 xs={12} sm={8}>
          <Paper component={Box} p={2}>
            <Skeleton variant="text" width="30%" />
            <Skeleton variant="rectangular" height={40} />
          </Paper>
        </Grid2>

        {/* skeleton for last training */}
        <Grid2 xs={12} sm={4}>
          <Paper component={Box} p={2}>
            <Skeleton variant="text" width="40%" />
            <Skeleton variant="rectangular" height={40} />
          </Paper>
        </Grid2>
      </Grid2>
    </Container>
  );
}

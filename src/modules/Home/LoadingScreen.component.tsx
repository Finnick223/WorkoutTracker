import { Box, Container, Paper, Skeleton, Stack } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';

export function LoadingScreen() {
  return (
    <Container maxWidth="lg">
      <Grid2
        container
        alignItems="stretch"
        justifyContent="center"
        spacing={2}
        mb={2}
      >
        {/* skeleton for new buttons */}
        <Grid2 xs={12} sm={4}>
          <Paper component={Box} p={2} sx={{ height: '100%' }}>
            <Skeleton variant="text" width="60%" />
            <Stack direction="column" spacing={{ sm: 4, md: 2 }} p={2}>
              <Skeleton variant="rectangular" height={50} />
              <Skeleton variant="rectangular" height={50} />
            </Stack>
          </Paper>
        </Grid2>

        {/* skeleton for last meas */}
        <Grid2 xs={12} sm={8}>
          <Paper component={Box} p={2} sx={{ height: '100%' }}>
            <Skeleton variant="text" width="40%" />
            <Stack direction="row" spacing={2} pt={2}>
              <Skeleton variant="rectangular" width="40%" height={40} />
              <Skeleton variant="rectangular" width="40%" height={40} />
            </Stack>
            <Stack direction="row" spacing={2} pt={3}>
              <Skeleton variant="rectangular" width="40%" height={60} />
              <Skeleton variant="rectangular" width="40%" height={60} />
            </Stack>
          </Paper>
        </Grid2>

        {/* skeleton for weight progress */}
        <Grid2 xs={12}>
          <Paper component={Box} p={2} sx={{ height: '100%' }}>
            <Skeleton variant="text" width="30%" />
            <Skeleton variant="rectangular" height={100} />
          </Paper>
        </Grid2>

        {/* skeleton for workout stat */}
        <Grid2 xs={12} sm={8}>
          <Paper component={Box} p={2} sx={{ height: '100%' }}>
            <Skeleton variant="text" width="30%" />
            <Skeleton variant="rectangular" height={100} />
          </Paper>
        </Grid2>

        {/* skeleton for last training */}
        <Grid2 xs={12} sm={4}>
          <Paper component={Box} p={2} sx={{ height: '100%' }}>
            <Skeleton variant="text" width="40%" />
            <Skeleton variant="rectangular" height={100} />
          </Paper>
        </Grid2>
      </Grid2>
    </Container>
  );
}

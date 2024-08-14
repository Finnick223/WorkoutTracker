import { Box, Stack, Typography } from '@mui/material';
import { MeasurementChart } from 'src/modules/User/MeasurementChart.component';

function UserCharts() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        spacing={2}
        alignItems={'center'}
      >
        <Typography variant="h4">Weight Chart</Typography>
        <MeasurementChart dataKey="weight" />
      </Stack>

      <Stack
        direction={{ xs: 'column', md: 'row' }}
        spacing={2}
        alignItems={'center'}
      >
        <Typography variant="h4">Arms Chart</Typography>
        <MeasurementChart dataKey="arms" />
      </Stack>

      <Stack
        direction={{ xs: 'column', md: 'row' }}
        spacing={2}
        alignItems={'center'}
      >
        <Typography variant="h4">Chest Chart</Typography>
        <MeasurementChart dataKey="chest" />
      </Stack>

      <Stack
        direction={{ xs: 'column', md: 'row' }}
        spacing={2}
        alignItems={'center'}
      >
        <Typography variant="h4">Belly Chart</Typography>
        <MeasurementChart dataKey="belly" />
      </Stack>

      <Stack
        direction={{ xs: 'column', md: 'row' }}
        spacing={2}
        alignItems={'center'}
      >
        <Typography variant="h4">Legs Chart</Typography>
        <MeasurementChart dataKey="legs" />
      </Stack>
    </Box>
  );
}

export default UserCharts;

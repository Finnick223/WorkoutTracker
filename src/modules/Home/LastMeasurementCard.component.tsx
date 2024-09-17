import { Box, Paper, Stack, Typography } from '@mui/material';
import { LastMeasurementCardProps } from 'src/interfaces/user.interfaces';

export const LastMeasurementCard: React.FC<LastMeasurementCardProps> = ({
  measurementData,
}) => (
  <Paper component={Box} p={2} sx={{ height: '100%' }}>
    <Typography color={'text.secondary'}>Last measurement</Typography>
    <Box p={2}>
      <Stack direction="row" spacing={2} pb={2}>
        <Typography variant="h6" sx={{ wordSpacing: 20 }}>
          Date: {measurementData[0].createdOn?.split('T')[0]}
        </Typography>
        <Typography variant="h6" sx={{ wordSpacing: 20 }}>
          Weight: {measurementData[0].weight}kg
        </Typography>
      </Stack>
      <Stack direction="row" spacing={3}>
        <Typography
          variant="h6"
          sx={{ display: 'flex', flexDirection: 'column' }}
        >
          Arms: <span>{measurementData[0].arms}cm</span>
        </Typography>
        <Typography
          variant="h6"
          sx={{ display: 'flex', flexDirection: 'column' }}
        >
          Chest: <span>{measurementData[0].chest}cm</span>
        </Typography>
        <Typography
          variant="h6"
          sx={{ display: 'flex', flexDirection: 'column' }}
        >
          Belly: <span>{measurementData[0].belly}cm</span>
        </Typography>
        <Typography
          variant="h6"
          sx={{ display: 'flex', flexDirection: 'column' }}
        >
          Legs: <span>{measurementData[0].legs}cm</span>
        </Typography>
      </Stack>
    </Box>
  </Paper>
);

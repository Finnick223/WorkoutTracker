import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box, Paper, Stack } from '@mui/material';
import { UserMeasurement } from 'src/client/src';

export default function MeasurementCard(props: UserMeasurement) {
  return (
    <Paper elevation={4} sx={{ width: '100%' }}>
      <Card sx={{ width: '100%' }}>
        <CardContent>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              //   justifyContent: 'space-between',
              //   alignItems: 'center',
              //   pr: 8,
            }}
          >
            <Stack direction="row" spacing={8} pb={2}>
              <Typography sx={{ fontSize: 14 }} gutterBottom>
                Date: <br />
                {props.createdOn?.split('T')[0]}
              </Typography>
              <Typography sx={{ fontSize: 14 }} gutterBottom>
                Age: <br />
                {props.age}
              </Typography>
              <Typography sx={{ fontSize: 14 }} gutterBottom>
                Height: <br />
                {props.height}
              </Typography>
              <Typography sx={{ fontSize: 14 }} gutterBottom>
                Weight: <br />
                {props.weight}
              </Typography>
            </Stack>
            <Stack direction="row" spacing={8}>
              <Typography variant="h6" component="div">
                Arms: <br />
                {props.arms}
              </Typography>
              <Typography variant="h6" component="div">
                Chest: <br />
                {props.chest}
              </Typography>
              <Typography variant="h6" component="div">
                Belly: <br />
                {props.belly}
              </Typography>
              <Typography variant="h6" component="div">
                Legs: <br />
                {props.legs}
              </Typography>
            </Stack>
          </Box>
        </CardContent>
      </Card>
    </Paper>
  );
}

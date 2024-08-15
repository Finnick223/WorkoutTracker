import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Stack,
  Typography,
} from '@mui/material';
import { UserMeasurement } from 'src/client/src';

export default function MeasurementCard(props: UserMeasurement) {
  return (
    <Accordion sx={{ width: '80%' }}>
      <AccordionSummary expandIcon={<ArrowDownwardIcon />}>
        <Stack direction="row" spacing={3}>
          <Typography>Date: {props.createdOn?.split('T')[0]}</Typography>
          <Typography>Weight: {props.weight}</Typography>
        </Stack>
      </AccordionSummary>
      <AccordionDetails>
        <Stack direction="column" spacing={1}>
          <Typography variant="h6" sx={{ wordSpacing: 12 }}>
            Arms: {props.arms}cm
          </Typography>
          <Typography variant="h6" sx={{ wordSpacing: 12 }}>
            Chest: {props.chest}cm
          </Typography>
          <Typography variant="h6" sx={{ wordSpacing: 12 }}>
            Belly: {props.belly}cm
          </Typography>
          <Typography variant="h6" sx={{ wordSpacing: 12 }}>
            Legs: {props.legs}cm
          </Typography>
        </Stack>
      </AccordionDetails>
    </Accordion>
  );
}

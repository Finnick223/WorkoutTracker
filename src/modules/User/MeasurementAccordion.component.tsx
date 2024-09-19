import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Stack,
  Typography,
} from '@mui/material';
import { InfiniteData } from '@tanstack/react-query';
import { Fragment } from 'react/jsx-runtime';
import { UserMeasurement } from 'src/client/src';

const MeasurementCard = (props: UserMeasurement) => {
  return (
    <Accordion sx={{ width: '100%' }}>
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
};

export const MeasurementAccordion = ({
  data,
}: {
  data: InfiniteData<UserMeasurement[]>;
}) => {
  return (
    <>
      {data.pages.map((group, i) => (
        <Fragment key={i}>
          {group.map((measurement) => (
            <MeasurementCard
              key={measurement.id}
              createdOn={measurement.createdOn}
              weight={measurement.weight}
              arms={measurement.arms}
              chest={measurement.chest}
              belly={measurement.belly}
              legs={measurement.legs}
            />
          ))}
        </Fragment>
      ))}
    </>
  );
};

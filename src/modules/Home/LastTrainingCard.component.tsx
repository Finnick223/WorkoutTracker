import { Box, Button, Paper, Typography } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Training } from 'src/client/src';
import CustomLink from 'src/components/Link/Link.component';

interface LastTrainingCardProps {
  trainingData: Training[];
}

export const LastTrainingCard: React.FC<LastTrainingCardProps> = ({
  trainingData,
}) => (
  <Paper component={Box} p={2}>
    <Typography gutterBottom color={'text.secondary'}>
      Last training at {trainingData[0].createdOn?.slice(0, 10)}
    </Typography>
    <CustomLink href={`/training/${trainingData[0].id}`} color="inherit">
      <Button>
        {trainingData[0].name} {trainingData[0].description}{' '}
        <ArrowForwardIcon />
      </Button>
    </CustomLink>
  </Paper>
);

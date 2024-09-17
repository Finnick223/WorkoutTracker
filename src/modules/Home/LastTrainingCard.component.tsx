import { Box, Button, Paper, Typography } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CustomLink from 'src/components/Link/Link.component';
import { LastTrainingCardProps } from 'src/interfaces/training.interfaces';

export const LastTrainingCard: React.FC<LastTrainingCardProps> = ({
  trainingData,
}) => (
  <Paper component={Box} p={2} sx={{ height: '100%' }}>
    <Typography gutterBottom color={'text.secondary'}>
      Last training at {trainingData[0].createdOn?.slice(0, 10)}
    </Typography>
    <Box display="flex" alignItems="center" mt={{ xs: 4, sm: 2, md: 4 }}>
      <CustomLink href={`/training/${trainingData[0].id}`} color="inherit">
        <Button>
          {trainingData[0].name} {trainingData[0].description}{' '}
          <ArrowForwardIcon />
        </Button>
      </CustomLink>
    </Box>
  </Paper>
);

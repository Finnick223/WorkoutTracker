import { Container, Typography } from '@mui/material';
import { AnimatePage } from 'src/animations/AnimatePage';

export const ErrorScreen = () => (
  <AnimatePage>
    <Container maxWidth="lg">
      <Typography variant="h4" color="error">
        Error loading data. Please try again later.
      </Typography>
    </Container>
  </AnimatePage>
);

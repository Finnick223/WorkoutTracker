import { Container, Typography } from '@mui/material';
import { AnimatePage } from 'src/animations/AnimatePage';

export const LoadingScreen = () => (
  <AnimatePage>
    <Container maxWidth="lg">
      <Typography variant="h4">Loading data...</Typography>
    </Container>
  </AnimatePage>
);

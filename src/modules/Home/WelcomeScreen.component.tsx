import { Avatar, Box, Container, Typography } from '@mui/material';
import { AnimatePage } from 'src/animations/AnimatePage';
import SportsGymnasticsSharpIcon from '@mui/icons-material/SportsGymnasticsSharp';

export const WelcomeScreen = () => (
  <AnimatePage>
    <Container maxWidth="lg">
      <Box
        sx={{
          px: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Avatar sx={{ m: 1 }}>
          <SportsGymnasticsSharpIcon fontSize="large" />
        </Avatar>
        <Typography variant="h2" sx={{ mb: 4 }}>
          Welcome in Workout tracker
        </Typography>
        <Typography variant="h6">
          This app is used to track your training progress over time and help
          with implementing progressive overload.
        </Typography>
      </Box>
    </Container>
  </AnimatePage>
);

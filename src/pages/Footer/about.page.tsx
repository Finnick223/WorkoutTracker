import { Container, Typography, Box } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';

function About() {
  return (
    <Container>
      <Box
        mt={4}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <InfoIcon sx={{ m: 1 }} fontSize="large" />
        <Typography variant="h4" gutterBottom>
          About Us
        </Typography>
        <Typography variant="body1">
          Our goal is to help you manage your workouts and stay fit. It's hobby
          app we created to help people and it's free to use.
        </Typography>
      </Box>
    </Container>
  );
}

export default About;

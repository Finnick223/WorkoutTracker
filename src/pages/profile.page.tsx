import { Box, Container, CssBaseline, Typography, Avatar } from '@mui/material';
function Profile() {
  return (
    <>
      <Container maxWidth="lg">
        <CssBaseline />
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
          </Avatar>
          <Typography variant="h2" sx={{ mb: 4 }}>
            Profile page 
          </Typography>
          <Typography variant="h6">
            User informations
          </Typography>
        </Box>
      </Container>
    </>
  );
}

export default Profile;

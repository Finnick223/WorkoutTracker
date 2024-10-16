import {
  Container,
  Typography,
  Box,
  Stack,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
} from '@mui/material';
import GroupsIcon from '@mui/icons-material/Groups';

function Team() {
  const handleCardClick = (url: string) => {
    window.open(url, '_blank');
  };

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
        <GroupsIcon fontSize="large" />
        <Typography variant="h4" gutterBottom>
          Meet the Team
        </Typography>
        <Typography variant="body1">
          We are a passionate team of developers, fitness enthusiasts dedicated
          to bringing you the best workout tracker experience.
        </Typography>
        <Stack direction={{ xs: 'column', sm: 'row' }} m={4} gap={4}>
          <Card
            sx={{ maxWidth: 345 }}
            onClick={() => handleCardClick('https://github.com/Finnick223')}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                image="https://avatars.githubusercontent.com/u/133808872?v=4"
                alt="github avatar"
                height={250}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Finnick223
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Front-end
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card
            sx={{ maxWidth: 345 }}
            onClick={() => handleCardClick('https://github.com/Wojtur28')}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                image="https://avatars.githubusercontent.com/u/79547731?v=4"
                alt="github avatar"
                height={250}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Wojtur28
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Back-end
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Stack>
      </Box>
    </Container>
  );
}

export default Team;

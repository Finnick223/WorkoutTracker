import { motion } from 'framer-motion';
import { Box, Container, Typography, Avatar, Button } from '@mui/material';
import SportsGymnasticsSharpIcon from '@mui/icons-material/SportsGymnasticsSharp';
import { useContext } from 'react';
import { ColorModeContext } from 'src/providers/MaterialUI.provider';
function Home() {
  const colorMode = useContext(ColorModeContext);

  return (
    <>
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
          <Button
            onClick={colorMode.toggleColorMode}
            component={motion.div}
            whileHover={{
              scale: 1.2,
              transition: { duration: 0.3 },
            }}
            whileTap={{ scale: 0.9 }}
          >
            DARK MODE *prototype*
          </Button>
          <Avatar sx={{ m: 1 }}>
            <SportsGymnasticsSharpIcon fontSize="large" />
          </Avatar>
          <Typography variant="h2" sx={{ mb: 4 }}>
            Welcome in Workout tracker
          </Typography>
          <Typography variant="h6">
            This app is used to track your training progress over time and help
            with implementing progressive overload
          </Typography>
        </Box>
      </Container>
    </>
  );
}

export default Home;

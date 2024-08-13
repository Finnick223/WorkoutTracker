import { Box, Typography } from '@mui/material';
function UserCharts() {
  return (
    <>
      <Box
        sx={{
          px: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant="h2" sx={{ mb: 4 }}>
          Wykresy
        </Typography>
      </Box>
    </>
  );
}

export default UserCharts;

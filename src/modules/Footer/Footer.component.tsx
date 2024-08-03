import { Stack, Typography } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';

export const Footer = () => {
  return (
    <Grid2
      container
      py={2}
      sx={{
        backgroundColor: 'gray',
      }}
    >
      <Grid2 md={4}>
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <Typography>dupa</Typography>
          <Typography>dupa</Typography>
          <Typography>dupa</Typography>
        </Stack>
      </Grid2>
      <Grid2 md={4}>
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <Typography>dupa</Typography>
          <Typography>dupa</Typography>
          <Typography>dupa</Typography>
        </Stack>
      </Grid2>
      <Grid2 md={4}>
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <Typography>dupa</Typography>
          <Typography>dupa</Typography>
          <Typography>dupa</Typography>
        </Stack>
      </Grid2>
    </Grid2>
  );
};

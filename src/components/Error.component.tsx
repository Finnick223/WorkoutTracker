import { Typography } from '@mui/material';

export default function errorText({ message }: { message: string }) {
  return (
    <>
      <Typography
        color="red"
        align="center"
        sx={{
          '&::first-letter': {
            textTransform: 'uppercase',
          },
          mt: 2,
        }}
      >
        {message}
      </Typography>
    </>
  );
}

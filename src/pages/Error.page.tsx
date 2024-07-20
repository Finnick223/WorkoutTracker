import { Button, CssBaseline, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useRouteError } from 'react-router-dom';
import errorText from 'src/components/Error.component';

export const ErrorPage = () => {
  // const error: any = useRouteError();

  return (
    <>
      <CssBaseline />
      <Grid container alignContent="center" direction="column">
        <Typography>Apka napotkała błąd</Typography>
        {/* {errorText(error)} */}
        <Link to="/">
          <Button variant="contained">Powrót do strony głównej</Button>
        </Link>
      </Grid>
    </>
  );
};

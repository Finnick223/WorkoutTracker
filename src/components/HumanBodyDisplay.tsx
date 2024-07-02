import { Grid } from '@mui/material';
import { BodyComponent } from 'reactjs-human-body';

const BodyDisplay = ({ params }: {params: any}) => {
  return (
    <Grid container justifyContent="center">
      {params ? (
        <BodyComponent partsInput={params} />
      ) : (
        <div>
          <BodyComponent />
        </div>
      )}
    </Grid>
  );
};

export default BodyDisplay;
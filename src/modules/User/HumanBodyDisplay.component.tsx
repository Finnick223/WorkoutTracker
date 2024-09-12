import { Grid } from '@mui/material';
import { BodyComponent } from 'reactjs-human-body';
import { PartsInput } from 'reactjs-human-body/dist/components/BodyComponent/BodyComponent';

const BodyDisplay = ({ params }: { params: PartsInput | undefined }) => {
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

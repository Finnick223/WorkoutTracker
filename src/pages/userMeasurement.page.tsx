import { CssBaseline, Grid } from '@mui/material';
import { useState } from 'react';
import { useUserMeasurements } from 'src/hooks/useUserMeasurements';
import MeasurementForm from 'src/modules/User/MeasurementForm';
import BodyDisplay from 'src/components/HumanBodyDisplay.component';

function UserPage() {
  const [params, setParams] = useState<any>();
  const { data, isSuccess, mutate, token, ErrorModalComponent } =
    useUserMeasurements();

  const handlePartChange = (part: string) => {
    setParams(null);
    setTimeout(() => {
      if (part === 'arms') {
        setParams({
          leftArm: { selected: true },
          rightArm: { selected: true },
        });
      } else if (part === 'legs') {
        setParams({
          leftLeg: { selected: true },
          rightLeg: { selected: true },
        });
      } else {
        setParams({
          [part]: { selected: true },
        });
      }
    }, 0);
  };

  const handleSubmit = (userMeasurement: any) => {
    mutate({ token, userMeasurement });
  };

  return (
    <>
      <CssBaseline />
      <Grid container sx={{ p: 10 }}>
        <Grid item direction={'column'} xs={4}>
          {isSuccess && data && (
            <MeasurementForm
              measurements={data}
              onSubmit={handleSubmit}
              onPartChange={handlePartChange}
            />
          )}
        </Grid>
        <Grid item xs={8}>
          <BodyDisplay params={params} />
        </Grid>
      </Grid>
      <ErrorModalComponent />
    </>
  );
}

export default UserPage;

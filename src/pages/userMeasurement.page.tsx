import { CssBaseline, Grid } from '@mui/material';
import { useState } from 'react';
import { useUserMeasurements } from 'src/hooks/useUserMeasurements';
import MeasurementForm from 'src/modules/User/MeasurementForm';
import BodyDisplay from 'src/components/HumanBodyDisplay.component';
import { UserMeasurement } from 'src/client/src';
import { PartsInput } from 'reactjs-human-body/dist/components/BodyComponent/BodyComponent';

function UserPage() {
  const [params, setParams] = useState<PartsInput | undefined>(undefined);
  const { data, isSuccess, mutate, token, ErrorModalComponent } =
    useUserMeasurements();

  const handlePartChange = (part: 'arms' | 'legs' | keyof PartsInput) => {
    setParams(undefined);
    setTimeout(() => {
      const updatedParams: PartsInput = {
        head: { selected: false },
        leftShoulder: { selected: false },
        rightShoulder: { selected: false },
        leftArm: { selected: false },
        rightArm: { selected: false },
        chest: { selected: false },
        stomach: { selected: false },
        leftLeg: { selected: false },
        rightLeg: { selected: false },
        rightHand: { selected: false },
        leftHand: { selected: false },
        leftFoot: { selected: false },
        rightFoot: { selected: false },
      };

      if (part === 'arms') {
        updatedParams.leftArm.selected = true;
        updatedParams.rightArm.selected = true;
      } else if (part === 'legs') {
        updatedParams.leftLeg.selected = true;
        updatedParams.rightLeg.selected = true;
      } else {
        updatedParams[part].selected = true;
      }

      setParams(updatedParams);
    }, 0);
  };

  const handleSubmit = (userMeasurement: UserMeasurement) => {
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

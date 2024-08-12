import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { useState } from 'react';
import { useUserMeasurements } from 'src/hooks/useUserMeasurements';
import MeasurementForm from 'src/modules/User/MeasurementForm';
import BodyDisplay from 'src/components/HumanBodyDisplay.component';
import { UserMeasurement } from 'src/client/src';
import { PartsInput } from 'reactjs-human-body/dist/components/BodyComponent/BodyComponent';
import { AnimatePage } from 'src/animations/AnimatePage';
import CustomLink from 'src/components/Link/Link.component';
import { Stack } from '@mui/material';
import { AuthorizedRoute } from 'src/enums/routes.enums';

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
      <AnimatePage>
        <Grid2 container direction={'column'} sx={{ px: { xs: 2, sm: 8 } }}>
          <Grid2>
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={10}
              sx={{ pb: { xs: 2, sm: 2 } }}
            >
              <CustomLink href={AuthorizedRoute.User} color="inherit">
                New Measurement
              </CustomLink>
              <CustomLink href={AuthorizedRoute.History} color="inherit">
                History
              </CustomLink>
              <CustomLink href={AuthorizedRoute.Charts} color="inherit">
                Wykresy
              </CustomLink>
            </Stack>
          </Grid2>
          <Grid2
            container
            direction={'row'}
            justifyContent={'center'}
            alignContent={'center'}
            alignItems={'center'}
          >
            <Grid2 xs={12} sm={5}>
              {isSuccess && data && (
                <MeasurementForm
                  measurements={data}
                  onSubmit={handleSubmit}
                  onPartChange={handlePartChange}
                />
              )}
            </Grid2>
            <Grid2 xs={12} sm={7}>
              <BodyDisplay params={params} />
            </Grid2>
          </Grid2>
        </Grid2>
      </AnimatePage>
      <ErrorModalComponent />
    </>
  );
}

export default UserPage;

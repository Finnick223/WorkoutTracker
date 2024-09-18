import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { useState } from 'react';
import { useUserMeasurements } from 'src/hooks/useUserMeasurements';
import MeasurementForm from 'src/modules/User/MeasurementForm';
import BodyDisplay from 'src/modules/User/HumanBodyDisplay.component';
import { UserMeasurement } from 'src/client/src';
import { PartsInput } from 'reactjs-human-body/dist/components/BodyComponent/BodyComponent';
import { Container } from '@mui/material';
import { getCurrentUser } from 'src/api/auth';
import { useQuery } from '@tanstack/react-query';
import { FormSkeleton } from 'src/modules/User/LoadingSkeletons.component';

export default function UserMeasurementPage() {
  const [params, setParams] = useState<PartsInput | undefined>(undefined);
  const { isSuccess, mutate, token, ErrorModalComponent } =
    useUserMeasurements();

  const { data: profileData, isSuccess: isProfileSuccess } = useQuery({
    queryKey: ['profile'],
    queryFn: () => getCurrentUser(token),
  });

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
      <Container maxWidth="md">
        <Grid2
          container
          spacing={2}
          direction="row"
          justifyContent="center"
          alignItems="flex-start"
        >
          <Grid2
            xs={12}
            sm={6}
            sx={{
              py: 6,
            }}
          >
            {isSuccess && isProfileSuccess ? (
              <MeasurementForm
                height={profileData?.height || ''}
                onSubmit={handleSubmit}
                onPartChange={handlePartChange}
              />
            ) : (
              <FormSkeleton />
            )}
          </Grid2>

          <Grid2 xs={12} sm={6}>
            <BodyDisplay params={params} />
          </Grid2>
        </Grid2>
      </Container>
      <ErrorModalComponent />
    </>
  );
}

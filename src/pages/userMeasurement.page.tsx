import { Button, CssBaseline, Grid, TextField } from '@mui/material';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { BodyComponent } from 'reactjs-human-body';
import { getUserMeasurement, updateUserMeasurement } from '../api/auth';
import useAuthStatus from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { UserMeasurement } from '../client/src';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

function UserPage() {
  const [measurements, setMeasurements] = useState<UserMeasurement>()
  const [params, setParams] = useState<any>();
  const { token } = useAuthStatus();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const queryClient = useQueryClient();


  const handlePartChange = (part: string) => {
    setParams(null);
    setTimeout(() => {
      if(part==='arms'){
        setParams({
          leftArm: { selected: true },
          rightArm: { selected: true },
        })
      }
      else if(part==='legs'){
        setParams({
          leftLeg: {selected: true},
          rightLeg: {selected: true},
        })
      } else{
        setParams({
        [part]: { selected: true },
        })
      }
  }, 0);
  };

  const {data, isSuccess, isError } = useQuery({
    queryKey: ['Measurements'],
    queryFn: () => getUserMeasurement(token)
  });

  useEffect(() => {
    if (isSuccess) {
      setMeasurements(data);
    }
    if (isError) {
      navigate('/error');
    }
  }, [isSuccess, isError, data]);
  

  const { mutate } = useMutation({
    mutationFn: updateUserMeasurement,
    onSuccess: (data) => {
      queryClient.setQueryData(['Measurements'], data)
      toast.success("Measurements updated successfully")
    },
    onError: (error) => {
      toast.error("err : " + error)
    }
  })
  const submit = handleSubmit((userMeasurement) => mutate({token, userMeasurement}));

  return (
    <Grid container sx={{ flex: 1, px: 8 }}>
      <CssBaseline />
      <form onSubmit={submit}>
      {measurements && (
        <>
          <Grid container xs={12} justifyContent="center" direction={'row'}>
            <TextField
              label="Age"
              variant="outlined"
              margin="normal"
              defaultValue={measurements.age}
              {...register("age")}
            />
            <TextField
              label="Height"
              variant="outlined"
              margin="normal"
              defaultValue={measurements.height}
              {...register("height")}
            />
            <TextField
              label="Weight"
              variant="outlined"
              margin="normal"
              defaultValue={measurements.weight}
              {...register("weight")}
            />
          </Grid>
          <Grid container xs={6} justifyContent="center" direction={'column'}>
            <TextField
              label="Arms"
              variant="outlined"
              margin="normal"
              onClick={() => handlePartChange('arms')}
              defaultValue={measurements.arms}
              {...register("arms")}
            />
            <TextField
              label="Chest"
              variant="outlined"
              margin="normal"
              onClick={() => handlePartChange('chest')}
              defaultValue={measurements.chest}
              {...register("chest")}
            />
            <TextField
              label="Stomach"
              variant="outlined"
              margin="normal"
              onClick={() => handlePartChange('stomach')}
              defaultValue={measurements.belly}
              {...register("belly")}
            />
            <TextField
              label="Legs"
              variant="outlined"
              margin="normal"
              onClick={() => handlePartChange('legs')}
              defaultValue={measurements.legs}
              {...register("legs")}
            />
            <Button variant='contained' type='submit' sx={{ mt: 4 }}>
              Update
            </Button>
          </Grid>
        </>
      )}
      </form>
      <Grid container xs={6} justifyContent="center">
        {params ? (
            <BodyComponent
              partsInput={params}
            />
        ) : (
          <div>
            <BodyComponent />
          </div>
        )}
      </Grid>
    </Grid>
  );
}

export default UserPage;

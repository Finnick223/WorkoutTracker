import { Button, CssBaseline, Grid, TextField } from '@mui/material';
import { useState } from 'react';
import { Form } from 'react-hook-form';
import { BodyComponent } from 'reactjs-human-body';


function UserPage() {
  const [params, setParams] = useState<any>();

  const exampleParams = {
    head: { selected: true },
    left_arm: { show: false }
  }

  return (
      <Grid container sx={{ flex: 1, px: 8 }}>
      <CssBaseline />
        <Grid container xs={12} justifyContent="center" direction={'row'} >
        <TextField
              // {...register("firstName")}
              // defaultValue={user?.firstName}
              label="Age"
              variant="outlined"
              margin="normal"
          />
          <TextField
              // {...register("firstName")}
              // defaultValue={user?.firstName}
              label="Height"
              variant="outlined"
              margin="normal"
          />
          <TextField
              // {...register("firstName")}
              // defaultValue={user?.firstName}
              label="Weight"
              variant="outlined"
              margin="normal"
          />
        </Grid>
        <Grid container xs={6} justifyContent="center" direction={'column'} > 
          <TextField
              // {...register("firstName")}
              // defaultValue={user?.firstName}
              label="Arms"
              variant="outlined"
              margin="normal"
          />
          <TextField
              // {...register("firstName")}
              // defaultValue={user?.firstName}
              label="Chest"
              variant="outlined"
              margin="normal"
              onClick={() => setParams({
                chest: { selected: true },
                })}
          />
          <TextField
              // {...register("firstName")}
              // defaultValue={user?.firstName}
              label="Belly"
              variant="outlined"
              margin="normal"
              onClick={() => setParams(exampleParams)}
              onSelect={() => setParams(exampleParams)}
              onFocus={() => setParams(exampleParams)}
          />
          <TextField
              // {...register("firstName")}
              // defaultValue={user?.firstName}
              label="Legs"
              variant="outlined"
              margin="normal"
          />
          <Button variant='contained' type='submit' sx={{mt: 4}}>
            Update
          </Button>
        </Grid>
        <Grid container xs={6} justifyContent="center"> 
        <BodyComponent 
          partsInput={params}
        />
        </Grid>
      </Grid>
  );
}

export default UserPage;

import { Button, CssBaseline, Grid, TextField } from '@mui/material';
import { useState } from 'react';
import { BodyComponent } from 'reactjs-human-body';


function UserPage() {
  const [params, setParams] = useState<any>();

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
  
  return (
    <Grid container sx={{ flex: 1, px: 8 }}>
      <CssBaseline />
      <Grid container xs={12} justifyContent="center" direction={'row'}>
        <TextField
          label="Age"
          variant="outlined"
          margin="normal"
        />
        <TextField
          label="Height"
          variant="outlined"
          margin="normal"
        />
        <TextField
          label="Weight"
          variant="outlined"
          margin="normal"
        />
      </Grid>
      <Grid container xs={6} justifyContent="center" direction={'column'}>
        <TextField
          label="Arms"
          variant="outlined"
          margin="normal"
          onClick={() => handlePartChange('arms')}
        />
        <TextField
          label="Chest"
          variant="outlined"
          margin="normal"
          onClick={() => handlePartChange('chest')}
        />
        <TextField
          label="Stomach"
          variant="outlined"
          margin="normal"
          onClick={() => handlePartChange('stomach')}
        />
        <TextField
          label="Legs"
          variant="outlined"
          margin="normal"
          onClick={() => handlePartChange('legs')}
        />
        <Button variant='contained' type='submit' sx={{ mt: 4 }}>
          Update
        </Button>
      </Grid>
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

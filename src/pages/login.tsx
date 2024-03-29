import { useState } from 'react'
import { 
  Box,
  TextField,
  FormControl, 
  InputLabel, 
  Avatar, 
  OutlinedInput, 
  InputAdornment, 
  IconButton, 
  Container, 
  CssBaseline, 
  Typography, 
  Grid, 
  Button, 
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import {
  // useLoaderData,
  useNavigation,
  Form,
  redirect,
  useActionData
} from "react-router-dom"

const loginUser = async (creds: any) => {
  const headers = new Headers();
  headers.set('Authorization', 'Basic ' + btoa(creds.username + ":" + creds.password));

  const req = await fetch('http://188.68.247.208:8080/user', {
    method: 'GET', 
    headers: headers
  })
  try{
    const response = await req.json(); 
    console.log(response)
  }
  catch(err){
    console.error('Wystąpił błąd:', err);
    throw new Error('Problem z komunikacją z API');
  }
}

export async function action({ request }: any) {
  const formData = await request.formData()
  const username = formData.get("username")
  const password = formData.get("password")
  const pathname = new URL(request.url)
      .searchParams.get("redirectTo") || "/workout"
  
  try {
      await loginUser({ username, password })
      return redirect(pathname)
  } catch(err: any) {
      return err.message
  }
}

function App() {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const navigation = useNavigation()
  const errorMessage = useActionData()


    return (
      <>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
            <Box
              sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
              }}
            >
              <Avatar sx={{ m: 1}}>
                  <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant='h5' sx={{mb: 4}}>
                  Sign in
              </Typography>
              {/* <Box 
                component="form" 
                sx={{mt: 3}}
              > */}
              <Form 
              className="form--register"
              method="post" 
              replace
              >
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField 
                      name='username'
                      required
                      fullWidth
                      id='username'
                      label="Username"
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControl 
                      fullWidth 
                      variant="outlined" 
                      // error={formData.formErrors.password ? true : false}
                    >
                      <InputLabel htmlFor="outlined-adornment-password">Password*</InputLabel>
                      <OutlinedInput
                        id="password"
                        type={showPassword ? 'text' : 'password'}
                        // onChange={handleChange}
                        endAdornment={
                          <InputAdornment position="end">
                          <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                          >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                          </InputAdornment>
                        }
                        required
                        label="Password"
                        name='password'
                      />
                      {/* <FormHelperText>{formData.formErrors.password}</FormHelperText> */}
                    </FormControl>
                    </Grid>
                </Grid>
                <Button
                        type='submit'
                        fullWidth
                        variant='contained'
                        sx={{mt: 3, mb: 2 }}
                        disabled={navigation.state === "submitting"}
                    > 
                      {navigation.state === "submitting"
                      ? "Logging in..."
                      : "Log in"
                      }
                    </Button>
              </Form>
              {/* </Box> */}
           </Box>
        </Container>
        {errorMessage && <h3>errorMessage</h3>}
        {/* <Form 
          className="form--register"
          method="post" 
          replace
        >
            <label>Username</label>
            <input
                type="text"
                name="username"
            />
            <label>Password</label>
            <input 
            type="password"
            name="password"
            />
            <br/>
            <button
                disabled={navigation.state === "submitting"}
            >
                {navigation.state === "submitting"
                    ? "Logging in..."
                    : "Log in"
                }
            </button>
        </Form> */}
      </>
    );
  }
  
  export default App;
  
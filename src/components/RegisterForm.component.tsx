import { useState, useEffect } from 'react'
import { FormDataInterface } from './Interfaces';
import { 
    Box,
    TextField,
    Radio,
    RadioGroup, 
    FormControl, 
    FormControlLabel, 
    FormLabel,
    InputLabel, 
    Avatar, 
    OutlinedInput, 
    InputAdornment, 
    IconButton, 
    Container, 
    CssBaseline, 
    Typography, 
    Grid, 
    Checkbox, 
    Button, 
    Link, 
    FormHelperText
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import axios from 'axios';


export default function Form() {
    const [showPassword, setShowPassword] = useState(false);
    const [showRepassword, setShowRepassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleClickShowRepassword = () => setShowRepassword((show) => !show);

  
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
    };

    const [formData, setFormData] = useState<FormDataInterface>(
        {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            repasswd: "",
            gender: "",
            agree: true,
            formErrors: { firstName: '', lastName: '', email: '', password: '', repasswd: '' },
            emailValid: false,
            passwordValid: false,
            repasswdValid: false,
            formValid: false
        }
    )
    const handleChange = (e: any) => {
        const { name, value, type, checked } = e.target as any;
        const val = type === 'checkbox' ? checked : value;
        setFormData(prevData => ({
            ...prevData,
            [name]: val
        }));
    };
    // console.log(formData)
    
    useEffect(() => {
        const emailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email);
        const passwordValid = formData.password.length>= 6 ? true : false;
        const repasswdValid = formData.repasswd === formData.password;

            setFormData(prevData => ({
                ...prevData,
                formErrors: {
                    ...prevData.formErrors,
                    email: emailValid ? '' : 'is invalid',
                    password: passwordValid ? '' : 'is too short',
                    repasswd: repasswdValid ? '' : 'does not match'
                },
                emailValid,
                passwordValid,
                repasswdValid,
                formValid: emailValid && passwordValid && repasswdValid
            }));
        }, [formData.email, formData.password, formData.repasswd])
        
        const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault()
            console.log(formData)
            // const response = await axios.post('http://188.68.247.208:8080/user', formData)
            // console.log(response)

    }    

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
                <Typography component="h1" variant='h5'>
                    Sign up
                </Typography>
                <Box component="form" onSubmit={handleSubmit} sx={{mt: 2}}>
                    <Grid container spacing={1.5}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete='given-name'
                                name='firstName'
                                required
                                fullWidth
                                id='firstName'
                                label="First Name"
                                autoFocus
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete='family-name'
                                name='lastName'
                                required
                                fullWidth
                                id='lastName'
                                label="Last Name"
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                error={formData.formErrors.email ? true : false}
                                helperText={formData.formErrors.email}
                                autoComplete='email'
                                name='email'
                                required
                                fullWidth
                                id='email'
                                label="Email"
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                        <FormControl fullWidth variant="outlined" error={formData.formErrors.password ? true : false}>
                            <InputLabel htmlFor="outlined-adornment-password">Password*</InputLabel>
                            <OutlinedInput
                                id="password"
                                type={showPassword ? 'text' : 'password'}
                                onChange={handleChange}
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
                            <FormHelperText>{formData.formErrors.password}</FormHelperText>
                        </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                        <FormControl fullWidth variant="outlined" error={formData.formErrors.repasswd ? true : false}>
                            <InputLabel htmlFor="outlined-adornment-password">Repassword*</InputLabel>
                            <OutlinedInput
                                id="repasswd"
                                type={showRepassword ? 'text' : 'password'}
                                onChange={handleChange}
                                endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowRepassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                    >
                                    {showRepassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                                }
                                required
                                label="Repassword"
                                name='repasswd'
                            />
                            <FormHelperText>{formData.formErrors.repasswd}</FormHelperText>
                        </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl>
                                <FormLabel id="radio-buttons-group">Gender</FormLabel>
                                <RadioGroup
                                    aria-labelledby="radio-buttons-group"
                                    name="gender"
                                    value={formData.gender}
                                    onChange={handleChange}
                                >
                                    <FormControlLabel value="female" control={<Radio />} name="gender" label="Female" />
                                    <FormControlLabel value="male" control={<Radio />} name="gender" label="Male" />
                                </RadioGroup>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={<Checkbox value="agree" color='primary' />}
                                label="I agree with terms"
                                name="agree"
                                onChange={handleChange}
                                checked={formData.agree}
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type='submit'
                        fullWidth
                        variant='contained'
                        sx={{mt: 1, mb: 1 }}
                        disabled={!formData.formValid}
                    > Sign Up
                    </Button>
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Link href="/login" variant="body2">
                                Already have an account? Sign in
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    </>
    )
}

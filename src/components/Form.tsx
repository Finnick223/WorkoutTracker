import { useState, useEffect } from 'react'
import { FormErrors } from './FormErrors';
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
    Link 
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import VisibilityOff from '@mui/icons-material/VisibilityOff';


export default function Form() {
    const [showPassword, setShowPassword] = useState(false);
    const [showRepassword, setShowRepassword] = useState(false);
    const [gender, setGender] = useState('male');

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
    console.log(formData)
    
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
        
        const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault()
            console.log(formData)
    }    

    return (
    <>
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 8,
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
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{mt: 3}}>
                    <Grid container spacing={2}>
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
                        <FormControl fullWidth variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
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
                        </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                        <FormControl fullWidth variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password">Repassword</InputLabel>
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
                        </FormControl>
                        </Grid>
                        {/* RADIO CURRENTLY DONT WORK */}
                        <Grid item xs={12}>
                            <FormControl>
                                <FormLabel id="demo-controlled-radio-buttons-group">Gender</FormLabel>
                                <RadioGroup
                                    aria-labelledby="demo-controlled-radio-buttons-group"
                                    name="controlled-radio-buttons-group"
                                    value={gender}
                                    onChange={handleChange}
                                >
                                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                                    <FormControlLabel value="male" control={<Radio />} label="Male" />
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
                        sx={{mt: 3, mb: 2 }}
                    > Sign Up
                    </Button>
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Link href="#" variant="body2">
                                Already have an account? Sign in
                            </Link>
                        </Grid>
                    </Grid>
                    <br />
                        <FormErrors formErrors={formData.formErrors} />
                    <br />
                </Box>
            </Box>
        </Container>
{/* 
        <form className="form--register" onSubmit={handleSubmit}>
            <label htmlFor={id + "-firstName"}>First Name</label>
            <input
                type="text"
                name="firstName"
                id={id + "-firstName"}
                onChange={handleChange}
                value={formData.firstName}
                />
            <label htmlFor={id + "-lastName"}>Last Name</label>
            <input
                type="text"
                name="lastName"
                id={id + "-lastName"}
                onChange={handleChange}
                value={formData.lastName}
                />
            <label htmlFor={id + "-email"}>Email</label>
            <input
                type="email"
                name="email"
                id={id + "-email"}
                onChange={handleChange}
                value={formData.email}
                />
            <label htmlFor={id + "-password"}>Password</label>
            <input
                type="password"
                name="password"
                id={id + "-password"}
                onChange={handleChange}
                value={formData.password}
                />
            <label htmlFor={id + "-repasswd"}>Repassword</label>
            <input
                type="password"
                name="repasswd"
                id={id + "-repasswd"}
                onChange={handleChange}
                value={formData.repasswd}
                />
            <br />
            
            <fieldset>
                <legend>Gender</legend>
                <input 
                    type="radio"
                    name="gender"
                    value="men"
                    id={id + "-men"}
                    onChange={handleChange}
                    checked={formData.gender === "men"}
                    />
                <label htmlFor={id + "-men"}>Men</label>
                <br />
                
                <input 
                    type="radio"
                    name="gender"
                    value="women"
                    id={id + "-women"}
                    onChange={handleChange}
                    checked={formData.gender === "women"}
                    />
                <label htmlFor={id + "-women"}>Women</label>
                <br />
            </fieldset>
            <br />
            
            <label htmlFor={id + "-country"}>Where are you from?</label>
            <br />
            <select 
                name="country"
                id={id + "-country"}
                value={formData.country}
                onChange={handleChange}
                >
                <option value="Poland">Poland</option>
                <option value="USA">USA</option>
            </select>
            <section>
            <input 
                type="checkbox" 
                name="agree"
                id={id + "-check"}
                onChange={handleChange}
                checked={formData.agree}
                />
            <label htmlFor='{id + "-check"}'> I agree with bla bla</label>
            </section>
            <br />
            <FormErrors formErrors={formData.formErrors} />
            <br />
            <button type="submit" disabled={!formData.formValid}>Submit</button>
        </form> */}
    </>
    )
}

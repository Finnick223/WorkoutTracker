import { useState } from 'react';
import {
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  FormHelperText,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useFormContext } from 'react-hook-form';

interface Input {
  name: string;
  label: string;
  type: 'password';
  required?: boolean;
  isError?: boolean;
}

const InputFormPassword = ({ label, name, type, required }: Input) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <FormControl fullWidth variant="outlined" error={!!errors[name]}>
      <InputLabel htmlFor={name}>{label}</InputLabel>
      <OutlinedInput
        id={name}
        type={type === 'password' ? (showPassword ? 'text' : 'password') : type}
        endAdornment={
          type === 'password' && (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          )
        }
        required={required}
        label={label}
        {...register(name, { required })}
      />
      {errors[name] && (
        <FormHelperText>{errors[name]?.message as string}</FormHelperText>
      )}
    </FormControl>
  );
};

export default InputFormPassword;

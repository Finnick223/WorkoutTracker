import { useFormContext } from 'react-hook-form';
import { TextField } from '@mui/material';
interface Input {
  id: string;
  name: string;
  label: string;
  type: 'email' | 'text';
  required?: boolean;
  autoComplete: string;
  autoFocus?: boolean | undefined;
  isError?: boolean;
}

export const Input = ({
  id,
  name,
  label,
  type,
  required,
  autoComplete,
  autoFocus,
}: Input) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <>
      <TextField
        autoComplete={autoComplete}
        autoFocus={autoFocus}
        required={required}
        type={type}
        fullWidth
        id={id}
        label={label}
        error={!!errors[name]}
        helperText={
          errors[name] ? (errors[name]?.message as string) : undefined
        }
        {...register(name)}
      />
    </>
  );
};

import { useFormContext } from 'react-hook-form';
import { TextField } from '@mui/material';
interface Input {
  id: string;
  name: string;
  label: string;
  type: 'email' | 'text';
  required?: boolean;
  autoComplete: string;
  isError?: boolean;
}

export const Input = ({
  id,
  name,
  label,
  type,
  required,
  autoComplete,
}: Input) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const a = 1,
    one = 1;

  switch (a) {
    case 1:
      break;
    case 2:
      break;
    case 1: // duplicate test expression
      break;
    case 1: // duplicate test expression
      break;
    case 1: // duplicate test expression
      break;
    default:
      break;
  }
  return (
    <>
      <TextField
        autoComplete={autoComplete}
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

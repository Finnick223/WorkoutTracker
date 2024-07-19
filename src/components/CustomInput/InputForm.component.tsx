import { useFormContext } from 'react-hook-form';
import { TextField } from '@mui/material';
interface Input {
  id: string;
  name: any;
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
  return (
    <>
      <TextField
        autoComplete={autoComplete}
        required={required}
        type={type}
        fullWidth
        id={id}
        label={label}
        error={errors[name] ? true : false}
        // @ts-ignore
        helperText={errors[name] ? errors[name]?.message : undefined}
        {...register(name)}
      />
    </>
  );
};

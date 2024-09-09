import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Backdrop, TextField } from '@mui/material';
import { useMutation } from '@tanstack/react-query';
import { Controller, useForm } from 'react-hook-form';
import { requestPasswordReset } from 'src/api/auth';
import toast from 'react-hot-toast';
import { motion } from 'framer-motion';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

export const ForgotPasswordModal = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const mutation = useMutation({
    mutationFn: requestPasswordReset,
    onSuccess: (message) => {
      toast.success(message);
    },
    onError: (error) => {
      toast.error(
        'Account with this email doesnt exist or something went wrong',
      );
      console.error('requestPasswordReset error: ' + error.message);
    },
  });

  const submit = handleSubmit((email) => {
    console.log(email);
    mutation.mutate(email as unknown as string);
  });

  return (
    <>
      <Button
        onClick={handleOpen}
        component={motion.div}
        variant="text"
        color="inherit"
        size="small"
        sx={{
          textTransform: 'none',
          ':hover': { color: 'gray', backgroundColor: 'transparent' },
        }}
        whileHover={{
          scale: 1.2,
          transition: { duration: 0.3 },
        }}
        whileTap={{ scale: 0.9 }}
      >
        Forgot password?
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="Forgot password?"
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 400,
          },
        }}
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            To reset password write your Email
          </Typography>
          <form onSubmit={submit}>
            <Controller
              name="email"
              control={control}
              defaultValue=""
              rules={{ required: 'Email is required' }}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  label="Email"
                  error={!!errors.email}
                  helperText={
                    errors.email ? (errors.email.message as string) : ''
                  }
                  autoFocus
                  sx={{ my: 2 }}
                />
              )}
            />
            <Button variant="contained" type="submit">
              Reset
            </Button>
          </form>
        </Box>
      </Modal>
    </>
  );
};

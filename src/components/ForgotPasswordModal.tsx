import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Backdrop, TextField } from '@mui/material';
// import { useForm, FormProvider, SubmitHandler } from 'react-hook-form';
// import { Input } from '../components/InputForm.component';

const style = {
  position: 'absolute' as 'absolute',
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

  return (
    <>
      <Button onClick={handleOpen} variant="text">
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
          {/* <Form> */}
          <TextField
            required
            type="email"
            fullWidth
            id="email"
            label="Email"
            // error={errors[name] ? true : false}
            //@ts-ignore
            // helperText={errors[name] ? errors[name]?.message : undefined}
            // {...register(name)}
            sx={{ my: 2 }}
          />
          <Button variant="contained">Reset</Button>
          {/* </Form> */}
        </Box>
      </Modal>
    </>
  );
};

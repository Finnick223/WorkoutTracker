import { useState } from 'react';
import { Box, Button, Modal, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const useModal = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

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

  const openModal = () => {
    setOpen(true);
  };

  const ErrorModalComponent = () => (
    <Modal open={open}>
      <Box sx={style}>
        <Typography variant="h6" component="h2" align="center">
          Connection with api failed
        </Typography>
        <Button
          variant="contained"
          color="error"
          onClick={() => navigate('/')}
          fullWidth
        >
          Go to main page
        </Button>
      </Box>
    </Modal>
  );

  return {
    openModal,
    ErrorModalComponent,
  };
};

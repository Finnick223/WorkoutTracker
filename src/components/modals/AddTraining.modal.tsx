import { Box, Button, Modal, TextField, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import useAuthStatus from 'src/hooks/useAuth';
import { AddTrainingModalProps } from 'src/interfaces/training.interfaces';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addTraining } from 'src/api/training';
import { Training } from 'src/client/src';

const AddTrainingModal: React.FC<AddTrainingModalProps> = ({
  open,
  handleAddClose,
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid, isSubmitting },
  } = useForm();
  const { token } = useAuthStatus();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: ({ token, training }: { token: string; training: Training }) =>
      addTraining(token, training),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['trainings'] });
      toast.success('Training added successfully');
      handleAddClose();
    },
    onError: (error) => {
      toast.error('err : ' + error);
    },
  });

  const onSubmit = handleSubmit((formData) => {
    mutation.mutate({ token, training: { ...formData } });
    reset();
  });

  return (
    <>
      <Modal open={open} onClose={handleAddClose}>
        <form onSubmit={onSubmit}>
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 400,
              bgcolor: 'background.paper',
              boxShadow: 24,
              p: 4,
            }}
          >
            <Typography variant="h6" component="h2">
              Add training
            </Typography>
            <TextField
              {...register('name', { required: true })}
              margin="normal"
              fullWidth
              label="Training name"
              variant="outlined"
            />
            <TextField
              {...register('description', { required: true })}
              margin="normal"
              fullWidth
              label="Training description"
              variant="outlined"
            />
            <Button
              variant="contained"
              color="primary"
              sx={{ my: 2 }}
              type="submit"
              fullWidth
              disabled={!isValid || isSubmitting}
            >
              {isSubmitting ? 'Adding...' : 'Add'}
            </Button>
          </Box>
        </form>
      </Modal>
    </>
  );
};

export default AddTrainingModal;

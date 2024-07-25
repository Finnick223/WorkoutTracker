import { Box, Button, Modal, TextField, Typography } from '@mui/material';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { updateTraining } from 'src/api/training';
import useAuthStatus from 'src/hooks/useAuth';
import { UpdateTrainingModalProps } from 'src/interfaces/training.interfaces';

const UpdateTrainingModal: React.FC<UpdateTrainingModalProps> = ({
  open,
  page,
  size,
  trainingId,
  handleModalClose,
  name,
  description,
}) => {
  const { register, handleSubmit } = useForm();
  const queryClient = useQueryClient();
  const { token } = useAuthStatus();

  const { mutate } = useMutation({
    mutationFn: updateTraining,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['trainings', page, size],
      });
      toast.success('Training updated successfully');
    },
  });

  const onSubmit = handleSubmit((FormData) => {
    mutate({
      token,
      trainingId,
      name: FormData.name,
      description: FormData.description,
    });
  });
  return (
    <>
      <Modal open={open} onClose={handleModalClose}>
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
              Update training
            </Typography>
            <TextField
              {...register('name')}
              margin="normal"
              fullWidth
              label="Training name"
              variant="outlined"
              defaultValue={name}
            />
            <TextField
              {...register('description')}
              margin="normal"
              fullWidth
              label="Training description"
              variant="outlined"
              defaultValue={description}
            />
            <Button
              variant="contained"
              color="primary"
              sx={{ my: 2 }}
              type="submit"
              fullWidth
            >
              Update
            </Button>
          </Box>
        </form>
      </Modal>
    </>
  );
};

export default UpdateTrainingModal;

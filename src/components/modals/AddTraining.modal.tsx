import { Box, Button, Modal, TextField, Typography } from "@mui/material"
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import useAuthStatus from "../../hooks/useAuth";
import { AddTrainingModalProps } from "../../interfaces/Interfaces";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addTraining } from "../../api/auth";
import { Training } from "../../client/src";


const AddTrainingModal: React.FC<AddTrainingModalProps> = ({open, handleAddClose}) => {
    const { register, handleSubmit } = useForm();
    const { token } = useAuthStatus();
    const queryClient = useQueryClient();



    const mutation = useMutation({
      mutationFn: ({token, training}:{token: string, training: Training}) => addTraining(token, training),
      onSuccess: () => {
        queryClient.invalidateQueries()
        toast.success('Training added successfully')
        handleAddClose()
      },
      onError: (error) => {
        toast.error("err : " + error)
      }
    })
    const onSubmit = handleSubmit((formData) => {
      mutation.mutate(({ token, training: { ...formData}}))
  })
    return (
        <>
        <Modal
        open={open}
        onClose={handleAddClose}
        aria-labelledby="edit-user-modal"
        aria-describedby="edit-user-modal-description"
      >
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
            <Typography id="edit-user-modal" variant="h6" component="h2">
              Add training
            </Typography>
            <TextField
              {...register("name")}
              margin="normal"
              fullWidth
              label="Training name"
              variant="outlined"
              />
            <TextField
              {...register("description")}
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
              >
              Add
            </Button>
          </Box>
        </form>
      </Modal>
      </>
    )
}

export default AddTrainingModal;
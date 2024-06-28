import { Box, Button, Modal, TextField, Typography } from "@mui/material"
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import useAuthStatus from "../../hooks/useAuth";


const AddTrainingModal = ({open, handleEditClose}) => {
    const { register, handleSubmit } = useForm();
    const { token } = useAuthStatus();


    // const onSubmit = handleSubmit((formData) => Mutation.mutate())
    return (
        <>
        <Modal
        open={open}
        onClose={handleEditClose}
        aria-labelledby="edit-user-modal"
        aria-describedby="edit-user-modal-description"
      >
        {/* <form onSubmit={onSubmit}> */}
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
            //   defaultValue={user?.firstName}
              variant="outlined"
              />
            <TextField
              {...register("description")}
              margin="normal"
              fullWidth
              label="Training description"
            //   defaultValue={user?.lastName}
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
        {/* </form> */}
      </Modal>
      </>
    )
}

export default AddTrainingModal;
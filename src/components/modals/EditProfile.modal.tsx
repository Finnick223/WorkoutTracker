import { Box, Button, Modal, TextField, Typography } from "@mui/material"
import { EditUserModalProps } from "../../interfaces/Interfaces";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

const EditUserModal: React.FC<EditUserModalProps> = ({ open, handleEditClose, handleEditSave, user }) => {
    const { register, handleSubmit } = useForm();

    const { mutate } = useMutation({
      mutationFn: , //TODO CREATE API function
      onSuccess: () => {
        toast.success("profile info updated successfully")
      },
      onError: (error) => {
        toast.error("err : " + error)
      }
    })
    const onSubmit = handleSubmit((user) => mutate(user))

    return (
        <>
        <Modal
        open={open}
        onClose={handleEditClose}
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
              Edit User Information
            </Typography>
            <TextField
              {...register("firstName")}
              margin="normal"
              fullWidth
              label="First Name"
              defaultValue={user?.firstName}
              variant="outlined"
              />
            <TextField
              {...register("lastName")}
              margin="normal"
              fullWidth
              label="Last Name"
              defaultValue={user?.lastName}
              variant="outlined"
              />
            <TextField
              {...register("email")}
              margin="normal"
              fullWidth
              label="Email"
              defaultValue={user?.email}
              variant="outlined"
              />
            {user?.gender && (
              <TextField
              {...register("gender")}
              margin="normal"
              fullWidth
              label="Gender"
              defaultValue={user?.gender}
              variant="outlined"
              />
            )}
            <Button
              variant="contained"
              color="primary"
              sx={{ my: 2 }}
              onClick={handleEditSave}
              fullWidth
              >
              Save
            </Button>
          </Box>
        </form>
      </Modal>
      </>
    )
}

export default EditUserModal;
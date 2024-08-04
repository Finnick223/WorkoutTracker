import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from '@mui/material';
import { EditUserModalProps } from 'src/interfaces/user.interfaces';
import { useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { updateUser } from 'src/api/auth';
import useAuthStatus from 'src/hooks/useAuth';
import { User } from 'src/client/src';
import { useNavigate } from 'react-router-dom';

const EditUserModal: React.FC<EditUserModalProps> = ({
  open,
  handleEditClose,
  user,
  id,
}) => {
  const { register, handleSubmit, setValue } = useForm();
  const { token, logout } = useAuthStatus();
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const initialEmail = user?.email;

  const handleGenderChange = (event: SelectChangeEvent<string>) => {
    const value = event.target.value;
    console.log(value);
    setValue('gender', value);
  };
  const { mutate } = useMutation({
    mutationFn: ({ token, user }: { token: string; user: User }) =>
      updateUser(token, user),
    onSuccess: (data) => {
      queryClient.setQueryData(['profile'], data);
      toast.success('profile info updated successfully');
      handleEditClose();
      if (initialEmail && initialEmail !== data.email) {
        logout();
        navigate('/Login');
      }
    },
    onError: (error) => {
      toast.error('err : ' + error);
    },
  });
  const onSubmit = handleSubmit((formData) =>
    mutate({ token, user: { ...formData, id } }),
  );

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
              {...register('firstName')}
              margin="normal"
              fullWidth
              label="First Name"
              defaultValue={user?.firstName}
              variant="outlined"
            />
            <TextField
              {...register('lastName')}
              margin="normal"
              fullWidth
              label="Last Name"
              defaultValue={user?.lastName}
              variant="outlined"
            />
            <TextField
              {...register('email')}
              margin="normal"
              fullWidth
              label="Email"
              defaultValue={user?.email}
              variant="outlined"
            />
            <FormControl fullWidth>
              <InputLabel id="genders">Gender</InputLabel>
              <Select
                id="genders"
                defaultValue={user?.genders}
                label="Gender"
                fullWidth
                onChange={handleGenderChange}
              >
                <MenuItem value={'MALE'}>MALE</MenuItem>
                <MenuItem value={'FEMALE'}>FEMALE</MenuItem>
                <MenuItem value={'OTHER'}>OTHER</MenuItem>
              </Select>
            </FormControl>
            <Button
              variant="contained"
              color="primary"
              sx={{ my: 2 }}
              type="submit"
              fullWidth
            >
              Save
            </Button>
          </Box>
        </form>
      </Modal>
    </>
  );
};

export default EditUserModal;

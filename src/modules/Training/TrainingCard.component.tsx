import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Paper } from '@mui/material';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteTraining } from 'src/api/training';
import toast from 'react-hot-toast';
import useAuthStatus from 'src/hooks/useAuth';
import { TrainingExtended } from 'src/interfaces/training.interfaces';
import { useState } from 'react';
import UpdateTrainingModal from 'src/components/modals/UpdateTraining.modal';
import CustomLink from 'src/components/Link/Link.component';

export default function TrainingCard(props: TrainingExtended) {
  const { token } = useAuthStatus();
  const queryClient = useQueryClient();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const handleModalOpen = () => setIsModalOpen(true);
  const handleModalClose = () => setIsModalOpen(false);

  const { mutate } = useMutation({
    mutationFn: deleteTraining,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['trainings'],
      });
      toast.success('Training deleted');
    },
  });

  const handleUpdateClick = () => {
    const trainingId = props.id;
    if (trainingId) {
      handleModalOpen();
    } else {
      toast.error('Training ID is undefined');
    }
  };
  const handleDeleteClick = () => {
    const trainingId = props.id;
    if (trainingId) {
      mutate({ token, trainingId });
    } else {
      toast.error('Training ID is undefined');
    }
  };
  return (
    <Paper elevation={4} sx={{ width: '16em' }}>
      <Card sx={{ width: '16em' }}>
        <CustomLink href={`/training/${props.id}`} color="inherit">
          <CardContent>
            <Typography sx={{ fontSize: 14 }} gutterBottom>
              {props.createdOn}
            </Typography>
            <Typography variant="h5" component="div">
              {props.name}
            </Typography>
            <Typography sx={{ mb: 1.5 }}>{props.description}</Typography>
          </CardContent>
        </CustomLink>
        <CardActions sx={{ justifyContent: 'center' }}>
          <Button size="small" variant="contained" onClick={handleUpdateClick}>
            <EditNoteOutlinedIcon />
          </Button>
          <Button size="small" variant="contained" onClick={handleDeleteClick}>
            <DeleteOutlineOutlinedIcon />
          </Button>
        </CardActions>
      </Card>
      {props.id && (
        <UpdateTrainingModal
          open={isModalOpen}
          handleModalClose={handleModalClose}
          page={props.page}
          size={props.size}
          trainingId={props.id}
          name={props.name}
          description={props.description}
        />
      )}
    </Paper>
  );
}

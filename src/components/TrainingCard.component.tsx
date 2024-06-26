import { Link, To } from 'react-router-dom';
import { Training } from '../client/src';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Paper } from '@mui/material';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';
import { useMutation } from '@tanstack/react-query';
import { deleteTraining } from '../api/auth';
import toast from 'react-hot-toast';
import useAuthStatus from '../hooks/useAuth';

export default function TrainingCard(props: Training) {
  const { token } = useAuthStatus();

  const { mutate } = useMutation({
    mutationFn: deleteTraining,
    mutationKey: ["trainings"],
    onSuccess: () => {
      toast.success('Training deleted')
    }
  })
  const handleClick = () => {
    const trainingId = props.id;
    if (trainingId) {
      mutate({ token, trainingId });
    } else {
      toast.error('Training ID is undefined');
    }
  }
  return (
    <Paper elevation={4} sx={{ width: '16vw', m: 2 }}>
      <Card sx={{ width: '16vw' }}>
        <Link
          to={props.id as To}
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                {props.createdOn}
              </Typography>
            <Typography variant="h5" component="div">
              {props.name}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {props.description}
            </Typography>
          </CardContent>
        </Link>
        <CardActions sx={{ justifyContent: 'center' }}>
          <Button size="small" variant="contained">
            <EditNoteOutlinedIcon />
          </Button>
          <Button size="small" variant="contained" onClick={handleClick}>
            <DeleteOutlineOutlinedIcon />
          </Button>
        </CardActions>
      </Card>
    </Paper>
  );
}

import { Link, To } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Paper } from '@mui/material';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteTraining } from '../api/auth';
import toast from 'react-hot-toast';
import useAuthStatus from '../hooks/useAuth';
import { TrainingExtended } from '../interfaces/Interfaces';

export default function TrainingCard(props: TrainingExtended) {
  const { token } = useAuthStatus();
  const queryClient =  useQueryClient();


  const { mutate,  } = useMutation({
    mutationFn: deleteTraining,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["trainings", props.page, props.size]
      })
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

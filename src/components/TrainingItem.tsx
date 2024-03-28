import { Link } from "react-router-dom";
import { trainingItemProps } from "./Interfaces";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Paper } from "@mui/material";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';


  export default function TrainingItem(props: trainingItemProps) {
    return (
      <Paper elevation={4} sx={{width: "11vw", m: 2}}>
        <Card sx={{ width: "11vw" }}>
          <Link to={props.id} style={{textDecoration: "none", color: "inherit"}}>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                {props.date}
              </Typography>
              <Typography variant="h5" component="div">
                {props.trainingName}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {props.category}
              </Typography>
            </CardContent>
          </Link>
          <CardActions>
            <Button size="small" variant="contained"><EditNoteOutlinedIcon/></Button>
            <Button size="small" variant="contained"><DeleteOutlineOutlinedIcon/></Button>
          </CardActions>
        </Card>
      </Paper>
    );
  }
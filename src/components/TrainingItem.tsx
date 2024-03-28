import { Link } from "react-router-dom";
import { trainingItemProps } from "./Interfaces";

  export default function TrainingItem(props: trainingItemProps) {
    return (
      <div className="trainingItem">
        <Link to={props.id}>
        <p className="trainingItem--text">{props.trainingName}</p>
        <p className="trainingItem--text">{props.category}</p>
        <p className="trainingItem--text">{props.date}</p>
        </Link>
        <p>
          <button className="trainingItem--buttons">edit</button>
          <button className="trainingItem--buttons">delete</button>
        </p>
      </div>
    );
  }
  
  
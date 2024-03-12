import { userCardProps } from "./Interfaces";

export default function UserCard(props: userCardProps) {
  return (
    <div className="usercard">
      <p className="usercard--text">{props.username}</p>
      <p className="usercard--text">{props.firstname}</p>
      <p className="usercard--text">{props.lastname}</p>
      <p className="usercard--text">{props.email}</p>
      <p>
        <button className="usercard--buttons">edit</button>
        <button className="usercard--buttons">delete</button>
      </p>
    </div>
  );
}

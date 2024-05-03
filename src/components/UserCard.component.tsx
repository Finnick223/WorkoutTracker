import { User } from '../client/src/models';

function editUser(userId: string | undefined) {
  return userId; //TODO implement edit user
}

function deleteUser(userId: string | undefined) {
  return userId; //TODO implement delete user
}

export default function UserCard(props: User) {
  return (
    <div className="usercard">
      <p className="usercard--text">{props.username}</p>
      <p className="usercard--text">{props.firstName}</p>
      <p className="usercard--text">{props.lastName}</p>
      <p className="usercard--text">{props.email}</p>
      <p>
        <button
          className="usercard--buttons"
          onClick={() => editUser(props.id)}
        >
          edit
        </button>
        <button
          className="usercard--buttons"
          onClick={() => deleteUser(props.id)}
        >
          delete
        </button>
      </p>
    </div>
  );
}

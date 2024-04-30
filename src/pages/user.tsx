import { DefaultApi } from '../client/src/apis/DefaultApi.ts';
import { useEffect, useState } from 'react';
import { Configuration, User } from '../client/src';
import UserCard from '../components/UserCard.tsx';

function App() {
  const [users, setUsers] = useState<Array<User>>([]);

  const config = new Configuration({
    username: "admin",
    password: "admin"
  });

  useEffect(() => {
      const api = new DefaultApi(config);

    const loadUsers = async () => {
      try {
        const fetchedUsers = await api.getUsers();
        setUsers(fetchedUsers);
      } catch (error) {
        console.error("Error fetching users: ", error);
      }
    };
    loadUsers();
  }, []);

  return (
    <div className="App">
      {users.map((user) => (
        <UserCard
          key={user.id}
          username={user.username || ""}
          firstName={user.firstName || ""}
          lastName={user.lastName || ""}
          email={user.email || ""}
        />
      ))}
    </div>
  );
}

export default App;
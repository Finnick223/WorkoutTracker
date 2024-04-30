import { useEffect, useState } from 'react';
import { User, Configuration, DefaultApi  } from '../client';
import BasicList from '../components/SimpleList.tsx';
import { ListItemText } from '@mui/material';

function App() {
  const [users, setUsers] = useState<User[]>([]);

  const config = new Configuration({
    username: "admin",
    password: "admin"
  });

  useEffect(() => {
    const api = new DefaultApi(config);


    const loadUsers = async () => {
      try {
        const response = await api.getUsers();
        const fetchedUsers = response.data;
        setUsers(fetchedUsers);
      } catch (error) {
        console.error("Error fetching users: ", error);
      }
    };

    loadUsers();
  }, []);

  return (
    <div className="App">
      <BasicList
        items={users}
        renderItem={user => <ListItemText primary={`${user.firstName} ${user.lastName}`} secondary={user.email} />}
      />
    </div>
  );
}

export default App;
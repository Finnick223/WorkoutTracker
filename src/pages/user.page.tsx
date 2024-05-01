import { useEffect, useState } from 'react';
import { User, Configuration, UserApi } from '../client/src/index.ts';
import { Box, CssBaseline, ListItemText } from '@mui/material';
import BasicList from '../components/SimpleList.component.tsx';
import { redirect } from 'react-router-dom';

function App() {
  const [users, setUsers] = useState<User[]>([]);

  
  const config = new Configuration({
    username: "admin",
    password: "admin",
  });

  useEffect(() => {
    const api = new UserApi(config);

    const loadUsers = async () => {

      try {
        const response = await api.getUsers();
        const fetchedUsers = response;
        setUsers(fetchedUsers);
      } catch (error) {
        console.error("Error fetching users: ", error);
        redirect("/error")
      }
    };

    loadUsers();
  }, []);

  return (
    <Box>
      <CssBaseline />
      <BasicList
        items={users}
        renderItem={user => <ListItemText primary={`${user.firstName} ${user.lastName}`} secondary={user.email} />}
      />
    </Box>
  );
}

export default App;

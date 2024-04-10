// import { useState } from 'react'
import { CssBaseline } from '@mui/material';
import UserCard from '../components/UserCard.tsx';

function App() {
  return (
    <>
      <CssBaseline />
      <UserCard
        username="filipf"
        firstname="filip"
        lastname="ff"
        email="example@gm.com"
      />
      <UserCard
        username="xddd"
        firstname="asd"
        lastname="jnveivnei"
        email="example@gm.com"
      />
      <UserCard
        username="nick"
        firstname="imie"
        lastname="nazwisko"
        email="mail@gm.com"
      />
    </>
  );
}

export default App;

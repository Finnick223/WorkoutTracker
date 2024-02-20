// import { useState } from 'react'
import UserCard from '../components/UserCard.tsx';

function App() {
  return (
    <>
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

// import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import Layout from "./pages/layout.tsx";
import User from './pages/user.tsx'
import Workout from './pages/workout.tsx'
import Exercise from './pages/exercise.tsx'
import Home from './pages/home.tsx'
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="user" element={<User />} />
        <Route path="workout" element={<Workout />} />
        <Route path="exercise" element={<Exercise />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;



// React.useEffect(() => {
//   const timeoutId = setTimeout(() => {
//       updateNote(tempNoteText)
//   }, 500)
//   return () => clearTimeout(timeoutId)
// }, [tempNoteText])
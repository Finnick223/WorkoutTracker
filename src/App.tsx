// import { useState } from 'react'
import { 
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
 } from "react-router-dom";
import './index.css';
import Layout from "./pages/layout.tsx";
import User from './pages/user.tsx'
import Workout from './pages/workout.tsx'
import Exercise from './pages/exercise.tsx'
import Home from './pages/home.tsx'
import Login, { action as loginAction } from './pages/login.tsx'
import Register from './pages/register.tsx'
import WorkoutDetail from './pages/Training/workoutDetail.tsx'
import Error from "./components/Error"

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="user" element={<User />} />
        <Route path="workout" element={<Workout />} errorElement={<Error />} />
        <Route path="workout/:id" element={<WorkoutDetail/>} errorElement={<Error />} />
        <Route path="exercise" element={<Exercise />} />
        <Route path="login" element={<Login />} action={loginAction} />
        <Route path="register" element={<Register />} />
      </Route>
  ))
  return (
    <RouterProvider router={router} />
  );
}

export default App;



// React.useEffect(() => {
//   const timeoutId = setTimeout(() => {
//       updateNote(tempNoteText)
//   }, 500)
//   return () => clearTimeout(timeoutId)
// }, [tempNoteText])
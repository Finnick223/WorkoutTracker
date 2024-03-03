import { 
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from "react-router-dom";
import './index.css';
import Layout from "./pages/layout.tsx";
import User from './pages/user.tsx'
import Workout from './pages/workout.tsx'
import Exercise from './pages/exercise.tsx'
import Home from './pages/home.tsx'
import Login from './pages/login.tsx'
import Register from './pages/register.tsx'

const router = createBrowserRouter(createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="user" element={<User />} />
        <Route path="workout" element={<Workout />} />
        <Route path="exercise" element={<Exercise />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
))
function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;

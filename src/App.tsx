import { 
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
 } from "react-router-dom";
import './index.css';
import Layout from "./pages/layout.page.tsx";
import User from './pages/user.page.tsx'
import Training from './pages/training.page.tsx'
import Home from './pages/home.page.tsx'
import Login, { action as loginAction } from './pages/login.page.tsx'
import Register from './pages/register.page.tsx'
import TrainingDetail from './pages/Training/trainingDetail.page.tsx'
import { ErrorPage } from "./pages/Error.page.tsx";

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="user" element={<User />} />
        <Route path="training" element={<Training />} errorElement={<ErrorPage />} />
        <Route path="training/:id" element={<TrainingDetail/>} errorElement={<ErrorPage />} />
        <Route path="login" element={<Login />} action={loginAction} />
        <Route path="register" element={<Register />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
  ))
  return (
    <RouterProvider router={router} />
  );
}

export default App;

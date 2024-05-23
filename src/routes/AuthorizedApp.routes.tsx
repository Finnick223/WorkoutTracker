import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import { CommonRoutes, AuthorizedRoute } from '../enums/routes.enums.ts'
import Layout from '../pages/layout.page.tsx';
import User from '../pages/user.page.tsx';
import Training from '../pages/training.page.tsx';
import Home from '../pages/home.page.tsx';
import TrainingDetail from '../pages/Training/trainingDetail.page.tsx';
import { ErrorPage } from '../pages/Error.page.tsx';

export const UnAuthorizedAppRoutes = () => {

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route index path={CommonRoutes.Home} element={<Home />} errorElement={<ErrorPage />} />
      <Route path={CommonRoutes.User} element={<User />} errorElement={<ErrorPage />} />
      <Route
        path={CommonRoutes.Training}
        element={<Training />}
        errorElement={<ErrorPage />}
      />
      <Route
        path={CommonRoutes.TrainingDetail}
        element={<TrainingDetail />}
        errorElement={<ErrorPage />}
      />
      {/* <Route
        path="login"
        element={<Login />}
        action={loginAction}
        errorElement={<ErrorPage />}
      />
      <Route
        path="register"
        element={<Register />}
        errorElement={<ErrorPage />}
      /> */}
      {/* <Route 
          path={AuthorizedRoute.Profile}
          element={<Profile />}
          errorElement={<ErrorPage />}
      /> */}
      <Route path="*" element={<ErrorPage />} />
    </Route>,
  ),
);
return <RouterProvider router={router} />;
}
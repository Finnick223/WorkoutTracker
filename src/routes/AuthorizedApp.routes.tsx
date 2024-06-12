import { Route, Routes } from 'react-router-dom';
import { CommonRoutes, AuthorizedRoute } from '../enums/routes.enums.ts';
import Layout from '../pages/layout.page.tsx';
import User from '../pages/user.page.tsx';
import Training from '../pages/training.page.tsx';
import Home from '../pages/home.page.tsx';
import TrainingDetail from '../pages/Training/trainingDetail.page.tsx';
import { ErrorPage } from '../pages/Error.page.tsx';
import LogoutUser from '../pages/logout.page.tsx';
import Profile from '../pages/profile.page.tsx';

export const AuthorizedAppRoutes = () => {
  return (
    <Routes>
      <Route path={CommonRoutes.Home} element={<Layout />}>
        <Route index element={<Home />} errorElement={<ErrorPage />} />
        <Route
          path={AuthorizedRoute.User}
          element={<User />}
          errorElement={<ErrorPage />}
        />
        <Route
          path={AuthorizedRoute.Training}
          element={<Training />}
          errorElement={<ErrorPage />}
        />
        <Route
          path={AuthorizedRoute.TrainingDetail}
          element={<TrainingDetail />}
          errorElement={<ErrorPage />}
        />
        <Route
          path={AuthorizedRoute.Profile}
          element={<Profile />}
          errorElement={<ErrorPage />}
        />
        <Route path={CommonRoutes.Logout} element={<LogoutUser />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
};

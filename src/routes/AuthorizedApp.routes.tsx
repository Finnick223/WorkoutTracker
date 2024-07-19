import { Route, Routes } from 'react-router-dom';
import { CommonRoutes, AuthorizedRoute } from 'src/enums/routes.enums.ts';
import Layout from 'src/pages/layout.page.tsx';
import User from 'src/pages/userMeasurement.page.tsx';
import Training from 'src/pages/training.page.tsx';
import Home from 'src/pages/home.page.tsx';
import TrainingDetail from 'src/pages/Training/trainingDetail.page.tsx';
import { ErrorPage } from 'src/pages/Error.page.tsx';
import LogoutUser from 'src/pages/logout.page.tsx';
import Profile from 'src/pages/profile.page.tsx';

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

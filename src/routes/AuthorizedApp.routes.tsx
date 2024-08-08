import { Route, Routes, useLocation } from 'react-router-dom';
import { CommonRoutes, AuthorizedRoute } from 'src/enums/routes.enums.ts';
import Layout from 'src/pages/layout.page.tsx';
import User from 'src/pages/userMeasurement.page.tsx';
import Training from 'src/pages/training.page.tsx';
import Home from 'src/pages/home.page.tsx';
import TrainingDetail from 'src/pages/Training/trainingDetail.page.tsx';
import { NotFoundPage } from 'src/pages/notFound.page';
import LogoutUser from 'src/pages/logout.page.tsx';
import Profile from 'src/pages/profile.page.tsx';
import { AnimatePresence } from 'framer-motion';

export const AuthorizedAppRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path={CommonRoutes.Home} element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={AuthorizedRoute.User} element={<User />} />
          <Route path={AuthorizedRoute.Training} element={<Training />} />
          <Route
            path={AuthorizedRoute.TrainingDetail}
            element={<TrainingDetail />}
          />
          <Route path={AuthorizedRoute.Profile} element={<Profile />} />
          <Route path={CommonRoutes.Logout} element={<LogoutUser />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

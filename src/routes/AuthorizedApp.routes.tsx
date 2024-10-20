import { Route, Routes, useLocation } from 'react-router-dom';
import { CommonRoutes, AuthorizedRoute } from 'src/enums/routes.enums.ts';
import Layout from 'src/pages/layout.page.tsx';
import UserMeasurement from 'src/pages/User/userMeasurement.page';
import Training from 'src/pages/training.page.tsx';
import Home from 'src/pages/home.page.tsx';
import TrainingDetail from 'src/pages/Training/trainingDetail.page.tsx';
import { NotFoundPage } from 'src/pages/notFound.page';
import LogoutUser from 'src/pages/logout.page.tsx';
import Profile from 'src/pages/profile.page.tsx';
import { AnimatePresence } from 'framer-motion';
import UserCharts from 'src/pages/User/userCharts.page';
import UserHistory from 'src/pages/User/userHistory.page';
import { UserPageLayout } from 'src/pages/user.page';
import About from 'src/pages/Footer/about.page';
import Team from 'src/pages/Footer/team.page';
import PrivacyPolicy from 'src/pages/Footer/privacyPolicy.page';
import Terms from 'src/pages/Footer/terms.page';
import Contact from 'src/pages/Footer/contact.page';

export const AuthorizedAppRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path={CommonRoutes.Home} element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={AuthorizedRoute.User} element={<UserPageLayout />}>
            <Route index element={<UserMeasurement />} />
            <Route path={AuthorizedRoute.Charts} element={<UserCharts />} />
            <Route path={AuthorizedRoute.History} element={<UserHistory />} />
          </Route>
          <Route path={AuthorizedRoute.Training} element={<Training />} />
          <Route
            path={AuthorizedRoute.TrainingDetail}
            element={<TrainingDetail />}
          />
          <Route path={AuthorizedRoute.Profile} element={<Profile />} />
          <Route path={CommonRoutes.Logout} element={<LogoutUser />} />
          <Route path={CommonRoutes.About} element={<About />} />
          <Route path={CommonRoutes.Team} element={<Team />} />
          <Route
            path={CommonRoutes.PrivacyPolicy}
            element={<PrivacyPolicy />}
          />
          <Route path={CommonRoutes.Terms} element={<Terms />} />
          <Route path={CommonRoutes.Contact} element={<Contact />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

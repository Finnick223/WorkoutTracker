import { Route, Routes, useLocation } from 'react-router-dom';
import { CommonRoutes, UnAuthorizedRoute } from 'src/enums/routes.enums.ts';
import Layout from 'src/pages/layout.page.tsx';
import Home from 'src/pages/home.page.tsx';
import Login from 'src/pages/login.page.tsx';
import Register from 'src/pages/register.page.tsx';
import { NotFoundPage } from 'src/pages/notFound.page';
import LogoutUser from 'src/pages/logout.page.tsx';
import { AnimatePresence } from 'framer-motion';
import About from 'src/pages/Footer/about.page';
import Team from 'src/pages/Footer/team.page';
import PrivacyPolicy from 'src/pages/Footer/privacyPolicy.page';
import Terms from 'src/pages/Footer/terms.page';
import Contact from 'src/pages/Footer/contact.page';

export const UnAuthorizedAppRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path={CommonRoutes.Home} element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={UnAuthorizedRoute.Login} element={<Login />} />
          <Route path={UnAuthorizedRoute.Register} element={<Register />} />
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

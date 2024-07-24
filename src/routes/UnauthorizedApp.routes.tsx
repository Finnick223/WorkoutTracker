import { Route, Routes } from 'react-router-dom';
import { CommonRoutes, UnAuthorizedRoute } from 'src/enums/routes.enums.ts';
import Layout from 'src/pages/layout.page.tsx';
import Home from 'src/pages/home.page.tsx';
import Login from 'src/pages/login.page.tsx';
import Register from 'src/pages/register.page.tsx';
import { NotFoundPage } from 'src/pages/notFound.page';
import LogoutUser from 'src/pages/logout.page.tsx';

export const UnAuthorizedAppRoutes = () => {
  return (
    <Routes>
      <Route path={CommonRoutes.Home} element={<Layout />}>
        <Route index element={<Home />} />
        <Route path={UnAuthorizedRoute.Login} element={<Login />} />
        <Route path={UnAuthorizedRoute.Register} element={<Register />} />
        <Route path={CommonRoutes.Logout} element={<LogoutUser />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

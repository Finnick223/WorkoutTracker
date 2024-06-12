import { Route, Routes } from 'react-router-dom';
import { CommonRoutes, UnAuthorizedRoute } from '../enums/routes.enums.ts';
import Layout from '../pages/layout.page.tsx';
import Home from '../pages/home.page.tsx';
import Login from '../pages/login.page.tsx';
import Register from '../pages/register.page.tsx';
import { ErrorPage } from '../pages/Error.page.tsx';
import LogoutUser from '../pages/logout.page.tsx';

export const UnAuthorizedAppRoutes = () => {
  return (
    <Routes>
      <Route path={CommonRoutes.Home} element={<Layout />}>
        <Route index element={<Home />} errorElement={<ErrorPage />} />
        <Route
          path={UnAuthorizedRoute.Login}
          element={<Login />}
          errorElement={<ErrorPage />}
        />
        <Route
          path={UnAuthorizedRoute.Register}
          element={<Register />}
          errorElement={<ErrorPage />}
        />
        <Route path={CommonRoutes.Logout} element={<LogoutUser />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
};

import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
  } from 'react-router-dom';
import { CommonRoutes, UnAuthorizedRoute } from '../enums/routes.enums.ts'
import Layout from '../pages/layout.page.tsx';
import Home from '../pages/home.page.tsx';
import Login, { action as loginAction } from '../pages/login.page.tsx';
import Register from '../pages/register.page.tsx';
import { ErrorPage } from '../pages/Error.page.tsx';
import LogoutUser from '../pages/logout.page.tsx';

export const UnAuthorizedAppRoutes = () => {

   const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path={CommonRoutes.Home} element={<Layout />}>
        <Route index element={<Home />} errorElement={<ErrorPage />} />
        <Route
          path={UnAuthorizedRoute.Login}
          element={<Login />}
          action={loginAction}
          errorElement={<ErrorPage />}
        />
        <Route
          path={UnAuthorizedRoute.Register}
          element={<Register />}
          errorElement={<ErrorPage />}
        />
        <Route 
          path={CommonRoutes.Logout}
          element={<LogoutUser />}
       />
        <Route path="*" element={<ErrorPage />} />
      </Route>,
    ),
  );
  return router;
}
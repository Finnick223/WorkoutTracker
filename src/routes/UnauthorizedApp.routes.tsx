import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
  } from 'react-router-dom';
import { CommonRoutes, UnAuthorizedRoute } from '../enums/routes.enums.ts'
import Layout from '../pages/layout.page.tsx';
import User from '../pages/user.page.tsx';
import Training from '../pages/training.page.tsx';
import Home from '../pages/home.page.tsx';
import Login, { action as loginAction } from '../pages/login.page.tsx';
import Register from '../pages/register.page.tsx';
import TrainingDetail from '../pages/Training/trainingDetail.page.tsx';
import { ErrorPage } from '../pages/Error.page.tsx';

export const UnAuthorizedAppRoutes = () => {

   const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path={CommonRoutes.Home} element={<Layout />}>
        <Route index element={<Home />} errorElement={<ErrorPage />} />
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
        <Route path="*" element={<ErrorPage />} />
      </Route>,
    ),
  );
  return router;
}



// import { Routes, Route } from 'react-router-dom';
// import { CommonRoutes, UnAuthorizedRoute } from '../enums/routes.enums';
// import Layout from '../pages/layout.page';
// import User from '../pages/user.page';
// import Training from '../pages/training.page';
// import Home from '../pages/home.page';
// import Login, { action as loginAction } from '../pages/login.page';
// import Register from '../pages/register.page';
// import TrainingDetail from '../pages/Training/trainingDetail.page';
// import { ErrorPage } from '../pages/Error.page';

// const UnAuthorizedAppRoutes = () => (
//     <Routes>
//       <Route path={CommonRoutes.Home} element={<Layout />}>
//         <Route index element={<Home />} />
//         <Route path={CommonRoutes.User} element={<User />} />
//         <Route path={CommonRoutes.Training} element={<Training />} />
//         <Route path={CommonRoutes.TrainingDetail} element={<TrainingDetail />} />
//         <Route path={UnAuthorizedRoute.Login} element={<Login />} action={loginAction} />
//         <Route path={UnAuthorizedRoute.Register} element={<Register />} />
//         <Route path="*" element={<ErrorPage />} />
//       </Route>
//     </Routes>
// );

// export default UnAuthorizedAppRoutes;

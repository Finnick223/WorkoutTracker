import {
  RouterProvider,
} from 'react-router-dom';
import { Routes } from '../src/routes/Routes.routes'

function App() {
  const router = Routes();

  return <RouterProvider router={router} />;
}

export default App;



// import { BrowserRouter } from 'react-router-dom';
// import { Routes } from '../src/routes/Routes.routes'
// import UnAuthorizedAppRoutes from '../src/routes/UnauthorizedApp.routes';


// function App() {
//   return (
//     <BrowserRouter> 
//       <UnAuthorizedAppRoutes /> 
//     </BrowserRouter>
//   );
// }

// export default App;

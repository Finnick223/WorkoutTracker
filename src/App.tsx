import {
  RouterProvider,
} from 'react-router-dom';
import { Routes } from '../src/routes/Routes.routes'
import { AuthProvider } from './providers/UserContext.provider.tsx';


function App() {
  const router = Routes();

  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
);
}

export default App;


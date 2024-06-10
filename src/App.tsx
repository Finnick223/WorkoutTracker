import {
  RouterProvider,
} from 'react-router-dom';
import { Routes } from '../src/routes/Routes.routes'
import { AuthProvider } from './providers/UserContext.provider.tsx';
import { ReactQueryProvider } from './providers/ReactQuery.provider.tsx';

function App() {
  const router = Routes();

  return (
    <AuthProvider>
      <ReactQueryProvider>
        <RouterProvider router={router} />
      </ReactQueryProvider>
    </AuthProvider>
);
}

export default App;


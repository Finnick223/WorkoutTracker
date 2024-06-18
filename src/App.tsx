import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from '../src/routes/Routes.routes';
import { AuthProvider } from './providers/UserContext.provider.tsx';
import { ReactQueryProvider } from './providers/ReactQuery.provider.tsx';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <ReactQueryProvider>
      <AuthProvider>
        <Router>
          <Toaster />
          <Routes />
        </Router>
      </AuthProvider>
    </ReactQueryProvider>
  );
}

export default App;

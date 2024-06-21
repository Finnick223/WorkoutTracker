import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from '../src/routes/Routes.routes';
import { AuthProvider } from './providers/UserContext.provider.tsx';
import { ReactQueryProvider } from './providers/ReactQuery.provider.tsx';
import { Toaster } from 'react-hot-toast';
import { CookiesProvider } from 'react-cookie'

function App() {
  return (
    <CookiesProvider defaultSetOptions={{ path: '/' }}>
      <ReactQueryProvider>
        <AuthProvider>
          <Router>
            <Toaster />
            <Routes />
          </Router>
        </AuthProvider>
      </ReactQueryProvider>
    </CookiesProvider>
  );
}

export default App;

import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from 'src/routes/Routes.routes';
import { AuthProvider } from 'src/providers/UserContext.provider.tsx';
import { ReactQueryProvider } from 'src/providers/ReactQuery.provider.tsx';
import { Toaster } from 'react-hot-toast';
import { CookiesProvider } from 'react-cookie';
import { MaterialProvider } from './providers/MaterialUI.provider';
import { HealthBanner } from './components/HealthBanner/HealthBanner.component';

function App() {
  return (
    <CookiesProvider defaultSetOptions={{ path: '/' }}>
      <ReactQueryProvider>
        <MaterialProvider>
          <AuthProvider>
            <Router>
              <HealthBanner />
              <Toaster />
              <Routes />
            </Router>
          </AuthProvider>
        </MaterialProvider>
      </ReactQueryProvider>
    </CookiesProvider>
  );
}

export default App;

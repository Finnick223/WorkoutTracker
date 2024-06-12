import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from '../src/routes/Routes.routes';
import { AuthProvider } from './providers/UserContext.provider.tsx';
import { ReactQueryProvider } from './providers/ReactQuery.provider.tsx';

function App() {
  return (
    <ReactQueryProvider>
      <AuthProvider>
        <Router>
          <Routes />
        </Router>
      </AuthProvider>
    </ReactQueryProvider>
  );
}

export default App;

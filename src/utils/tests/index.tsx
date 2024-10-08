import { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from '../../providers/UserContext.provider.tsx';
import { ReactQueryProvider } from '../../providers/ReactQuery.provider.tsx';
import { CookiesProvider } from 'react-cookie';
import { MaterialProvider } from 'src/providers/MaterialUI.provider.tsx';
// import { HealthBanner } from 'src/components/HealthBanner/HealthBanner.component.tsx';
// import { Toaster } from 'react-hot-toast';

const AllProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <CookiesProvider defaultSetOptions={{ path: '/' }}>
      <ReactQueryProvider>
        <MaterialProvider>
          <AuthProvider>
            {/* <HealthBanner /> */}
            {/* <Toaster /> */}
            <Router>{children}</Router>
          </AuthProvider>
        </MaterialProvider>
      </ReactQueryProvider>
    </CookiesProvider>
  );
};

const renderWithProviders = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: AllProviders, ...options });

export * from '@testing-library/react';
export { renderWithProviders as render };

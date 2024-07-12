import { ReactElement } from "react";
import { render, RenderOptions } from '@testing-library/react'
// import userEvent from '@testing-library/user-event'
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from '../../providers/UserContext.provider.tsx';
import { ReactQueryProvider } from '../../providers/ReactQuery.provider.tsx';
import { CookiesProvider } from 'react-cookie'

const AllProviders = ({children}: {children: React.ReactNode}) => {
    return (
    <CookiesProvider defaultSetOptions={{ path: '/' }}>
      <ReactQueryProvider>
        <AuthProvider>
          <Router>
            { children }
          </Router>
        </AuthProvider>
      </ReactQueryProvider>
    </CookiesProvider>
    )
  }
  
  const renderWithProviders = (
    ui: ReactElement,
    options?: Omit<RenderOptions, 'wrapper'>,
  ) => render(ui, {wrapper: AllProviders, ...options})
  
  export * from '@testing-library/react'
  export {renderWithProviders as render}
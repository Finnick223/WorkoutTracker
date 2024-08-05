import { UnAuthorizedAppRoutes } from './UnauthorizedApp.routes';
import { AuthorizedAppRoutes } from './AuthorizedApp.routes';
import useAuthStatus from 'src/hooks/useAuth';

export const Routes = () => {
  const { isLoggedIn, isLoading } = useAuthStatus();

  return !isLoading && isLoggedIn ? (
    <AuthorizedAppRoutes />
  ) : (
    <UnAuthorizedAppRoutes />
  );
};

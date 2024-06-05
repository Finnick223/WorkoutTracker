import { useContext } from 'react';
import { AuthContext } from '../providers/UserContext.provider';
import { UnAuthorizedAppRoutes} from "./UnauthorizedApp.routes";
import { AuthorizedAppRoutes } from "./AuthorizedApp.routes";

export const Routes = () => {
  const { isLoggedIn } = useContext(AuthContext);
  // console.log("czy zalogowany w routes ? " + isLoggedIn);
  


  if (isLoggedIn) {
    const routes = AuthorizedAppRoutes()
    return routes
  }
  const routes = UnAuthorizedAppRoutes()
  return routes;
}
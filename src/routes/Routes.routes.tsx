import { UnAuthorizedAppRoutes} from "./UnauthorizedApp.routes";
import { AuthorizedAppRoutes } from "./AuthorizedApp.routes";
import useAuthStatus from "../hooks/useAuth";


export const Routes = () => {
  const { isLoggedIn } = useAuthStatus();
  console.log("czy zalogowany w routes ? " + isLoggedIn);
  
  if (isLoggedIn) {
    return <AuthorizedAppRoutes />
  }
  return <UnAuthorizedAppRoutes />
}
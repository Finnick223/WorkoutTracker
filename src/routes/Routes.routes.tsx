import { UnAuthorizedAppRoutes, 
  // AuthorizedAppRoutes 
} from "./UnauthorizedApp.routes";
export const Routes = () => {
  // if (autoryzacja) {
  //   const routes = AuthorizedAppRoutes()
  //   return routes
  // }
  const routes = UnAuthorizedAppRoutes()
  return routes;
}


// import { AuthorizedAppRoutes } from ''
// import { UnAuthorizedAppRoutes } from '../routes/UnauthorizedApp.routes'

// export const Routes = () => {
  //deklaracja autoryzacji

//   if (autoryzacja) return <autorizedApp />

//   return UnAuthorizedAppRoutes;
// }
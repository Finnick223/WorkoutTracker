import { Outlet} from "react-router-dom";
import Appbar from "../components/AppBar"


const Layout = () => {
  return (
    <>
      <Appbar/>
      <Outlet />
    </>
  )
};

export default Layout;







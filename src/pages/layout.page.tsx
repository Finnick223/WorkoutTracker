import { Outlet } from 'react-router-dom';
import Appbar from 'src/modules/Header/AppBar.component';

const Layout = () => {
  return (
    <>
      <Appbar />
      <Outlet />
    </>
  );
};

export default Layout;

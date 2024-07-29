import { CssBaseline } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Appbar from 'src/modules/Header/AppBar.component';

const Layout = () => {
  return (
    <>
      <CssBaseline />
      <Appbar />
      <Outlet />
    </>
  );
};

export default Layout;

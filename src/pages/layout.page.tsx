import { CssBaseline, Stack } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { Footer } from 'src/modules/Footer/Footer.component';
import Appbar from 'src/modules/Header/AppBar.component';

const Layout = () => {
  return (
    <>
      <CssBaseline />
      <Stack minHeight="100vh">
        <Appbar />
        <Outlet />
      </Stack>
      <Footer />
    </>
  );
};

export default Layout;

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';

const pages = ['User', 'Workout', 'Exercise'];
const settings = ['Login', 'Register'];
// const settings = ['Profile', 'Account', 'Dashboard', 'Login', 'Logout', 'Register'];

function ResponsiveAppBar() {
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="relative" sx={{marginBottom: "5vh"}}>
      <Container maxWidth="xl" >
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 6,
              display: { md: 'flex' },
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            WorkoutTracker
          </Typography>
          <Box sx={{ flexGrow: 1, display: { md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <Typography textAlign="center" ><Link style={{ textDecoration: 'none', color: 'inherit' }} to={`/${page}`}>{page}</Link></Typography>
              </Button>
            ))}
          </Box>

          <Box sx={{ flex: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp"/>
              </IconButton>
            </Tooltip>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                <Typography textAlign="center" ><Link style={{ textDecoration: 'none', color: 'inherit' }} to={`/${setting}`}>{setting}</Link></Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;


      {/* <h1 className="navbar--title">workout tracker</h1>
      <section className="navbar--route">
      <Link to="/user"><button className="navbar--button">user</button></Link>
      <Link to="/workout"><button className="navbar--button">workout</button></Link>
      <Link to="/exercise"><button className="navbar--button">exercise</button></Link>
      </section>
      <section className="navbar--login">
      <Link to="/login"><button className="navbar--button">Login</button></Link>
      <Link to="/register"><button className="navbar--button">Register</button></Link>        
      </section> */}
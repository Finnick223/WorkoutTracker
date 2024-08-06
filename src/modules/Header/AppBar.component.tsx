import { useState } from 'react';
import useAuthStatus from 'src/hooks/useAuth';
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
import CustomLink from 'src/components/Link/Link.component';

function ResponsiveAppBar() {
  const { isLoggedIn } = useAuthStatus();

  const pages = isLoggedIn ? ['User', 'Training'] : [];
  const settings = isLoggedIn ? ['Profile', 'Logout'] : ['Login', 'Register'];

  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="relative" sx={{ marginBottom: '5vh' }}>
      <Container maxWidth="xl">
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
              <CustomLink key={page} href={`/${page}`} color="inherit">
                <Button sx={{ my: 2, color: 'white', display: 'block' }}>
                  <Typography textAlign="center">{page}</Typography>
                </Button>
              </CustomLink>
            ))}
          </Box>

          <Box sx={{ flex: 0 }}>
            {isLoggedIn ? (
              <>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt="Remy Sharp" />
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
                    <CustomLink
                      key={setting}
                      color="inherit"
                      href={`/${setting}`}
                    >
                      <MenuItem onClick={handleCloseUserMenu}>
                        <Typography textAlign="center">{setting}</Typography>
                      </MenuItem>
                    </CustomLink>
                  ))}
                </Menu>
              </>
            ) : (
              settings.map((page) => (
                <CustomLink key={page} color="inherit" href={`/${page}`}>
                  <Button sx={{ my: 2, color: 'white', display: 'block' }}>
                    <Typography textAlign="center">{page}</Typography>
                  </Button>
                </CustomLink>
              ))
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;

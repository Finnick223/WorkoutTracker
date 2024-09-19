import { useCallback, useMemo, useState } from 'react';
import useAuthStatus from 'src/hooks/useAuth';
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Container,
  Button,
} from '@mui/material';
import { Link } from 'react-router-dom';
import CustomLink from 'src/components/Link/Link.component';
import { UserMenu } from './UserMenu.component';

export default function ResponsiveAppBar() {
  const { isLoggedIn } = useAuthStatus();

  const pages = useMemo(
    () => (isLoggedIn ? ['User', 'Training'] : []),
    [isLoggedIn],
  );
  const settings = useMemo(
    () => (isLoggedIn ? ['Profile', 'Logout'] : ['Login', 'Register']),
    [isLoggedIn],
  );

  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenUserMenu = useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      setAnchorElUser(event.currentTarget);
    },
    [],
  );

  const handleCloseUserMenu = useCallback(() => {
    setAnchorElUser(null);
  }, []);

  return (
    <AppBar position="relative" sx={{ marginBottom: '5vh' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 6,
              fontWeight: 600,
              letterSpacing: '.05rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            WorkoutTracker
          </Typography>
          <Box sx={{ flexGrow: 1, display: { sm: 'flex' } }}>
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
              <UserMenu
                anchorElUser={anchorElUser}
                handleOpenUserMenu={handleOpenUserMenu}
                handleCloseUserMenu={handleCloseUserMenu}
                settings={settings}
              />
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

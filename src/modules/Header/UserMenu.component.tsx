import {
  Avatar,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from '@mui/material';
import CustomLink from 'src/components/Link/Link.component';
import { UserMenuProps } from 'src/interfaces/user.interfaces';

export const UserMenu = ({
  anchorElUser,
  handleOpenUserMenu,
  handleCloseUserMenu,
  settings,
}: UserMenuProps) => (
  <>
    <Tooltip title="Open settings">
      <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
        <Avatar alt="User Avatar" />
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
        <CustomLink key={setting} color="inherit" href={`/${setting}`}>
          <MenuItem onClick={handleCloseUserMenu}>
            <Typography textAlign="center">{setting}</Typography>
          </MenuItem>
        </CustomLink>
      ))}
    </Menu>
  </>
);

import MenuIcon from '@mui/icons-material/Menu';
import { Container, Menu, MenuItem, Stack } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { MouseEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import materialLogo from 'src/assets/material-ui.svg';
import { navigation } from 'src/utils';
import OptionsMenuTest from './OptionsMenuTest';

const TutorialNavbar = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const handleOpenMenu = (e: MouseEvent<HTMLButtonElement>) => setAnchorEl(e.currentTarget);
  const handleCloseMenu = () => setAnchorEl(null);

  return (
    <AppBar position="sticky" color="secondary">
      <Container maxWidth="xl">
        <Toolbar sx={{ gap: 3, justifyContent: 'space-between' }}>
          <Stack direction="row" spacing={2} alignItems="center">
            {/* MENU */}
            <IconButton
              id="resources-button"
              aria-label="menu"
              aria-controls={open ? 'resources-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              size="large"
              edge="start"
              color="inherit"
              onClick={handleOpenMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="resources-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleCloseMenu}
              disableScrollLock
              keepMounted
              MenuListProps={{
                'aria-labelledby': 'resources-button',
                sx: { p: 2, overflow: 'auto', height: '600px' },
              }}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
            >
              {navigation.map((route) => (
                <MenuItem
                  component={Link}
                  to={route.route}
                  color="inherit"
                  key={route.page}
                  onClick={handleCloseMenu}
                >
                  {route.page}
                </MenuItem>
              ))}
            </Menu>
            {/* LOGO */}
            <IconButton
              aria-label="nav-logo-button"
              size="large"
              edge="start"
              component={Link}
              to="/"
            >
              <img src={materialLogo} alt="material-ui-logo" width={40} />
            </IconButton>
            <Typography variant="h6" sx={{ display: { xs: 'none', sm: 'inline-block' } }}>
              Tutorial React Material UI
            </Typography>
          </Stack>

          <OptionsMenuTest />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default TutorialNavbar;

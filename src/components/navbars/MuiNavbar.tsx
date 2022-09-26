import { Box, Button, Stack, Menu, MenuItem, Container } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { forwardRef, useState, MouseEvent } from 'react';
import { Link, NavLink, NavLinkProps } from 'react-router-dom';
import materialLogo from 'src/assets/material-ui.svg';
import { navigation } from 'src/utils';
import MenuIcon from '@mui/icons-material/Menu';

const CustomNavLink = forwardRef<any, Omit<NavLinkProps, 'style'>>((props, ref) => (
  <NavLink ref={ref} {...props} role={undefined} />
));

const MuiNavbar = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const handleOpenMenu = (e: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(e.currentTarget);
  };

  const handleCloseMenu = () => setAnchorEl(null);

  return (
    <AppBar position="sticky" color="secondary">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box>
            <IconButton
              id="resources-button"
              aria-label="hamburger-menu"
              onClick={handleOpenMenu}
              size="large"
              aria-controls={open ? 'resources-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              sx={{ flexGrow: 1, display: { xs: 'flex', xl: 'none' }, mr: '50px', color: '#fff' }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="resources-menu"
              anchorEl={anchorEl}
              keepMounted
              onClose={handleCloseMenu}
              open={open}
              disableScrollLock
              MenuListProps={{
                'aria-labelledby': 'resources-button',
                sx: { p: 2 },
              }}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              sx={{
                display: { xs: 'block', xl: 'none' },
              }}
            >
              {navigation.map((route, index) => (
                <MenuItem
                  component={CustomNavLink}
                  to={route.route}
                  color="inherit"
                  key={route.page}
                  sx={{
                    width: '200px',
                  }}
                  id={`tab-${index}`}
                  onClick={handleCloseMenu}
                >
                  {route.page}
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Link to="/">
            <IconButton aria-label="nav-logo-button" size="large" edge="start">
              <img src={materialLogo} alt="material-ui-logo" width={40} />
            </IconButton>
          </Link>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, width: 'max-content' }}>
            REACT MUI TUTORIAL
          </Typography>
          <Stack
            component="nav"
            direction="row"
            justifyContent="flex-start"
            mb={2}
            flexWrap="wrap"
            sx={{ position: 'relative', display: { xs: 'none', xl: 'flex' } }}
          >
            {navigation.map((route, index) => (
              <Button
                component={CustomNavLink}
                to={route.route}
                color="inherit"
                key={route.page}
                sx={{
                  width: '200px',
                }}
                id={`tab-${index}`}
              >
                {route.page}
              </Button>
            ))}
            <Box className="tab-active" />
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default MuiNavbar;

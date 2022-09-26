import {
  CatchingPokemon,
  CatchingPokemonTwoTone,
  KeyboardArrowDown,
  KeyboardArrowUp,
} from '@mui/icons-material';
import { Box, Button, ListItemIcon, ListItemText, Menu, MenuItem } from '@mui/material';
import { useState } from 'react';

const OptionsMenuTest = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const open = Boolean(anchorEl);

  return (
    <Box ml="auto">
      <Button
        variant="text"
        color="inherit"
        onClick={(e) => setAnchorEl(e.currentTarget)}
        id="options-button"
        aria-label="options-button"
        aria-controls={open ? 'options-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        endIcon={!anchorEl ? <KeyboardArrowDown /> : <KeyboardArrowUp />}
      >
        Options
      </Button>
      <Menu
        disableScrollLock
        id="options-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={() => setAnchorEl(null)}
        PaperProps={{
          sx: {
            background: 'rgba(255, 255, 255, 0.19)',
            boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
            WebkitBackdropFilter: 'blur(0px)',
            border: '1px solid rgba(255, 255, 255, 0.14)',
            backdropFilter: 'blur(4px)',
          },
        }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem>
          <ListItemIcon>
            <CatchingPokemon sx={{ fill: '#000' }} />
          </ListItemIcon>
          <ListItemText sx={{ color: '#000' }}>Option 1</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <CatchingPokemonTwoTone sx={{ fill: '#000' }} />
          </ListItemIcon>
          <ListItemText sx={{ color: '#000' }}>Option 2</ListItemText>
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default OptionsMenuTest;

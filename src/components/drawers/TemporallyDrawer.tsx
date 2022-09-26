import { Box, Button, Drawer, Typography } from '@mui/material';
import { useState } from 'react';

const TemporallyDrawer = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <Button aria-label="drawer-menu" variant="contained" onClick={() => setIsDrawerOpen(true)}>
        Temporally Drawer Left
      </Button>
      <Drawer
        variant="temporary"
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <Box p={2} width="250px" textAlign="center" role="presentation">
          <Typography variant="h6" color="initial">
            Side Panel
          </Typography>
        </Box>
      </Drawer>
    </>
  );
};

export default TemporallyDrawer;

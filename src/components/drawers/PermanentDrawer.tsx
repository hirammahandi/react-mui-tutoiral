import { Box, Typography } from '@mui/material';
import Drawer from '@mui/material/Drawer';

const PermanentDrawer = () => {
  return (
    <Drawer variant="permanent" anchor="left">
      <Box p={2} width="250px" textAlign="center" role="presentation">
        <Typography variant="h6" color="initial">
          Side Panel
        </Typography>
      </Box>
    </Drawer>
  );
};

export default PermanentDrawer;

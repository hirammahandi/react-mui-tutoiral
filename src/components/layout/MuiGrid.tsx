import { Box } from '@mui/material';
import Grid from '@mui/material/Grid';

const MuiGrid = () => {
  return (
    <Grid container spacing={2} my={4}>
      <Grid item xs={12} sm={6} md={3}>
        <Box bgcolor={'primary.light'} p={4}>
          Item 1
        </Box>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Box bgcolor={'primary.light'} p={4}>
          Item 2
        </Box>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Box bgcolor={'primary.light'} p={4}>
          Item 3
        </Box>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Box bgcolor={'primary.light'} p={4}>
          Item 4
        </Box>
      </Grid>
    </Grid>
  );
};

export default MuiGrid;

import { Paper, Grid } from '@mui/material';
import MuiBox from './MuiBox';

const MuiPaper = () => {
  return (
    <Paper sx={{ p: 4 }}>
      <Grid container spacing={1} justifyContent="space-between">
        <Grid item xs={12} sm={6} md={'auto'}>
          <MuiBox />
        </Grid>
        <Grid item xs={12} sm={6} md={'auto'}>
          <MuiBox />
        </Grid>
        <Grid item xs={12} sm={12} md={'auto'}>
          <MuiBox />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default MuiPaper;

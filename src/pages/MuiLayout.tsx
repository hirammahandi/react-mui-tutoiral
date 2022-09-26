import { Stack, Typography } from '@mui/material';
import MuiBox from '../components/layout/MuiBox';
import MuiGrid from '../components/layout/MuiGrid';
import MuiPaper from '../components/layout/MuiPaper';
import MuiStack from '../components/layout/MuiStack';
import MuiStackDivider from '../components/layout/MuiStackDivider';

const MuiLayout = () => {
  return (
    <>
      <Stack spacing={2}>
        <Typography variant="h5" color="initial">
          Box
        </Typography>
        <MuiBox />
        <Typography variant="h5" color="initial">
          Stack
        </Typography>
        <MuiStack />
        <Typography variant="h5" color="initial">
          Stack with divider
        </Typography>
        <MuiStackDivider />
      </Stack>

      <Typography variant="h5" color="initial">
        Grid layout
      </Typography>
      <MuiGrid />

      <MuiPaper />
    </>
  );
};

export default MuiLayout;

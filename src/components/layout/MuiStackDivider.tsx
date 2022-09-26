import { Divider, Stack } from '@mui/material';
import MuiBox from './MuiBox';

const MuiStackDivider = () => {
  return (
    <Stack
      direction="row"
      spacing={2}
      divider={<Divider orientation="vertical" flexItem />}
      sx={{ border: '1px solid' }}
    >
      <MuiBox />
      <MuiBox />
      <MuiBox />
      <MuiBox />
    </Stack>
  );
};

export default MuiStackDivider;

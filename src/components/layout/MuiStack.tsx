import { Stack } from '@mui/system';
import MuiBox from './MuiBox';

const MuiStack = () => {
  return (
    <Stack sx={{ border: '1px solid' }}>
      <MuiBox />
      <MuiBox />
    </Stack>
  );
};

export default MuiStack;

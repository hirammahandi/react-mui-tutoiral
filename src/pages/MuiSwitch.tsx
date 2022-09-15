import { Stack } from '@mui/material';
import GroupSwitch from '../components/switches/GroupSwitch';
import LabelSwitch from '../components/switches/LabelSwitch';

const MuiSwitch = () => {
  return (
    <Stack alignItems="center" spacing={2}>
      <LabelSwitch />
      <GroupSwitch />
    </Stack>
  );
};

export default MuiSwitch;

import { Stack } from '@mui/material';
import GroupCheckbox from '../components/checkboxes/GroupCheckbox';
import IconColorControlledCheckbox from '../components/checkboxes/IconColorControlledCheckbox';

const MuiCheckbox = () => {
  return (
    <Stack spacing={2}>
      <GroupCheckbox />
      <IconColorControlledCheckbox />
    </Stack>
  );
};

export default MuiCheckbox;

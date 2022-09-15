import { Stack } from '@mui/material';
import MultipleSelectField from '../components/select/MultipleSelectField';
import MultipleSelectChip from '../components/select/MultpleSelectFormControl';
import SIngleSelectField from '../components/select/SIngleSelectField';

const MuiSelectField = () => {
  return (
    <Stack spacing={2} direction="row">
      <SIngleSelectField />
      <MultipleSelectField />
      <MultipleSelectChip />
    </Stack>
  );
};

export default MuiSelectField;

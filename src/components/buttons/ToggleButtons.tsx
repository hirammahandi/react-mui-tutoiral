import { Stack } from '@mui/material';
import ExclusiveSelectionToggleButtons from './ExclusiveSelectionToggleButtons';
import MultipleSelectionToggleButtons from './MultipleSelectionToggleButtons';

const ToggleButtons = () => {
  return (
    <Stack direction="row" justifyContent="space-between">
      <MultipleSelectionToggleButtons />
      <ExclusiveSelectionToggleButtons />
    </Stack>
  );
};

export default ToggleButtons;

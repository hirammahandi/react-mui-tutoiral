import { Stack } from '@mui/material';
import Provider from 'src/context';
import ColorsButtons from '../components/buttons/ColorsButtons';
import GroupButtons from '../components/buttons/GroupButtons';
import IconsButton from '../components/buttons/IconsButton';
import SizesButtons from '../components/buttons/SizesButtons';
import ToggleButtons from '../components/buttons/ToggleButtons';
import VariantsButton from '../components/buttons/VariantsButton';

const MuiButton = () => {
  return (
    <Provider>
      <Stack spacing={4}>
        <VariantsButton />
        <ColorsButtons />
        <SizesButtons />
        <IconsButton />
        <GroupButtons />
        <ToggleButtons />
      </Stack>
    </Provider>
  );
};

export default MuiButton;

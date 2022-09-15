import { Stack } from '@mui/material';
import AdornmentTextField from '../components/inputs/AdornmentTextField';
import PropsTextField from '../components/inputs/PropsTextField';
import SizesTextField from '../components/inputs/SizesTextField';
import VariantsTextField from '../components/inputs/VariantsTextField';

const MuiTextField = () => {
  return (
    <Stack spacing={4}>
      <VariantsTextField />
      <SizesTextField />
      <PropsTextField />
      <AdornmentTextField />
    </Stack>
  );
};

export default MuiTextField;

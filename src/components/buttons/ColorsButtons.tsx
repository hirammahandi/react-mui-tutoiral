import { Stack, Typography } from '@mui/material';
import ErrorColorButtons from './ErrorColorButtons';
import InfoColorButtons from './InfoColorButtons';
import PrimaryColorButtons from './PrimaryColorButtons';
import SecondaryColorButtons from './SecondaryColorButtons';
import SuccessColorButton from './SuccessColorButton';
import WarningColorButtons from './WarningColorButtons';

const ColorsButtons = () => {
  return (
    <div>
      <Typography variant="h5" color="initial">
        Color Buttons
      </Typography>
      <Stack spacing={2} direction="row" justifyContent="center">
        <PrimaryColorButtons />
        <SecondaryColorButtons />
        <ErrorColorButtons />
        <WarningColorButtons />
        <InfoColorButtons />
        <SuccessColorButton />
      </Stack>
    </div>
  );
};

export default ColorsButtons;

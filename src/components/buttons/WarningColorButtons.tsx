import { Button, Stack } from '@mui/material';

const WarningColorButtons = () => {
  return (
    <Stack spacing={1}>
      <Button variant="contained" color="warning">
        Warning
      </Button>
      <Button variant="outlined" color="warning">
        Warning
      </Button>
      <Button variant="text" color="warning">
        Warning
      </Button>
    </Stack>
  );
};

export default WarningColorButtons;

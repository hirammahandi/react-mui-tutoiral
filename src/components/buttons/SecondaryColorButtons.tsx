import { Button, Stack } from '@mui/material';

const SecondaryColorButtons = () => {
  return (
    <Stack spacing={1}>
      <Button variant="contained" color="secondary">
        Secondary
      </Button>
      <Button variant="outlined" color="secondary">
        Secondary
      </Button>
      <Button variant="text" color="secondary">
        Secondary
      </Button>
    </Stack>
  );
};

export default SecondaryColorButtons;

import { Button, Stack } from '@mui/material';

const PrimaryColorButtons = () => {
  return (
    <Stack spacing={1}>
      <Button variant="contained" color="primary">
        Primary
      </Button>
      <Button variant="outlined" color="primary">
        Primary
      </Button>
      <Button variant="text" color="primary">
        Primary
      </Button>
    </Stack>
  );
};

export default PrimaryColorButtons;

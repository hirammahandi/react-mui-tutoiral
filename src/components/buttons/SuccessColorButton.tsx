import { Button, Stack } from '@mui/material';

const SuccessColorButton = () => {
  return (
    <Stack spacing={1}>
      <Button variant="contained" color="success">
        Success
      </Button>
      <Button variant="outlined" color="success">
        Success
      </Button>
      <Button variant="text" color="success">
        Success
      </Button>
    </Stack>
  );
};

export default SuccessColorButton;

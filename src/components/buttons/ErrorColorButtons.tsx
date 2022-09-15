import { Stack, Button } from '@mui/material';

const ErrorColorButtons = () => {
  return (
    <Stack spacing={1}>
      <Button variant="contained" color="error">
        Error
      </Button>
      <Button variant="outlined" color="error">
        Error
      </Button>
      <Button variant="text" color="error">
        Error
      </Button>
    </Stack>
  );
};

export default ErrorColorButtons;

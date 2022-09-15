import { Stack, Button } from '@mui/material';

const InfoColorButtons = () => {
  return (
    <Stack spacing={1}>
      <Button variant="contained" color="info">
        Info
      </Button>
      <Button variant="outlined" color="info">
        Info
      </Button>
      <Button variant="text" color="info">
        Info
      </Button>
    </Stack>
  );
};

export default InfoColorButtons;

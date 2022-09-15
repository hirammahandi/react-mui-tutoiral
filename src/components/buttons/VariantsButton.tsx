import { Button, Stack, Typography } from '@mui/material';

const VariantsButton = () => {
  return (
    <div>
      <Typography variant="h5" color="initial">
        Variants Buttons
      </Typography>
      <Stack spacing={2} direction="row" justifyContent="center">
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
        <Button variant="outlined" color="secondary" href="https://google.com" target="_blank">
          Anchor
        </Button>
      </Stack>
    </div>
  );
};

export default VariantsButton;

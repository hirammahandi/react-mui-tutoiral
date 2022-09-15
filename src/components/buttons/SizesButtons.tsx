import { Button, Stack, Typography } from '@mui/material';

const SizesButtons = () => {
  return (
    <div>
      <Typography variant="h5" color="initial">
        Sizes Buttons
      </Typography>
      <Stack display="block" spacing={2} direction="row">
        <Button variant="contained" size="small">
          Small
        </Button>
        <Button variant="contained" size="medium">
          Medium
        </Button>
        <Button variant="contained" size="large">
          Large
        </Button>
      </Stack>
    </div>
  );
};

export default SizesButtons;

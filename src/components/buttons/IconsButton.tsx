import { Send } from '@mui/icons-material';
import { Stack, Button, IconButton, Typography } from '@mui/material';

const IconsButton = () => {
  return (
    <div>
      <Typography variant="h5" color="initial">
        Icons Buttons
      </Typography>
      <Stack spacing={2} direction="row">
        <Button variant="contained" color="primary" startIcon={<Send />}>
          Start Icon Button
        </Button>
        <Button variant="contained" color="primary" endIcon={<Send />}>
          End Icon Button
        </Button>
        <IconButton aria-label="send" color="success">
          <Send />
        </IconButton>
        <Button variant="contained" color="primary" disableElevation>
          Disabled elevation
        </Button>
        <Button variant="contained" color="primary" disableRipple>
          Disable Ripple
        </Button>
      </Stack>
    </div>
  );
};

export default IconsButton;

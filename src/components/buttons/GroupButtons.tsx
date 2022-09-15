import { Button, ButtonGroup, Stack, Typography } from '@mui/material';

const GroupButtons = () => {
  return (
    <div>
      <Typography variant="h5" color="initial">
        Buttons Group
      </Typography>
      <Stack direction="row" spacing={2}>
        <ButtonGroup variant="contained" color="primary" aria-label="actions">
          <Button>Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
        <ButtonGroup variant="outlined" color="primary" aria-label="actions">
          <Button>Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
        <ButtonGroup variant="text" color="primary" aria-label="actions">
          <Button>Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </Stack>
    </div>
  );
};

export default GroupButtons;

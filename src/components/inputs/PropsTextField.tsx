import { Stack, TextField, Typography } from '@mui/material';

const PropsTextField = () => {
  return (
    <div>
      <Typography variant="h5" color="initial">
        Input Props
      </Typography>
      <Stack direction="row" spacing={2}>
        <TextField id="name" label="Form Input" required />
        <TextField
          id="password"
          label="Password"
          type="password"
          helperText="Don't share your password"
        />
        <TextField
          id="read-only"
          label="Read Only"
          InputProps={{
            readOnly: true,
          }}
          defaultValue="Some Text"
        />
        <TextField id="error" label="Error" error helperText="Invalid Input" />
      </Stack>
    </div>
  );
};

export default PropsTextField;

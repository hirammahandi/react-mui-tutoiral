import { Stack, TextField, Typography } from '@mui/material';

const VariantsTextField = () => {
  return (
    <div>
      <Typography variant="h5" color="initial">
        Variants Text Field
      </Typography>
      <Stack direction="row" spacing={2}>
        <TextField id="name" label="Outlined" variant="outlined" />
        <TextField id="name" label="Filled" variant="filled" />
        <TextField id="name" label="Standard" variant="standard" />
      </Stack>
    </div>
  );
};

export default VariantsTextField;

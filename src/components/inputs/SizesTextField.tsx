import { Stack, TextField, Typography } from '@mui/material';

const SizesTextField = () => {
  return (
    <div>
      <Typography variant="h5" color="initial">
        Sizes Text Field
      </Typography>
      <Stack direction="row" spacing={2}>
        <TextField id="name" label="Small" variant="outlined" size="small" color="secondary" />
        <TextField id="name" label="Medium" variant="filled" size="medium" />
      </Stack>
    </div>
  );
};

export default SizesTextField;

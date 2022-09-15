import { Box, MenuItem, TextField, Typography } from '@mui/material';
import { ChangeEvent, useState } from 'react';

const SIngleSelectField = () => {
  const [country, setCountry] = useState('');
  const handleCountryChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCountry(e.target.value);
  };
  return (
    <Box width="250px">
      <Typography variant="h5" color="initial">
        Single Select
      </Typography>
      <TextField
        id="country"
        label="Select Country"
        select
        fullWidth
        value={country}
        onChange={handleCountryChange}
        sx={{ textAlign: 'start' }}
      >
        <MenuItem value="CU">Cuba</MenuItem>
        <MenuItem value="US">USA</MenuItem>
        <MenuItem value="ME">Mexico</MenuItem>
      </TextField>
    </Box>
  );
};

export default SIngleSelectField;

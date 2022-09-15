import { Box, Typography, TextField, MenuItem, Chip } from '@mui/material';
import { ChangeEvent, useState } from 'react';

const MultipleSelectField = () => {
  const [countries, setCountries] = useState<string[]>([]);

  const handleCountriesChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setCountries(typeof value === 'string' ? value.split(',') : value);
  };
  return (
    <Box width="250px">
      <Typography variant="h5" color="initial">
        Multiple Select
      </Typography>
      <TextField
        id="country"
        label="Select Country"
        select
        fullWidth
        SelectProps={{
          multiple: true,
          renderValue: (selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {(selected as string[]).map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          ),
        }}
        value={countries}
        onChange={handleCountriesChange}
        sx={{ textAlign: 'start' }}
      >
        <MenuItem value="CU">Cuba</MenuItem>
        <MenuItem value="US">USA</MenuItem>
        <MenuItem value="ME">Mexico</MenuItem>
      </TextField>
    </Box>
  );
};

export default MultipleSelectField;

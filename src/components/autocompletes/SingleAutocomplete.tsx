import { Autocomplete, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { skills } from '../../utils';

const SingleAutocomplete = () => {
  const [skill, setSkill] = useState<string | null>(null);
  return (
    <div>
      <Typography variant="h5" color="initial">
        Single Autocomplete
      </Typography>
      <Autocomplete
        options={skills}
        renderInput={(params) => <TextField {...params} label="Skills" />}
        value={skill}
        onChange={(_, newValue, reason) => {
          console.log(reason); //reason  = clear || selectOption
          setSkill(newValue);
        }}
      />
    </div>
  );
};

export default SingleAutocomplete;

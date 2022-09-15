import { Autocomplete, TextField } from '@mui/material';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { skills } from '../../utils';

const MultipleAutocomplete = () => {
  const [_skills, setSkills] = useState<string[]>([]);

  return (
    <div>
      <Typography variant="h5" color="initial">
        Multiple Autocomplete
      </Typography>
      <Autocomplete
        multiple
        value={_skills}
        options={skills}
        onChange={(_e, newValue) => setSkills(newValue)}
        renderInput={(params) => (
          <TextField {...params} id="multiple-autocomplete" label="Skills" />
        )}
      />
    </div>
  );
};

export default MultipleAutocomplete;

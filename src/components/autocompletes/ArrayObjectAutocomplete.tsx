import { Autocomplete, TextField } from '@mui/material';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { skills } from '../../utils';

type Skills = {
  id: number;
  label: string;
};

const skillsOptions = skills.map<Skills>((skill, index) => ({
  id: index + 1,
  label: skill,
}));

const ArrayObjectAutocomplete = () => {
  const [skill, setSkill] = useState<Skills | null>(null);

  return (
    <div>
      <Typography variant="h5" color="initial">
        Array of object autocomplete
      </Typography>
      <Autocomplete
        value={skill}
        onChange={(e, newValue: Skills | null) => setSkill(newValue)}
        options={skillsOptions}
        renderInput={(params) => (
          <TextField {...params} id="array-object-autocomplete" label="Some" />
        )}
      />
    </div>
  );
};

export default ArrayObjectAutocomplete;

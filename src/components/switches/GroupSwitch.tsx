import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import FormLabel from '@mui/material/FormLabel';
import Switch from '@mui/material/Switch';
import { ChangeEvent, useState } from 'react';

const GroupSwitch = () => {
  const [responsibilities, setResponsibilities] = useState<string[]>([]);

  const handleResponsibilitiesChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const index = responsibilities.indexOf(value);
    if (index === -1) setResponsibilities([...responsibilities, value]);
    else setResponsibilities(responsibilities.filter((_, i) => i !== index));
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Assign Responsibility</FormLabel>
      <FormControlLabel
        label="Hiram"
        control={
          <Switch
            value="Hiram"
            checked={responsibilities.includes('Hiram')}
            onChange={handleResponsibilitiesChange}
            color="error"
          />
        }
      />
      <FormControlLabel
        label="Kiki"
        control={
          <Switch
            value="Kiki"
            checked={responsibilities.includes('Kiki')}
            onChange={handleResponsibilitiesChange}
          />
        }
      />
      <FormControlLabel
        label="Daniel"
        control={
          <Switch
            value="Daniel"
            checked={responsibilities.includes('Daniel')}
            onChange={handleResponsibilitiesChange}
          />
        }
      />
      <FormHelperText>Helper text</FormHelperText>
    </FormControl>
  );
};

export default GroupSwitch;

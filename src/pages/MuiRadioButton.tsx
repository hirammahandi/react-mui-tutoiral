import {
  Box,
  FormControl,
  FormLabel,
  RadioGroup,
  FormHelperText,
  FormControlLabel,
  Radio,
} from '@mui/material';
import { useState } from 'react';

const MuiRadioButton = () => {
  const [yearOfXP, setYearOfXP] = useState('');

  return (
    <Box>
      <FormControl component="fieldset">
        <FormLabel component="legend" id="job-experience">
          Years of experience
        </FormLabel>
        <RadioGroup
          aria-label="job-experience"
          name="job-experience "
          value={yearOfXP}
          onChange={(e, value) => setYearOfXP(value)}
        >
          <FormControlLabel
            control={<Radio size="small" color="error" />}
            label="0-2"
            value="0-2"
          />
          <FormControlLabel
            control={<Radio size="medium" color="secondary" />}
            label="3-5"
            value="3-5"
          />
          <FormControlLabel control={<Radio />} label="6-10" value="6-10" />
        </RadioGroup>
        <FormHelperText>Helper text</FormHelperText>
      </FormControl>
    </Box>
  );
};

export default MuiRadioButton;

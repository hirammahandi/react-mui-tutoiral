import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
} from '@mui/material';
import { ChangeEvent, useState } from 'react';

const GroupCheckbox = () => {
  const [colors, setColors] = useState<string[]>([]);

  const handleColorsChange = (e: ChangeEvent<HTMLInputElement>) => {
    const index = colors.indexOf(e.target.value);
    if (index === -1) setColors([...colors, e.target.value]);
    else setColors(colors.filter((_color, i) => i !== index));
  };
  return (
    <Box>
      <FormControl>
        <FormLabel id="color">Select your favorites colors</FormLabel>
        <FormGroup row>
          <FormControlLabel
            value={'red'}
            label="Red"
            control={<Checkbox checked={colors.includes('red')} onChange={handleColorsChange} />}
          />
          <FormControlLabel
            value={'blue'}
            label="Blue"
            control={<Checkbox checked={colors.includes('blue')} onChange={handleColorsChange} />}
          />
          <FormControlLabel
            value={'green'}
            label="Green"
            control={<Checkbox checked={colors.includes('green')} onChange={handleColorsChange} />}
          />
        </FormGroup>
        <FormHelperText>Helper text</FormHelperText>
      </FormControl>
    </Box>
  );
};

export default GroupCheckbox;

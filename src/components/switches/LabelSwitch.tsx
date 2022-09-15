import { Box, FormControlLabel, Switch } from '@mui/material';
import { useState } from 'react';

const LabelSwitch = () => {
  const [isDark, setIsDark] = useState(false);

  return (
    <Box>
      <FormControlLabel
        label="Dark Mode"
        control={<Switch checked={isDark} onChange={(_, checked) => setIsDark(checked)} />}
      />
    </Box>
  );
};

export default LabelSwitch;

import { FormatBold, FormatItalic, FormatUnderlined } from '@mui/icons-material';
import { Stack, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';
import { MouseEvent, useState } from 'react';

const ExclusiveSelectionToggleButtons = () => {
  const [format, setFormat] = useState('');

  const handelFormatChange = (_: MouseEvent<HTMLElement>, format: string) => setFormat(format);

  return (
    <Stack spacing={2}>
      <div>
        <Typography variant="h6" color="initial">
          Exclusive Toggle Selection Button
        </Typography>
        <ToggleButtonGroup
          exclusive
          value={format}
          onChange={handelFormatChange}
          color="info"
          aria-label="text-formatting"
        >
          <ToggleButton value="bold" aria-label="bold">
            <FormatBold />
          </ToggleButton>
          <ToggleButton value="italic" aria-label="italic">
            <FormatItalic />
          </ToggleButton>
          <ToggleButton value="underline" aria-label="underline">
            <FormatUnderlined />
          </ToggleButton>
        </ToggleButtonGroup>
        <Typography variant="body1" color="initial">
          {format}
        </Typography>
      </div>
    </Stack>
  );
};

export default ExclusiveSelectionToggleButtons;

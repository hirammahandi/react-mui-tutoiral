import { FormatBold, FormatItalic, FormatUnderlined } from '@mui/icons-material';
import { Stack, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';
import { MouseEvent, useState } from 'react';

const MultipleSelectionToggleButtons = () => {
  const [formats, setFormats] = useState<string[]>([]);

  const handelFormatsChange = (_e: MouseEvent<HTMLElement>, updatedFormats: string[]) =>
    setFormats(updatedFormats);

  return (
    <Stack spacing={2}>
      <div>
        <Typography variant="h6" color="initial">
          Multiple Toggle Selection Button
        </Typography>
        <ToggleButtonGroup
          aria-label="text-formatting"
          value={formats}
          onChange={handelFormatsChange}
          color="info"
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
          {!!formats.length && JSON.stringify(formats)}
        </Typography>
      </div>
    </Stack>
  );
};

export default MultipleSelectionToggleButtons;

import { Bookmark, BookmarkBorder, Favorite, FavoriteBorder } from '@mui/icons-material';
import { Box, Checkbox } from '@mui/material';
import { blue, red } from '@mui/material/colors';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import { useState } from 'react';

const IconColorControlledCheckbox = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <Box>
      <Checkbox
        icon={<BookmarkBorder />}
        checkedIcon={<Bookmark />}
        onChange={handleChange}
        checked={checked}
      />
      <Checkbox
        aria-label="favorite"
        icon={<FavoriteBorder />}
        checkedIcon={<Favorite />}
        sx={{
          color: red[800],
          '&.Mui-checked': {
            color: red[600],
          },
        }}
        defaultChecked
      />
      <Checkbox
        aria-label="favorite"
        icon={<ThumbUpOffAltIcon />}
        checkedIcon={<ThumbUpAltIcon />}
        sx={{
          color: blue[800],
          '&.Mui-checked': {
            color: blue[600],
          },
        }}
      />
    </Box>
  );
};

export default IconColorControlledCheckbox;

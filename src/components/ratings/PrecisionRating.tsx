import { Rating, Typography } from '@mui/material';
import { ChangeEvent, useState } from 'react';

const PrecisionRating = () => {
  const [value, setValue] = useState<number | null>(null);
  const handleChange = (_e: ChangeEvent<{}>, newValue: number | null) => setValue(newValue);

  return (
    <div>
      <Typography variant="h5" color="initial">
        Rating with precision
      </Typography>
      <Rating
        value={value}
        onChange={handleChange}
        onChangeActive={(e, val) => console.log(val)}
        precision={0.5}
      />
    </div>
  );
};

export default PrecisionRating;

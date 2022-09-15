import { Stack } from '@mui/material';
import CustomIconRating from '../components/ratings/CustomIconRating';
import HighlightSelectedRating from '../components/ratings/HighlightSelectedRating';
import PrecisionRating from '../components/ratings/PrecisionRating';

const MuiRating = () => {
  return (
    <Stack spacing={2} justifyContent="center">
      <PrecisionRating />
      <CustomIconRating />
      <HighlightSelectedRating />
    </Stack>
  );
};

export default MuiRating;

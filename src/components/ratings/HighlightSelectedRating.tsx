import { Rating, Typography } from '@mui/material';

const HighlightSelectedRating = () => {
  return (
    <div>
      <Typography variant="h5" color="initial">
        Highlighted Rating
      </Typography>
      <Rating value={2} max={10} highlightSelectedOnly readOnly />
    </div>
  );
};

export default HighlightSelectedRating;

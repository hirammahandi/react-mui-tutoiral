import { Favorite, FavoriteBorder } from '@mui/icons-material';
import { Rating, Typography } from '@mui/material';
import { red } from '@mui/material/colors';

const CustomIconRating = () => {
  return (
    <div>
      <Typography variant="h5" color="initial">
        Rating with custom icon
      </Typography>
      <Rating
        icon={
          <Favorite
            fontSize="inherit"
            sx={{
              color: red[400],
            }}
          />
        }
        emptyIcon={
          <FavoriteBorder
            fontSize="inherit"
            sx={{
              color: red[400],
            }}
          />
        }
      />
    </div>
  );
};

export default CustomIconRating;

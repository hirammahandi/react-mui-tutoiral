import { Favorite, FavoriteBorder } from '@mui/icons-material';
import {
  Checkbox,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Paper,
  Typography,
} from '@mui/material';
import { red } from '@mui/material/colors';
import Scrollbars from 'rc-scrollbars';
import { imageItemData } from 'src/utils';

const ItemBarImageList = () => {
  return (
    <div>
      <Typography variant="h5" color="initial">
        Image list with custom scroll bars
      </Typography>
      <Scrollbars style={{ width: '75%', height: 450 }}>
        <Paper sx={{ p: 4 }}>
          <ImageList cols={3} gap={8}>
            {imageItemData.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                />
                <ImageListItemBar
                  title={item.title}
                  subtitle="Some subtitle"
                  position="bottom"
                  actionIcon={
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
                    />
                  }
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Paper>
      </Scrollbars>
    </div>
  );
};

export default ItemBarImageList;

import { ImageList, ImageListItem, ListSubheader, Paper } from '@mui/material';
import { imageItemData } from 'src/utils';

const WovenImageList = () => {
  return (
    <Paper sx={{ width: '70%', p: 4 }}>
      <ImageList variant="woven" sx={{ width: '100%', height: '450px' }} cols={3} gap={8}>
        <ImageListItem cols={3} key="Subheader">
          <ListSubheader component="div" sx={{ background: 'black', color: '#fff' }}>
            Woven Image List
          </ListSubheader>
        </ImageListItem>
        {imageItemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Paper>
  );
};

export default WovenImageList;

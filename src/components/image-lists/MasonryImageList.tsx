import { ImageList, ImageListItem, ListSubheader, Paper } from '@mui/material';
import { masonryImageItemData } from 'src/utils';

const MasonryImageList = () => {
  return (
    <Paper sx={{ width: '70%', height: 450, overflowY: 'scroll', p: 4 }}>
      <ImageList variant="masonry" cols={3} gap={8}>
        <ImageListItem cols={3} key="Subheader">
          <ListSubheader component="div" sx={{ background: 'black', color: '#fff' }}>
            Masonry Image List
          </ListSubheader>
        </ImageListItem>
        {masonryImageItemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Paper>
  );
};

export default MasonryImageList;

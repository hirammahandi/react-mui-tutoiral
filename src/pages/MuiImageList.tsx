import { Stack } from '@mui/material';
import BasicImageList from 'src/components/image-lists/BasicImageList';
import ItemBarImageList from 'src/components/image-lists/ItemBarImageList';
import MasonryImageList from 'src/components/image-lists/MasonryImageList';
import WovenImageList from 'src/components/image-lists/WovenImageList';

const MuiImageList = () => {
  return (
    <Stack spacing={2}>
      <BasicImageList />
      <WovenImageList />
      <MasonryImageList />
      <ItemBarImageList />
    </Stack>
  );
};

export default MuiImageList;

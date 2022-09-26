import { Stack } from '@mui/system';
import MuiCardWithAction from '../components/cards/MuiCardWithAction';
import MuiCardWithHeader from '../components/cards/MuiCardWithHeader';

const MuiCards = () => {
  return (
    <Stack direction="row" spacing={2}>
      <MuiCardWithAction />
      <MuiCardWithHeader />
    </Stack>
  );
};

export default MuiCards;

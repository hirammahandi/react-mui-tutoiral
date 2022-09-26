import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import RestoreIcon from '@mui/icons-material/Restore';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { useState } from 'react';

import SwipeableViews from 'react-swipeable-views';
import TextField from '@mui/material/TextField';
import { Stack } from '@mui/system';

const styles = {
  slide: {
    padding: 15,
    minHeight: '100vh',
    color: '#fff',
  },
  slide1: {
    background: '#FEA900',
  },
  slide2: {
    background: '#B3DC4A',
  },
  slide3: {
    background: '#6AC0FF',
  },
};

const MyComponent = ({
  index,
  onChangeIndex,
}: {
  index?: number;
  onChangeIndex: (index: number) => void;
}) => (
  <SwipeableViews index={index} onChangeIndex={onChangeIndex}>
    <div style={Object.assign({}, styles.slide, styles.slide1)}>
      <Stack spacing={2}>
        <TextField id="name" label="Name" />
        <TextField id="lastName" label="Last Name" />
        <TextField id="email" label="Email" />
      </Stack>
    </div>
    <div style={Object.assign({}, styles.slide, styles.slide2)}>slide n°2</div>
    <div style={Object.assign({}, styles.slide, styles.slide3)}>slide n°3</div>
  </SwipeableViews>
);

const BasicBottomNavigation = () => {
  const [value, setValue] = useState(0);

  const onChangeIndex = (index: number) => setValue(index);

  return (
    <>
      <MyComponent index={value} onChangeIndex={onChangeIndex} />
      <BottomNavigation
        value={value}
        onChange={(_e, newValue) => setValue(newValue)}
        sx={{ width: '100%', position: 'fixed', bottom: 0 }}
        showLabels //always show the labels
      >
        <BottomNavigationAction value={0} label="Recents" icon={<RestoreIcon />} />
        <BottomNavigationAction value={1} label="Favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction value={2} label="Nearby" icon={<LocationOnIcon />} />
      </BottomNavigation>
    </>
  );
};

export default BasicBottomNavigation;

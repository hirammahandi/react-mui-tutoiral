import { Stack, Typography } from '@mui/material';
import materialSvg from 'src/assets/material-ui.svg';

const Welcome = () => {
  return (
    <Stack spacing={5} alignItems="center">
      <Typography variant="h2" color="initial" textAlign="center">
        Welcome to react material ui tutorial!
      </Typography>
      <img src={materialSvg} alt="material ui icon" width={300} />
    </Stack>
  );
};

export default Welcome;

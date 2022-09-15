import { Box } from '@mui/material';

const MuiBox = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'primary.main',
        color: '#fff',
        width: 'max-content',
        aspectRatio: '1/1',
        p: '1rem',
        '&:hover': {
          backgroundColor: 'primary.light',
          transition: 'background-color 0.2s linear',
        },
      }}
    >
      CodeEvolution
    </Box>
  );
};

export default MuiBox;

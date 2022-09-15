import { Typography, Box } from '@mui/material';

const MuiTypography = () => {
  return (
    <Box>
      <Typography
        variant="h1"
        gutterBottom /*gutterBottom property give a margin bottom to the component  */
      >
        h1 Heading
      </Typography>
      <Typography variant="h2"> h2 Heading</Typography>
      <Typography variant="h3"> h3 Heading</Typography>
      <Typography variant="h4"> h4 Heading</Typography>
      <Typography variant="h5"> h5 Heading</Typography>
      <Typography variant="h5"> h6 Heading</Typography>
      <Typography variant="subtitle1"> subtitle 1 </Typography>
      <Typography variant="subtitle2"> subtitle 2 </Typography>
      <Typography variant="body1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus aliquid sunt soluta iste
        commodi saepe fuga explicabo vel ea ipsa molestias voluptates voluptate neque eligendi quis,
        deleniti suscipit. Aut, fugit?{' '}
      </Typography>
      <Typography variant="body2">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas officiis eveniet ut
        cupiditate consequatur ducimus suscipit error exercitationem molestias voluptatibus,
        delectus sapiente iure minus nesciunt, nobis unde expedita doloribus eius!
      </Typography>
    </Box>
  );
};

export default MuiTypography;

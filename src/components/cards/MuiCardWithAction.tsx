import {
  Box,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardMedia,
  CardActionArea,
} from '@mui/material';

const MuiCardWithAction = () => {
  return (
    <Box width={'300px'}>
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            title="Card Image"
            image="https://source.unsplash.com/random"
            height="140px"
            sx={{
              objectPosition: 'top center',
            }}
            alt="unsplash image"
          />
          <CardContent>
            <Typography variant="h5" color="initial" gutterBottom component="div">
              React
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia, ea distinctio
              repudiandae recusandae quasi saepe, suscipit numquam at vitae vero delectus, esse quis
              praesentium dolorem magnam in aperiam deserunt! Dolorum.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn more</Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default MuiCardWithAction;

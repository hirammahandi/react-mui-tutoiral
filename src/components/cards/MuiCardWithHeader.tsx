import { Favorite, FavoriteBorder } from '@mui/icons-material';
import {
  Avatar,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  Typography,
} from '@mui/material';
import { red } from '@mui/material/colors';

const MuiCardWithHeader = () => {
  return (
    <Card sx={{ maxWidth: '350px' }}>
      <CardHeader
        avatar={<Avatar aria-label="">H</Avatar>}
        action={
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
            defaultChecked
          />
        }
        title="Some title"
        subheader="Some subheader"
      />
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
          <Typography variant="h5" color="initial" gutterBottom>
            Something
          </Typography>
          <Typography variant="body2" color="initial">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit necessitatibus
            voluptate expedita, nostrum iusto neque eligendi autem cumque, harum quo doloribus
            maxime officiis reiciendis tempora animi ipsam debitis iste ut.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ justifyContent: 'flex-end' }}>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default MuiCardWithHeader;

import { Link, Stack, Typography } from '@mui/material';

const LinkView = () => {
  return (
    <div>
      <Typography variant="h5" color="initial">
        Links
      </Typography>
      <Stack spacing={2} direction="row">
        <Link href="#">Mui Link</Link>
        <Link href="#" color="secondary">
          With color secondary
        </Link>
        <Link href="#" underline="hover">
          With underline hover
        </Link>
        <Link href="#" variant="h3">
          With variant h3
        </Link>
      </Stack>
    </div>
  );
};

export default LinkView;

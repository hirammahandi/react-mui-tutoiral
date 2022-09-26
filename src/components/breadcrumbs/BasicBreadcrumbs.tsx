import { Breadcrumbs, Link, Typography } from '@mui/material';

const BasicBreadcrumbs = () => {
  return (
    <Breadcrumbs aria-label="breadcrumbs">
      <Link href="#" underline="hover">
        Home
      </Link>
      <Link href="#" underline="hover">
        Catalog
      </Link>
      <Link href="#" underline="hover">
        Accessories
      </Link>
      <Typography variant="body1" color="text.primary">
        Shoes
      </Typography>
    </Breadcrumbs>
  );
};

export default BasicBreadcrumbs;

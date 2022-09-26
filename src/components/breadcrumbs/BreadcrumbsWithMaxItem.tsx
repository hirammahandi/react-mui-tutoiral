import { Breadcrumbs, Link, Typography } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const BreadcrumbsWithMaxItem = () => {
  return (
    <Breadcrumbs
      aria-label="breadcrumbs-separator"
      maxItems={2} //default: 8 items
      separator={<NavigateNextIcon fontSize="small" />}
    >
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

export default BreadcrumbsWithMaxItem;

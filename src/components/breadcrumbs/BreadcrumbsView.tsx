import { Stack, Typography } from '@mui/material';
import BasicBreadcrumbs from './BasicBreadcrumbs';
import BreadcrumbsWithCustomSeparator from './BreadcrumbsWithCustomSeparator';
import BreadcrumbsWithMaxItem from './BreadcrumbsWithMaxItem';

const BreadcrumbsView = () => {
  return (
    <div>
      <Typography variant="h5" color="initial">
        Breadcrumbs
      </Typography>
      <Stack spacing={4}>
        <BasicBreadcrumbs />
        <BreadcrumbsWithCustomSeparator />
        <BreadcrumbsWithMaxItem />
      </Stack>
    </div>
  );
};

export default BreadcrumbsView;

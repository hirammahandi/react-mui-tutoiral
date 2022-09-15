import { Stack } from '@mui/material';
import ArrayObjectAutocomplete from '../components/autocompletes/ArrayObjectAutocomplete';
import FreeSoloAutocomplete from '../components/autocompletes/FreeSoloAutocomplete';
import MultipleAutocomplete from '../components/autocompletes/MultipleAutocomplete';
import SingleAutocomplete from '../components/autocompletes/SingleAutocomplete';

const MuiAutocomplete = () => {
  return (
    <Stack spacing={2} width="300px">
      <SingleAutocomplete />
      <FreeSoloAutocomplete />
      <ArrayObjectAutocomplete />
      <MultipleAutocomplete />
    </Stack>
  );
};

export default MuiAutocomplete;

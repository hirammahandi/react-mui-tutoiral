import {
  Autocomplete,
  AutocompleteChangeReason,
  createFilterOptions,
  TextField,
  Typography,
} from '@mui/material';
import { SyntheticEvent, useState } from 'react';
import { skills } from '../../utils';

const filter = createFilterOptions<string>({ trim: true });

const formatValueIfAdded = (value: string) =>
  value.slice(value.lastIndexOf(' ')).replaceAll('"', '');

const FreeSoloAutocomplete = () => {
  const [skill, setSkill] = useState<string | null>(null);
  const [optionSkills, setOptionSkills] = useState(skills);

  const handelChange = (
    e: SyntheticEvent<Element, Event>,
    newValue: string | null,
    reason: AutocompleteChangeReason
  ) => {
    setSkill(newValue);
    const noHasNewValue = newValue && optionSkills.indexOf(newValue) === -1;
    if (['createOption', 'selectOption'].includes(reason) && noHasNewValue) {
      const formatNewValue = formatValueIfAdded(newValue);
      setOptionSkills([...optionSkills, formatNewValue]);
    }
  };

  return (
    <div>
      <Typography variant="h5" color="initial">
        Free Solo Autocomplete
      </Typography>
      <Autocomplete
        options={optionSkills}
        value={skill}
        onChange={handelChange}
        freeSolo //allow saving the value even if it doesn't match the list of options
        selectOnFocus
        clearOnBlur
        handleHomeEndKeys
        renderOption={(props, option) => <li {...props}>{option}</li>}
        getOptionLabel={(option) => {
          if (option.includes('Add')) {
            return formatValueIfAdded(option);
          }
          return option;
        }}
        filterOptions={(options, params) => {
          const filtered = filter(options, params);

          if (params.inputValue !== '') {
            filtered.push(`Add "${params.inputValue}"`);
          }
          return filtered;
        }}
        renderInput={(params) => <TextField {...params} label="Skills" />}
      />
    </div>
  );
};

export default FreeSoloAutocomplete;

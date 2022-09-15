import { Stack } from '@mui/system';
import { Link, Route, Routes, Navigate } from 'react-router-dom';
import MuiAutocomplete from './pages/MuiAutocomplete';
import MuiButton from './pages/MuiButton';
import MuiCheckbox from './pages/MuiCheckbox';
import MuiLayout from './pages/MuiLayout';
import MuiRadioButton from './pages/MuiRadioButton';
import MuiRating from './pages/MuiRating';
import MuiSelectField from './pages/MuiSelectField';
import MuiSwitch from './pages/MuiSwitch';
import MuiTextField from './pages/MuiTextField';
import MuiTypography from './pages/MuiTypography';

const App = () => {
  return (
    <div>
      <header>
        <Stack
          component="nav"
          direction="row"
          spacing={2}
          justifyContent="center"
          mb={2}
          flexWrap="wrap"
        >
          <Link to="mui/typography">TYPOGRAPHY</Link>
          <Link to="mui/button">BUTTON</Link>
          <Link to="mui/text-field">TEXT FIELD</Link>
          <Link to="mui/select-field">SELECT FIELD</Link>
          <Link to="mui/radio-button">RADIO BUTTON</Link>
          <Link to="mui/checkbox">CHECKBOX</Link>
          <Link to="mui/switch">SWITCH</Link>
          <Link to="mui/rating">RATING</Link>
          <Link to="mui/autocomplete">AUTOCOMPLETE FIELD</Link>
          <Link to="mui/layout">LAYOUT</Link>
        </Stack>
      </header>
      <Routes>
        <Route path="mui">
          <Route index element={<MuiTypography />} />
          <Route path="typography" element={<MuiTypography />} />
          <Route path="button" element={<MuiButton />} />
          <Route path="text-field" element={<MuiTextField />} />
          <Route path="select-field" element={<MuiSelectField />} />
          <Route path="radio-button" element={<MuiRadioButton />} />
          <Route path="checkbox" element={<MuiCheckbox />} />
          <Route path="switch" element={<MuiSwitch />} />
          <Route path="rating" element={<MuiRating />} />
          <Route path="autocomplete" element={<MuiAutocomplete />} />
          <Route path="layout" element={<MuiLayout />} />
        </Route>
        <Route path="*" element={<Navigate replace to="mui/typography" />} />
      </Routes>
    </div>
  );
};

export default App;

import { Navigate, Route, Routes } from 'react-router-dom';
import TutorialNavbar from './components/navbars/TutorialNavbar';
import ScrollTop from './components/ScrollTop';
import MuiAccordion from './pages/MuiAccordion';
import MuiAutocomplete from './pages/MuiAutocomplete';
import MuiBottomNavigation from './pages/MuiBottomNavigation';
import MuiBreadcrumb from './pages/MuiBreadcrumb';
import MuiButton from './pages/MuiButton';
import MuiCards from './pages/MuiCards';
import MuiCheckbox from './pages/MuiCheckbox';
import MuiDrawer from './pages/MuiDrawer';
import MuiImageList from './pages/MuiImageList';
import MuiLayout from './pages/MuiLayout';
import MuiLink from './pages/MuiLink';
import MuiRadioButton from './pages/MuiRadioButton';
import MuiRating from './pages/MuiRating';
import MuiSelectField from './pages/MuiSelectField';
import MuiSpeedDial from './pages/MuiSpeedDial';
import MuiSwitch from './pages/MuiSwitch';
import MuiTextField from './pages/MuiTextField';
import MuiTypography from './pages/MuiTypography';
import Welcome from './pages/Welcome';

const App = () => {
  return (
    <>
      <ScrollTop />
      {/* <ResponsiveAppBar /> */}
      {/* <MuiNavbar /> */}
      <TutorialNavbar />
      <div className="app">
        <Routes>
          <Route path="mui">
            <Route index element={<Welcome />} />
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
            <Route path="cards" element={<MuiCards />} />
            <Route path="accordion" element={<MuiAccordion />} />
            <Route path="image-list" element={<MuiImageList />} />
            <Route path="link" element={<MuiLink />} />
            <Route path="breadcrumbs" element={<MuiBreadcrumb />} />
            <Route path="drawer" element={<MuiDrawer />} />
            <Route path="speed-dial" element={<MuiSpeedDial />} />
            <Route path="bottom-navigation" element={<MuiBottomNavigation />} />
          </Route>
          <Route path="*" element={<Navigate replace to="mui" />} />
        </Routes>
      </div>
    </>
  );
};

export default App;

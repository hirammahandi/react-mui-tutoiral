import { SpeedDial, SpeedDialAction, SpeedDialIcon } from '@mui/material';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import EditIcon from '@mui/icons-material/Edit';

const actions = [
  { icon: <FileCopyIcon />, name: 'Copy' },
  { icon: <SaveIcon />, name: 'Save' },
  { icon: <PrintIcon />, name: 'Print' },
  { icon: <ShareIcon />, name: 'Share' },
];
const BasicSpeedDial = () => {
  return (
    <SpeedDial
      ariaLabel="Navigation speed dial"
      sx={{ position: 'fixed ', bottom: 16, right: 16 }}
      icon={
        <SpeedDialIcon
          /* icon={<EditIcon />} */ //Change the icon of the speed dial
          openIcon={<EditIcon />} //Change the icon when the speed dial is open
        />
      }
    >
      {actions.map((action) => (
        <SpeedDialAction
          key={action.name}
          icon={action.icon}
          tooltipTitle={action.name}
          /* tooltipOpen */ //keep visible the tooltips
        />
      ))}
    </SpeedDial>
  );
};

export default BasicSpeedDial;

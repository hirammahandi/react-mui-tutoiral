import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { IconButton, InputAdornment, Stack, TextField, Typography } from '@mui/material';
import { useState } from 'react';

const AdornmentTextField = () => {
  const [visibility, setVisibility] = useState(false);

  const handleVisibilityPassword = () => setVisibility(!visibility);
  return (
    <div>
      <Typography variant="h5" color="initial">
        Input Adornment
      </Typography>
      <Stack direction="row" spacing={2}>
        <TextField
          id="start-adornment"
          label="Start Input Adornment"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AttachMoneyIcon />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          id="end-adornment"
          label="End Input Adornment"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <AttachMoneyIcon />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          id="password-adornment"
          label="Password"
          onMouseLeave={() => setVisibility(false)}
          type={visibility ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton aria-label="visibility" onClick={handleVisibilityPassword}>
                  {visibility ? <VisibilityIcon /> : <VisibilityOffIcon />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>
    </div>
  );
};

export default AdornmentTextField;

import { useState } from 'react';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';

import Button from '@mui/material/Button';
import css from './Header.module.scss';

export const Header = () => {
  const [modeTheme, seModeTheme] = useState(true);

  const handleChangeTheme = () => {
    seModeTheme(!modeTheme);
  };

  return (
    <header className={css.header}>
      <Button variant="text" onClick={handleChangeTheme} className={css.button}>
        {modeTheme ? <LightModeOutlinedIcon /> : <DarkModeOutlinedIcon />}
      </Button>
    </header>
  );
};

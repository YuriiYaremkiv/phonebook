import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setThemeMode } from 'redux/theme/themeModeSlice';
import Button from '@mui/material/Button';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import modeConfig from 'configs/mode.config';

export const ChangeMode = () => {
  const { themeMode } = useSelector(state => state.themeMode);
  const [modeTheme, setModeTheme] = useState(themeMode);
  const dispatch = useDispatch();
  const styles = modeConfig.style[themeMode];

  const handleChangeTheme = () => {
    const theme =
      modeTheme === modeConfig.themeConfig.light
        ? modeConfig.themeConfig.dark
        : modeConfig.themeConfig.light;
    setModeTheme(theme);
  };

  useEffect(() => {
    dispatch(setThemeMode(modeTheme));
  }, [modeTheme, dispatch]);

  return (
    <Button onClick={handleChangeTheme} style={{ ...styles.textColor }}>
      {modeTheme === modeConfig.themeConfig.light ? (
        <DarkModeOutlinedIcon />
      ) : (
        <LightModeOutlinedIcon />
      )}
    </Button>
  );
};

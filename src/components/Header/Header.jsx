import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { SelectCountry } from 'components/SelectCountry/SelectCountry';
import { setThemeMode } from 'redux/theme/themeModeSlice';
import { Navigation } from './block/Navigation';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import Button from '@mui/material/Button';
import modeConfig from 'configs/mode.config';
import css from './Header.module.scss';

export const Header = () => {
  const { themeMode } = useSelector(state => state.themeMode);
  const dispatch = useDispatch();
  const [modeTheme, seModeTheme] = useState(themeMode);
  const styles = modeConfig.style[themeMode];
  const { t } = useTranslation();

  const handleChangeTheme = () => {
    const theme =
      modeTheme === modeConfig.themeConfig.light
        ? modeConfig.themeConfig.dark
        : modeConfig.themeConfig.light;
    seModeTheme(theme);
  };

  useEffect(() => {
    dispatch(setThemeMode(modeTheme));
  }, [modeTheme, dispatch]);

  return (
    <header style={{ ...styles.backgroundColorHeader }} className={css.header}>
      <div className="container">
        <div className={css.container}>
          <h2 style={{ ...styles.textColor }} className={css.title}>
            {t('title')}
          </h2>
          <Navigation
            list={[
              { category: `${t('registration')}`, link: '/' },
              { category: `${t('login')}`, link: '/login' },
            ]}
          />
          <ul className={css.list}>
            <li>
              <SelectCountry />
            </li>
            <li>
              <Button
                onClick={handleChangeTheme}
                style={{ ...styles.textColor }}
                className={css.button}
              >
                {modeTheme === modeConfig.themeConfig.light ? (
                  <DarkModeOutlinedIcon />
                ) : (
                  <LightModeOutlinedIcon />
                )}
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

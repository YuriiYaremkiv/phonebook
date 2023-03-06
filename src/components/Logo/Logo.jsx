import { useSelector } from 'react-redux';
import modeConfig from 'configs/mode.config';
import TtyIcon from '@mui/icons-material/Tty';
import css from './Logo.module.scss';

export const Logo = () => {
  const { themeMode } = useSelector(state => state.themeMode);
  const styles = modeConfig.style[themeMode];

  return (
    <div className={css.logo}>
      <TtyIcon style={{ ...styles.textColor }} className={css.icon} />
      <h2 style={{ ...styles.textColor }} className={css.title}>
        Phone<span className={css.title__accent}>book</span>
      </h2>
    </div>
  );
};

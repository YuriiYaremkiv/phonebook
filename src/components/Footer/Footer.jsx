import { useSelector } from 'react-redux';
import modeConfig from 'configs/mode.config';
import css from './Footer.module.scss';

export const Footer = () => {
  const { themeMode } = useSelector(state => state.themeMode);
  const styles = modeConfig.style[themeMode];

  return (
    <footer style={{ ...styles.backgroundColorFooter }} className={css.footer}>
      <div className="container"></div>
    </footer>
  );
};

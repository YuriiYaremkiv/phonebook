import { useSelector } from 'react-redux';
import modeConfig from 'configs/mode.config';

export const Footer = () => {
  const { themeMode } = useSelector(state => state.themeMode);
  const styles = modeConfig.style[themeMode];

  return (
    <footer style={{ ...styles.backgroundColorFooter }}>
      <div className="container">
        <div style={{ ...styles.textColor }}>Footer</div>
        <div>Footer</div>
        <div>Footer</div>
      </div>
    </footer>
  );
};

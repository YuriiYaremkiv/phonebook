import { useSelector } from 'react-redux';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import modeConfig from 'configs/mode.config';
import css from './LogoUser.module.scss';

export const LogoUser = () => {
  const { themeMode } = useSelector(state => state.themeMode);
  const styles = modeConfig.style[themeMode];

  return (
    <div className={css.logo}>
      <PeopleAltIcon
        style={{ width: '100px', height: '100px', ...styles.colorIcon }}
      />
    </div>
  );
};

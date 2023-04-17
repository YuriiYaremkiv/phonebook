import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import AuthOperations from '../../redux/auth/auth-operations.js';
import authSelectors from 'redux/auth/auth-selectors';
import Button from '@mui/material/Button';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import modeConfig from 'configs/mode.config';
import css from './UserMenu.module.scss';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(authSelectors.getUserName);
  const { themeMode } = useSelector(state => state.themeMode);
  const styles = modeConfig.style[themeMode];
  const { t } = useTranslation();

  const handleLogout = () => {
    dispatch(AuthOperations.logOut());
  };

  return (
    <div className={css.userMenu}>
      <AccountCircleIcon
        style={{ width: '32px', height: '32px', ...styles.textColor }}
      />
      <p style={{ ...styles.textColor }} className={css.userMenu__name}>
        {t('hi')}, {user}!
      </p>
      <Button
        variant="contained"
        size="small"
        onClick={handleLogout}
        className={css.button}
      >
        {t('logout')}
      </Button>
    </div>
  );
};

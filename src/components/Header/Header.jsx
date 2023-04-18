import { useSelector } from 'react-redux';
import { SelectCountry } from 'components/SelectCountry/SelectCountry';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { ChangeMode } from 'components/ChangeMode/ChangeMode';
import { Navigation } from 'components/Navigation/Navigation';
import { Logo } from 'components/Logo/Logo';
import authSelectors from 'redux/auth/auth-selectors';
import modeConfig from 'configs/mode.config';
import css from './Header.module.scss';

export const Header = () => {
  const isLoggedIn = useSelector(authSelectors.getisLogged);
  const { themeMode } = useSelector(state => state.themeMode);
  const styles = modeConfig.style[themeMode];

  return (
    <header style={{ ...styles.backgroundColorHeader }}>
      <div className="container">
        <div className={css.wrapper}>
          <Logo />
          {!isLoggedIn && <Navigation />}
          <div className={css.wrapper__menu}>
            <div>
              <ChangeMode />
              <SelectCountry />
            </div>
            {isLoggedIn && <UserMenu />}
          </div>
        </div>
      </div>
    </header>
  );
};

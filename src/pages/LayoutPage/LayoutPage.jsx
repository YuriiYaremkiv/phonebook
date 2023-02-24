import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AppBar } from 'components/AppBar/AppBar';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { authOperations } from 'redux/auth';
import authSelectors from 'redux/auth/auth-selectors';
import css from './LayoutPage.module.scss';
import { Header } from 'components/Header/Header';

export const LayoutPage = () => {
  const isLoggedIn = useSelector(authSelectors.getisLoggedIn);
  const userName = useSelector(authSelectors.getUserName);

  return (
    <>
      <Header />
      <header className={css.header}>
        <div className={css.header__container}>
          <div className={css.layout__container}>
            {isLoggedIn ? (
              <UserMenu userName={userName} funcAPI={authOperations.logOut} />
            ) : null}
          </div>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

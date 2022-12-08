import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AppBar } from 'components/AppBar/AppBar';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { authOperations } from 'redux/auth';
import authSelectors from 'redux/auth/auth-selectors';
import css from './LayoutPage.module.scss';

export const LayoutPage = () => {
  const isLoggedIn = useSelector(authSelectors.getisLoggedIn);
  const userName = useSelector(authSelectors.getUserName);

  return (
    <>
      <header className={css.header}>
        <div className={css.header__container}>
          <h1 className={css.header__title}>Phonebook</h1>
          <div className={css.layout__container}>
            {isLoggedIn ? (
              <UserMenu userName={userName} funcAPI={authOperations.logOut} />
            ) : (
              <AppBar />
            )}
          </div>
        </div>
      </header>
      <main>
        <div className={css.main__container}>
          <Outlet />
        </div>
      </main>
    </>
  );
};

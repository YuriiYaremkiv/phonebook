import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { AppBar } from 'components/AppBar/AppBar';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { authOperations } from 'redux/auth';
import css from './LayoutPage.module.scss';

export const LayoutPage = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const userName = useSelector(state => state.auth.user.name);

  return (
    <>
      <header>
        <div className={css.container}>
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
        <div className={css.container}>
          <Outlet />
        </div>
      </main>
    </>
  );
};

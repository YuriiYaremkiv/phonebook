import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AppBar } from 'components/AppBar/AppBar';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { authOperations } from 'redux/auth';
import authSelectors from 'redux/auth/auth-selectors';
import css from './LayoutPage.module.scss';
import { Header } from 'components/Header/Header';

import { useTranslation } from 'react-i18next';

export const LayoutPage = () => {
  const isLoggedIn = useSelector(authSelectors.getisLoggedIn);
  const userName = useSelector(authSelectors.getUserName);
  const { t } = useTranslation();
  const { i18n } = useTranslation();

  function handleChangeLanguage(event) {
    const newLanguage = event.target.value;
    i18n.changeLanguage(newLanguage);
  }

  return (
    <>
      <select value={i18n.language} onChange={handleChangeLanguage}>
        <option value="en">English</option>
        <option value="ru">Russian</option>
      </select>
      <Header />
      <header className={css.header}>
        <div className={css.header__container}>
          <h1 className={css.header__title}>{t('title')}</h1>
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

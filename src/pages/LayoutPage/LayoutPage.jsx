import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';
import { Footer } from 'components/Footer/Footer';
import modeConfig from 'configs/mode.config';
import css from './LayoutPage.module.scss';

export const LayoutPage = () => {
  const { themeMode } = useSelector(state => state.themeMode);
  const styles = modeConfig.style[themeMode];

  return (
    <div className={css.container}>
      <Header />
      <main styles={{ ...styles.backgroundColorMain }} className={css.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

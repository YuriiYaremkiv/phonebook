import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';
import { Footer } from 'components/Footer/Footer';
import modeConfig from 'configs/mode.config';

export const Layout = () => {
  const { themeMode } = useSelector(state => state.themeMode);
  const styles = modeConfig.style[themeMode];

  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}
    >
      <Header />
      <main style={{ ...styles.backgroundColorMain, flex: 1 }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

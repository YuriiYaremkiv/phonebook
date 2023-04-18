import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';
import { Footer } from 'components/Footer/Footer';
import { Progress } from 'components/Progress/Progress';
import modeConfig from 'configs/mode.config';
import authSelectors from '../redux/auth/auth-selectors';

export const Layout = () => {
  const isAuthLoading = useSelector(authSelectors.getIsLoading);
  const { themeMode } = useSelector(state => state.themeMode);
  const styles = modeConfig.style[themeMode];

  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}
    >
      <Header />
      <main
        style={{ ...styles.backgroundColorMain, position: 'relative', flex: 1 }}
      >
        <Outlet />
        {isAuthLoading ? (
          <div
            style={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              right: 0,
              left: 0,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#e0e0e0',
              zIndex: 10,
            }}
          >
            <Progress />
          </div>
        ) : null}
      </main>
      <Footer />
    </div>
  );
};

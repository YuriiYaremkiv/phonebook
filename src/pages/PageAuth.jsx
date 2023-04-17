import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { Progress } from 'components/Progress/Progress';
import authSelectors from 'redux/auth/auth-selectors';

export const PageAuth = () => {
  const isLoading = useSelector(authSelectors.getIsLoading);

  return (
    <section style={{ paddingTop: '32px' }}>
      <div className="container">
        <Outlet />
        {isLoading && <Progress />}
      </div>
    </section>
  );
};

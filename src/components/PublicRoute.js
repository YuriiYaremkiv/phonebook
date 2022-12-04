import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const PublicRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};

PublicRoute.propTypes = {
  component: PropTypes.object,
  redirectTo: PropTypes.string,
};

import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  return isLoggedIn ? Component : <Navigate to={redirectTo} />;
};

PrivateRoute.propTypes = {
  component: PropTypes.object,
  redirectTo: PropTypes.string,
};

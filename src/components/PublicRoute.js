import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const PublicRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(state => state.auth.isLogged);

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};

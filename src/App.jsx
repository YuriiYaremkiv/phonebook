import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Layout } from './pages/Layout';
import { PageContact } from './pages/PageContact';
import { PublicRoute } from './components/PublicRoute';
import { PrivateRoute } from './components/PrivateRoute';
import { PageAuth } from './pages/PageAuth';
import { FormLogin } from './components/FormLogin/FormLogin';
import { FormRegister } from './components/FormRegister/FormRegister';
import AuthOperations from '../src/redux/auth/auth-operations';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(AuthOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          path="/"
          element={
            <PublicRoute redirectTo="/contacts" component={<PageAuth />} />
          }
        >
          <Route path="/" element={<FormLogin />} />
          <Route path="/register" element={<FormRegister />} />
        </Route>

        <Route
          path="/contacts"
          element={<PrivateRoute redirectTo="/" component={<PageContact />} />}
        />

        <Route
          path="*"
          element={
            <PublicRoute redirectTo="/contacts" component={<PageAuth />} />
          }
        />
      </Route>
    </Routes>
  );
};

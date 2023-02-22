import React from 'react';
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { LayoutPage } from '../pages/LayoutPage/LayoutPage';
import { RegisterPage } from 'pages/RegisterPage/RegisterPage';
import { LoginPage } from '../pages/LoginPage/LoginPage';
import { ContactsPage } from '../pages/ContactPage/ContactsPage';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import { authOperations } from 'redux/auth';
import authSelectors from 'redux/auth/auth-selectors';

export const App = () => {
  const dispatch = useDispatch();
  const updateUser = useSelector(authSelectors.getUpdateUser);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<LayoutPage />}>
        {!updateUser && (
          <>
            <Route
              index
              element={
                <PublicRoute
                  redirectTo="/contacts"
                  component={<RegisterPage />}
                />
              }
            />

            <Route
              path="login"
              element={
                <PublicRoute redirectTo="/contacts" component={<LoginPage />} />
              }
            />

            <Route
              path="contacts"
              element={
                <PrivateRoute
                  redirectTo="/login"
                  component={<ContactsPage />}
                />
              }
            />

            <Route
              path="*"
              element={
                <PublicRoute redirectTo="/contacts" component={<LoginPage />} />
              }
            />
          </>
        )}
      </Route>
    </Routes>
  );
};

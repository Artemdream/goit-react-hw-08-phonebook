import { Routes, Route } from 'react-router-dom';
import './GlobalStyle.js';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Layout } from './Layout/Layout';
import { HomePage } from 'pages/Home/Home';
import { ContactsPage } from 'pages/Contacts/Contacts';
import { RegisterPage } from 'pages/Register/Register';
import { LoginPage } from 'pages/Login/Login';
import { refreshUser } from 'redux/auth/operation';
import { PrivateRoute } from './Routs/PrivateRoute';
import { PublicRoute } from './Routs/PublicRoute';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <PublicRoute
              redirectTo="/contacts"
              component={<RegisterPage />}
              restricted
            />
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute
              redirectTo="/contacts"
              component={<LoginPage />}
              restricted
            />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
      </Route>
    </Routes>
  );
};

import { Route, Routes } from 'react-router-dom';

import { Layout } from './Layout/Layout';
import LoginPage from 'pages/LoginPage/LoginPage';
import RegisterPage from 'pages/RegisterPage/RegisterPage';
import HomePage from 'pages/HomePage/HomePage';
import ContactsPage from 'pages/ContactsPage/ContactsPage';
import PrivateRoute from 'guards/PrivateRoute';
import PublikRoute from 'guards/PublikRoute';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="login"
          element={
            <PublikRoute>
              <LoginPage />
            </PublikRoute>
          }
        />
        <Route
          path="register"
          element={
            <PublikRoute>
              <RegisterPage />
            </PublikRoute>
          }
        />
        <Route
          path="contacts"
          element={
            <PrivateRoute>
              <ContactsPage />
            </PrivateRoute>
          }
        />
      </Route>
    </Routes>
  );
};

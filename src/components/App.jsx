import { Route, Routes } from 'react-router-dom';

import { Layout } from './Layout/Layout';
import Login from 'pages/Login/Login';
import Register from 'pages/Register/Register';
import Home from 'pages/Home/Home';
import Contacts from 'pages/Contacts/Contacts';
import PrivateRoute from 'guards/PrivateRoute';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route
          path="contacts"
          element={
            <PrivateRoute>
              <Contacts />
            </PrivateRoute>
          }
        />
      </Route>
    </Routes>
  );
};

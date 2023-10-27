import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';
import { getToken } from 'redux/selectors';

const PublikRoute = ({ children }) => {
  const isAuth = useSelector(getToken);
  return !isAuth ? children : <Navigate to="/contacts" />;
};

export default PublikRoute;

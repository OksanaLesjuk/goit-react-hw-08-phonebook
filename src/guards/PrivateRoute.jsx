import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';
import { getToken } from 'redux/selectors';

const PrivateRoute = ({ children }) => {
  const isAuth = useSelector(getToken);
  return isAuth ? children : <Navigate to="/login" />;
};

export default PrivateRoute;

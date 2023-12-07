import { Navigate, Outlet } from 'react-router';
import { useSelector } from 'react-redux';
const PrivateRoute = () => {
  const token = useSelector(state => state.session.token);

  return token ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;

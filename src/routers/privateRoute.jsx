import { useNavigate, Navigate, Outlet } from 'react-router';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
const PrivateRoute = () => {
  const navigate = useNavigate();
  const token = useSelector(state => state.session.token);
  useEffect(() => {
    if (!token) {
      navigate('/login');
    }
  }, [token]);

  return token ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;

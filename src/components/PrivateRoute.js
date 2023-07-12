import { useAuth } from 'utils/hooks/useAuth';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn } = useAuth();
  console.log('🚀 ~ isLoggedIn:', isLoggedIn);

  return isLoggedIn ? Component : <Navigate to={redirectTo} />;
};

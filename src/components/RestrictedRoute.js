import { useAuth } from 'utils/hooks/useAuth';
import { Navigate } from 'react-router-dom';

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn } = useAuth();

  return !isLoggedIn ? Component : <Navigate to={redirectTo} />;
};

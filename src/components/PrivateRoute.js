// import { useAuth } from 'Hooks/useAuth';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  // const { isLogin } = useAuth();
  const isLogin = true;

  return isLogin ? Component : <Navigate to={redirectTo} />;
};

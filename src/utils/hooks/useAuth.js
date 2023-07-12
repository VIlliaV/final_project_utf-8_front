import { useSelector } from 'react-redux';
import {
  getIsLoggedIn,
  getUserName,
  getIsRefreshing,
  getIsLoginFailed,
  getUserAvatar,
} from 'redux/auth/authSelectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const isRefreshing = useSelector(getIsRefreshing);
  const userName = useSelector(getUserName);
  const isLoginFailed = useSelector(getIsLoginFailed);
  const userAvatar = useSelector(getUserAvatar);

  return {
    isLoggedIn,
    userName,
    isRefreshing,
    isLoginFailed,
    userAvatar,
  };
};

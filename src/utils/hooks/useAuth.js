import { useSelector } from 'react-redux';
import {
  getIsLoggedIn,
  getUserName,
  getIsRefreshing,
  getIsLoginFailed,
  getUserAvatar,
  getThemeToggle,
  getErorrMessage,
} from 'redux/auth/authSelectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const isRefreshing = useSelector(getIsRefreshing);
  const userName = useSelector(getUserName);
  const isLoginFailed = useSelector(getIsLoginFailed);
  const userAvatar = useSelector(getUserAvatar);
  const isThemeToggle = useSelector(getThemeToggle);
  const errorMessage = useSelector(getErorrMessage);

  return {
    isLoggedIn,
    userName,
    isRefreshing,
    isLoginFailed,
    userAvatar,
    isThemeToggle,
    errorMessage,
  };
};

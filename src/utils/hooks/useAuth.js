import { useSelector } from 'react-redux';
import {
  getIsLoggedIn,
  getUserName,
  getIsRefreshing,
  getIsLoginFailed,
  getUserAvatar,
  getThemeToggle,
  getErorrMessage,
  getAccessToken,
  getEmailMessage,
  getVerificationError,
} from 'redux/auth/authSelectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const isRefreshing = useSelector(getIsRefreshing);
  const userName = useSelector(getUserName);
  const isLoginFailed = useSelector(getIsLoginFailed);
  const userAvatar = useSelector(getUserAvatar);
  const isThemeToggle = useSelector(getThemeToggle);
  const errorMessage = useSelector(getErorrMessage);
  const accessToken = useSelector(getAccessToken);
  const emailMessage = useSelector(getEmailMessage);
  const verificationError = useSelector(getVerificationError);
;
  return {
    isLoggedIn,
    userName,
    isRefreshing,
    isLoginFailed,
    userAvatar,
    isThemeToggle,
    errorMessage,
    accessToken,
    emailMessage,
    verificationError,
  };
};

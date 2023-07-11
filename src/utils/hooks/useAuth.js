import { useSelector } from 'react-redux';
import {
    getIsLoggedIn,
    getUserName,
    getUserToken,
    getIsRefreshing,
    getIsLoginFailed,
    getUserAvatar
} from 'redux/auth/authSelectors';

export const useAuth = () => {
    const isLoggedIn = useSelector(getIsLoggedIn);
    const isRefreshing = useSelector(getIsRefreshing);
    const userToken = useSelector(getUserToken);
    const userName = useSelector(getUserName);
    const isLoginFailed = useSelector(getIsLoginFailed);
    const userAvatar = useSelector(getUserAvatar);

    return {
        isLoggedIn,
        userToken,
        userName,
        isRefreshing,
        isLoginFailed,
        userAvatar,
    };
};

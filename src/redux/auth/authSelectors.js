export const getIsLoggedIn = state => state.auth.isLoggedIn;
export const getUserName = state => state.auth.user.name;
export const getUserAvatar = state => state.auth.user.avatarURL;
export const getIsRefreshing = state => state.auth.isRefreshing;
export const getIsLoginFailed = state => state.auth.isLoginFailed;

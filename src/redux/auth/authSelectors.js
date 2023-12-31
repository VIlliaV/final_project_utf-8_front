export const getIsLoggedIn = state => state.auth.isLoggedIn;
export const getUserName = state => state.auth.user.name;
export const getUserAvatar = state => state.auth.user.avatarURL;
export const getIsRefreshing = state => state.auth.isRefreshing;
export const getIsLoginFailed = state => state.auth.isLoginFailed;
export const getThemeToggle = state => state.auth.isThemeToggle;
export const getErorrMessage = state => state.auth.errorMessage;
export const getAccessToken = state => state.auth.accessToken;
export const getEmailMessage = state => state.auth.emailMessage;
export const getVerificationError = state => state.auth.verificationError;

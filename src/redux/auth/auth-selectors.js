const getUpdateUser = state => state.auth.updateUser;
const getisLoggedIn = state => state.auth.isLoggedIn;
const getUserName = state => state.auth.user.name;
const getErrorRegister = state => state.auth.errorRegister;
const getErrorLogin = state => state.auth.errorLogin;
const getIsLoading = state => state.auth.isLoading;

const authSelectors = {
  getUpdateUser,
  getisLoggedIn,
  getUserName,
  getErrorRegister,
  getIsLoading,
  getErrorLogin,
};

export default authSelectors;

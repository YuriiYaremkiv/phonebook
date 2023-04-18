const getUpdateUser = state => state.auth.updateUser;
const getisLogged = state => state.auth.isLogged;
const getIsLoading = state => state.auth.isLoading;
const getUserName = state => state.auth.user.name;
const getErrorRegister = state => state.auth.errorRegister;
const getErrorLogin = state => state.auth.errorLogin;

const authSelectors = {
  getUpdateUser,
  getisLogged,
  getUserName,
  getErrorRegister,
  getIsLoading,
  getErrorLogin,
};

export default authSelectors;

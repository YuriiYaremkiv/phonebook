const getUpdateUser = state => state.auth.updateUser;
const getisLoggedIn = state => state.auth.isLoggedIn;
const getUserName = state => state.auth.user.name;

const authSelectors = {
  getUpdateUser,
  getisLoggedIn,
  getUserName,
};

export default authSelectors;

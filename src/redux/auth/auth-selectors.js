const getIsLoggeIn = state => state.auth.getIsLoggeIn;
const getUserName = state => state.auth.user.name;

const authSelectors = {
  getIsLoggeIn,
  getUserName,
};

export default authSelectors;

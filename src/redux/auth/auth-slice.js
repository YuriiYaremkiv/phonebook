import { createSlice } from '@reduxjs/toolkit';
import authOperations from './auth-operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isLoading: false,
  errorRegister: null,
  errorLogin: null,
  updateUser: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOperations.register.pending](state) {
      state.isLoading = true;
      state.errorRegister = null;
    },
    [authOperations.register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    [authOperations.register.rejected](state, action) {
      state.errorRegister = action.error.message;
      state.isLoggedIn = false;
      state.isLoading = false;
    },
    [authOperations.login.pending](state) {
      state.isLoading = true;
    },
    [authOperations.login.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    [authOperations.login.rejected](state, action) {
      console.log(action.error);
      state.errorLogin = action.error.message;
      state.isLoggedIn = false;
      state.isLoading = false;
    },
    [authOperations.logOut.pending](state) {
      state.isLoading = true;
    },
    [authOperations.logOut.fulfilled](state, action) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
      state.isLoading = false;
    },
    [authOperations.logOut.rejected](state, action) {
      state.errorRegister = action.payload;
      state.isLoading = false;
    },
    [authOperations.fetchCurrentUser.pending](state) {
      state.isLoading = true;
      state.updateUser = true;
    },
    [authOperations.fetchCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoading = false;
      state.isLoggedIn = true;
      state.updateUser = false;
    },
    [authOperations.fetchCurrentUser.rejected](state, action) {
      state.token = null;
      state.isLoading = false;
      state.isLoggedIn = false;
      state.updateUser = false;
    },
  },
});

export default authSlice.reducer;

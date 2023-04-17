import { createSlice } from '@reduxjs/toolkit';
import AuthOperations from './auth-operations';

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
  extraReducers: builder => {
    builder.addCase(AuthOperations.register.pending, state => {
      state.isLoading = true;
      state.errorRegister = null;
    });
    builder.addCase(AuthOperations.register.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
    });
    builder.addCase(AuthOperations.register.rejected, (state, action) => {
      state.errorRegister = action.error.message;
      state.isLoggedIn = false;
      state.isLoading = false;
    });
    builder.addCase(AuthOperations.login.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(AuthOperations.login.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
    });
    builder.addCase(AuthOperations.login.rejected, (state, action) => {
      console.log(action.error);
      state.errorLogin = action.error.message;
      state.isLoggedIn = false;
      state.isLoading = false;
    });
    builder.addCase(AuthOperations.logOut.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(AuthOperations.logOut.fulfilled, (state, action) => {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
      state.isLoading = false;
    });
    builder.addCase(AuthOperations.logOut.rejected, (state, action) => {
      state.errorRegister = action.payload;
      state.isLoading = false;
    });
    builder.addCase(AuthOperations.fetchCurrentUser.pending, state => {
      state.isLoading = true;
      state.updateUser = true;
    });
    builder.addCase(
      AuthOperations.fetchCurrentUser.fulfilled,
      (state, action) => {
        state.user = action.payload;
        state.isLoading = false;
        state.isLoggedIn = true;
        state.updateUser = false;
      }
    );
    builder.addCase(
      AuthOperations.fetchCurrentUser.rejected,
      (state, action) => {
        state.token = null;
        state.isLoading = false;
        state.isLoggedIn = false;
        state.updateUser = false;
      }
    );
  },
});

export default authSlice.reducer;

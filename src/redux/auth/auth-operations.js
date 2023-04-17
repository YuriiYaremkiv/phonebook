import { createAsyncThunk } from '@reduxjs/toolkit';
import { tokenService } from '../../http';
import AuthService from '../../services/AuthService';

class AuthOperations {
  static register = createAsyncThunk(
    'auth/register',
    async (user, { rejectWithValue }) => {
      try {
        const { data } = await AuthService.register(user);
        tokenService.set(data.token);
        return data;
      } catch (e) {
        return rejectWithValue(e.message);
      }
    }
  );

  static login = createAsyncThunk(
    'auth/login',
    async (user, { rejectWithValue }) => {
      try {
        const { data } = await AuthService.login(user);
        tokenService.set(data.token);
        return data;
      } catch (e) {
        return rejectWithValue(e.message);
      }
    }
  );

  static logOut = createAsyncThunk(
    'auth/logout',
    async (_, { rejectWithValue }) => {
      try {
        await AuthService.logout();
        tokenService.unset('');
      } catch (e) {
        return rejectWithValue(e.message);
      }
    }
  );

  static fetchCurrentUser = createAsyncThunk(
    'auth/refresh',
    async (_, { rejectWithValue, getState }) => {
      const state = getState();
      const persistedToken = state.auth.token;

      if (persistedToken === null) {
        return rejectWithValue();
      }

      tokenService.set(persistedToken);
      try {
        const { data } = await AuthService.refresh();
        return data;
      } catch (e) {
        return rejectWithValue(e.message);
      }
    }
  );
}

export default AuthOperations;

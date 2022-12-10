import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset(token) {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = createAsyncThunk('auth/register', async user => {
  try {
    const response = await axios.post('/users/signup', user);
    token.set(response.data.token);
    return response.data;
  } catch (e) {
    throw new Error(e.message);
  }
});

const login = createAsyncThunk('auth/login', async user => {
  try {
    const response = await axios.post('/users/login', user);
    token.set(response.data.token);
    return response.data;
  } catch (e) {
    throw new Error(e.message);
  }
});

const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    console.log('dcdscsdc');
    await axios.post('/users/logout');
    token.unset('');
  } catch (e) {
    throw new Error(e.message);
  }
});

const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }

    token.set(persistedToken);
    try {
      const response = await axios.get('/users/current');
      return response.data;
    } catch (e) {
      throw new Error(e.message);
    }
  }
);

const operations = { register, login, logOut, fetchCurrentUser };
export default operations;

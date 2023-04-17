import axios from 'axios';

const API = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

export const tokenService = {
  set(token) {
    API.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    API.defaults.headers.common.Authorization = '';
  },
};

export default API;

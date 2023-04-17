import API from '../http';

class AuthService {
  static async register(user) {
    return API.post('/users/signup', user);
  }

  static async login(user) {
    return API.post('/users/login', user);
  }

  static async logout() {
    return API.post('/users/logout');
  }

  static async refresh() {
    return API.get('/users/current');
  }
}

export default AuthService;

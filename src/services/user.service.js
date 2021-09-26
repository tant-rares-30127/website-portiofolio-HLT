import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'https://localhost:44370/api/Users';

class UserService {
  getPublicContent() {
    return axios.get(API_URL, { headers: authHeader() });
  }
}

export default new UserService();

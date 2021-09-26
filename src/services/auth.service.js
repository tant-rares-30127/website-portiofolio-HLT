import axios from 'axios';

const API_URL = 'https://localhost:44370/api/Users/';

class AuthService {
  login(user) {
    return axios
      .post(API_URL + 'Authenticate', {
        username: user.username,
        password: user.password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem('user', JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem('user');
  }
}

export default new AuthService();

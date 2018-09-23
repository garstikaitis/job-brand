import axios from 'axios';
import qs from 'qs';

class AuthApi {
  async authenticate(email, password) {
    console.log(email, password);
    const {
      data: { token, success },
    } = await axios.post(
      'http://localhost:3000/api/authenticate',
      qs.stringify({
        email,
        password,
      }),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      },
    );
    if (success) {
      return { success, token };
    } else {
      console.log(success);
    }
  }
  async signup(email, password) {
    return await axios.post(
      'http://localhost:3000/api/users',
      qs.stringify({
        email,
        password,
      }),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      },
    );
  }
  async logout() {
    const res = await axios.post('http://localhost:3000/api/logout');
    window.localStorage.setItem('x-access-token', null);
    return res.data;
  }
}

export default new AuthApi();

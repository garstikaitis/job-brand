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
}

export default new AuthApi();

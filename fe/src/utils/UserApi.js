import axios from 'axios';
import qs from 'qs';

axios.defaults.headers['x-access-token'] = window.localStorage.getItem(
  'x-access-token',
);

class UserApi {
  async getUsers() {
    const { data } = await axios.get('http://localhost:3000/api/users');
    return data;
  }

  async getUserById(id) {
    const { data } = await axios.get(`http://localhost:3000/api/users/${id}`);
    return data;
  }

  async addCompanyToUser(userId, { name, slug }) {
    const { data } = await axios.post(
      `http://localhost:3000/api/users/${userId}/companies`,
      qs.stringify({
        name,
        slug,
      }),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      },
    );
    console.log(data);
    return data;
  }
}

export default new UserApi();

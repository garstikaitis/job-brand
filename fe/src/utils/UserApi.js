import axios from 'axios';

axios.defaults.headers['x-access-token'] = window.localStorage.getItem(
  'x-access-token',
);

class UserApi {
  async getUsers() {
    const { data } = await axios.get('http://localhost:3000/api/users');
    console.log(data);
    return data;
  }
}

export default new UserApi();

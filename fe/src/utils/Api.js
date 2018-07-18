import axios from 'axios';
import qs from 'qs';

class Api {
  async getUsers() {
    const {
      data: { users },
    } = await axios.get('http://localhost:3000/api/users', {
      headers: {
        'x-access-token':
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImdnYWdhZ2FAZ21haWwuY29tIiwiaWF0IjoxNTMxOTEzMjYxLCJleHAiOjE1MzE5MTQ3MDF9.jRA_cPLRGpOon6j5z4TAFZl5h55UtYvSmHY1nDKxNrM',
      },
    });
    return users;
  }
  async authenticate(email, password) {
    console.log(email, password);
    return await axios.post(
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
  }
}

export default new Api();

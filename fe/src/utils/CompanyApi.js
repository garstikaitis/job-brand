import axios from 'axios';
import qs from 'qs';

class CompanyApi {
  async getCompanyById(id) {
    const { data } = await axios.get(
      `http://localhost:3000/api/companies/${id}`,
    );
    console.log(data);
    return data;
  }
}

export default new CompanyApi();

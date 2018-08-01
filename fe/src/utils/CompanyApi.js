import axios from 'axios';

class CompanyApi {
  async getCompanyByName(name) {
    const { data } = await axios.get(
      `http://localhost:3000/api/companies/${name}`,
    );
    console.log(data);
    return data;
  }
}

export default new CompanyApi();

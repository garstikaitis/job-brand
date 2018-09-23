import axios from 'axios';

class CompanyApi {
  async getCompanyBySlug(slug) {
    const { data } = await axios.get(
      `http://localhost:3000/api/companies/${slug}`,
    );
    console.log(data);
    return data;
  }
}

export default new CompanyApi();

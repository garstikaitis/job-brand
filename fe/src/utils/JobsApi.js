import axios from 'axios';
import qs from 'qs';

class CompanyApi {
  async addJobToCompany({ title, address, country, slug }, organization) {
    const { data } = await axios.post(
      `http://localhost:3000/api/companies/${organization}/job`,
      qs.stringify({
        title,
        address,
        country,
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
  async updateJob(
    {
      eduName,
      eduDesc,
      expName,
      expDesc,
      skillName,
      skillDesc,
      valueName,
      valueDesc,
    },
    id,
  ) {
    const { data } = await axios.post(
      `http://localhost:3000/api/jobs/${id}`,
      qs.stringify({
        eduName,
        eduDesc,
        expName,
        expDesc,
        skillName,
        skillDesc,
        valueName,
        valueDesc,
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
  async getJobBySlug(slug) {
    const { data } = await axios.get(`http://localhost:3000/api/jobs/${slug}`);
    return data;
  }
}

export default new CompanyApi();

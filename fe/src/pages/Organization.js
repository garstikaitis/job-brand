import React from 'react';
import CompanyApi from '../utils/CompanyApi';
import Navbar from '../components/common/Navbar';

class Organization extends React.Component {
  state = {
    company: {},
    loading: true,
  };
  async componentDidMount() {
    this.setState({
      company: await CompanyApi.getCompanyById(this.props.match.params.id),
      loading: false,
    });
  }
  renderCompany = () => {
    if (!this.state.loading) {
      return this.state.company.jobs.map(job => {
        return <div>{job.title}</div>;
      });
    } else {
      return <div>Loading...</div>;
    }
  };
  render() {
    return (
      <div>
        <Navbar title={this.state.company.name} />
        <div>{this.renderCompany()}</div>
      </div>
    );
  }
}

export default Organization;

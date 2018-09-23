import React from 'react';
import CompanyApi from '../utils/CompanyApi';
import Navbar from '../components/common/Navbar';
import { Button, Typography } from '@material-ui/core';
import CreateJobDialog from '../components/dialogs/CreateJobDialog';
import JobsWidget from '../components/widgets/JobsWidget';

class Organization extends React.Component {
  state = {
    company: {},
    loading: true,
    open: false,
  };
  async componentDidMount() {
    this.setState({
      company: await CompanyApi.getCompanyBySlug(this.props.match.params.slug),
      loading: false,
    });
  }
  style = () => {
    return {
      margin: 0,
      top: 'auto',
      right: 20,
      bottom: 20,
      left: 'auto',
      position: 'fixed',
    };
  };
  handleModalVisibility = () => {
    this.setState({ open: !this.state.open });
  };
  render() {
    return (
      <div>
        <Navbar backUrl="/" title={this.state.company.name} />
        <JobsWidget organization={this.state.company} />
        <Button
          color="primary"
          variant="fab"
          style={this.style()}
          onClick={this.handleModalVisibility}
        >
          <Typography variant="title" color="inherit">
            +
          </Typography>
        </Button>
        <CreateJobDialog
          open={this.state.open}
          organization={this.props.match.params.slug}
          handleModalVisibility={this.handleModalVisibility}
        />
      </div>
    );
  }
}

export default Organization;

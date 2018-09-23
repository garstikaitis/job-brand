import React from 'react';
import { Button, Typography } from '@material-ui/core';

import Navbar from '../components/common/Navbar';
import JobInfoWidget from '../components/widgets/JobInfoWidget';
import UpdateRequirementsDialog from '../components/dialogs/UpdateRequirementsDialog';
import JobsApi from '../utils/JobsApi';

class Job extends React.Component {
  state = {
    open: false,
    job: null,
    loading: true,
  };
  async componentDidMount() {
    const job = await JobsApi.getJobBySlug(this.props.match.params.jobSlug);
    this.setState({ job, loading: false });
  }
  handleModalVisibility = () => {
    this.setState({ open: !this.state.open });
  };
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
  render() {
    if (!this.state.loading) {
      return (
        <div>
          <Navbar
            backUrl={`/companies/${this.props.match.params.slug}`}
            title={this.state.job.title}
          />
          <JobInfoWidget job={this.state.job} />
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
          <UpdateRequirementsDialog
            open={this.state.open}
            organization={this.props.match.params.slug}
            handleModalVisibility={this.handleModalVisibility}
            job={this.props.location.state}
          />
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Job;

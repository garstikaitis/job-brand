import React from 'react';

import {
  Typography,
  Grid,
  Slide,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Button,
  Dialog,
} from '@material-ui/core';

import JobsApi from '../../utils/JobsApi';

class CreateJobDialog extends React.Component {
  state = {
    title: '',
  };
  componentDidMount() {
    console.log(this.props);
  }
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  transition = props => {
    return <Slide direction="up" {...props} />;
  };

  addJob = async () => {
    await JobsApi.addJobToCompany(this.state, this.props.organization);
  };

  render() {
    return (
      <Dialog
        TransitionComponent={this.transition}
        open={this.props.open}
        onClose={this.props.handleModalVisibility}
      >
        <Grid container spacing={0} direction="column" alignItems="center">
          <DialogTitle id="alert-dialog-slide-title">
            {'Create job opening'}
          </DialogTitle>
          <DialogContent>
            <Grid container spacing={40}>
              <Grid item xs={12}>
                <TextField
                  onChange={this.handleChange('title')}
                  value={this.state.title}
                  label="Job title"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={this.handleChange('address')}
                  value={this.state.address}
                  label="Address"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={this.handleChange('country')}
                  value={this.state.country}
                  label="Country"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={this.handleChange('slug')}
                  value={this.state.slug}
                  label="Slug"
                  fullWidth
                />
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={this.props.handleModalVisibility}
              color="secondary"
            >
              Cancel
            </Button>
            <Button variant="contained" onClick={this.addJob} color="primary">
              Save
            </Button>
          </DialogActions>
        </Grid>
      </Dialog>
    );
  }
}

export default CreateJobDialog;

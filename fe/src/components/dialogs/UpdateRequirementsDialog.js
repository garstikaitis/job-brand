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
  Divider,
} from '@material-ui/core';

import JobsApi from '../../utils/JobsApi';

class UpdateRequirementsDialog extends React.Component {
  state = {};
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
    await JobsApi.updateJob(this.state, this.props.job._id);
  };

  render() {
    return (
      <Dialog
        TransitionComponent={this.transition}
        open={this.props.open}
        onClose={this.props.handleModalVisibility}
        scroll="paper"
      >
        <Grid container spacing={0} direction="column" alignItems="center">
          <DialogTitle id="alert-dialog-slide-title">
            {'Update job'}
          </DialogTitle>
          <DialogContent>
            <Grid container spacing={40}>
              <Grid item xs={12}>
                <TextField
                  onChange={this.handleChange('expName')}
                  value={this.state.expName}
                  label="Experience name"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={this.handleChange('expDesc')}
                  value={this.state.expDesc}
                  label="Experience description"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={this.handleChange('skillName')}
                  value={this.state.skillName}
                  label="Skill name"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={this.handleChange('skillDesc')}
                  value={this.state.skillDesc}
                  label="Skill Description"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={this.handleChange('valueName')}
                  value={this.state.valueName}
                  label="Value name"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={this.handleChange('valueDesc')}
                  value={this.state.valueDesc}
                  label="Value description"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={this.handleChange('eduName')}
                  value={this.state.eduName}
                  label="Education name"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={this.handleChange('eduDesc')}
                  value={this.state.eduDesc}
                  label="Education description"
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

export default UpdateRequirementsDialog;

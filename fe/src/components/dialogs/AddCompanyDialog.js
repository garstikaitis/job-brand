import React from 'react';

import {
  Grid,
  Slide,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Button,
  Dialog,
  Typography,
} from '../../../node_modules/@material-ui/core';

import UserApi from '../../utils/UserApi';

class AddCompanyDialog extends React.Component {
  state = {
    name: '',
  };
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  transition = props => {
    return <Slide direction="up" {...props} />;
  };

  addCompany = async () => {
    await UserApi.addCompanyToUser('5b97c615aae9e7e153367bd6', this.state);
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
            {'Add a company'}
          </DialogTitle>
          <DialogContent>
            <Grid container spacing={40}>
              <Grid item xs={12}>
                <TextField
                  onChange={this.handleChange('name')}
                  value={this.state.name}
                  label="Company name"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={this.handleChange('slug')}
                  value={this.state.slug}
                  label="Company slug"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <Grid item xs={6}>
                  <Typography>Example url:</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography>
                    https://brand.io/
                    {this.state.slug}
                  </Typography>
                </Grid>
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
            <Button
              variant="contained"
              onClick={this.addCompany}
              color="primary"
            >
              Save
            </Button>
          </DialogActions>
        </Grid>
      </Dialog>
    );
  }
}

export default AddCompanyDialog;

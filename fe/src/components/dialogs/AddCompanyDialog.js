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
    await UserApi.addCompanyToUser('5b4f7781ec2ad5389bcf824a', this.state.name);
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
            <TextField
              onChange={this.handleChange('name')}
              value={this.state.name}
              label="Company name"
            />
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

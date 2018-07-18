import React, { Component } from 'react';
import UserApi from '../utils/UserApi';

import AddCompanyDialog from '../components/dialogs/AddCompanyDialog';
import UserCompaniesWidget from '../components/widgets/UserCompaniesWidget';
import Navbar from '../components/common/Navbar';

import {
  Grid,
  Button,
  Typography,
  SvgIcon,
  IconButton,
} from '../../node_modules/@material-ui/core';
import CompanyApi from '../utils/CompanyApi';

class Organizations extends Component {
  state = {
    users: [],
    loading: true,
    open: false,
    name: '',
    openSD: false,
    company: {},
  };
  handleModalVisibility = () => {
    this.setState({ open: !this.state.open });
  };

  async componentDidMount() {
    this.setState({
      users: await UserApi.getUsers(),
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
  render() {
    return (
      <Grid item xs={12}>
        <Navbar title="Choose organization" />
        <UserCompaniesWidget />
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

        <AddCompanyDialog
          open={this.state.open}
          handleModalVisibility={this.handleModalVisibility}
        />
      </Grid>
    );
  }
}

export default Organizations;

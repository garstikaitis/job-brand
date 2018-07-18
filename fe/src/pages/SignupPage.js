import React from 'react';
import AuthApi from '../utils/AuthApi';
import { Link } from 'react-router-dom';

import {
  Card,
  CardContent,
  Grid,
  TextField,
  CardHeader,
  Typography,
  Button,
} from '../../node_modules/@material-ui/core';

class LoginPage extends React.Component {
  state = {
    email: '',
    password: '',
  };

  handleSubmit = async e => {
    const { email, password } = this.state;
    e.preventDefault();
    const {
      data: { success },
    } = await AuthApi.signup(email, password);
    if (success) {
      await AuthApi.authenticate(email, password);
      window.location.href = '/';
    }
  };

  handleKeyUp = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div style={{ height: '100vh', alignItems: 'center', display: 'flex' }}>
        <Grid container justify="center">
          <Card>
            <CardContent>
              <CardHeader title="Signup" />
              <form onSubmit={this.handleSubmit}>
                <Grid style={{ margin: '10px 0' }} item xs={12}>
                  <TextField
                    onKeyUp={this.handleKeyUp}
                    type="email"
                    name="email"
                    placeholder="Email"
                  />
                </Grid>
                <Grid style={{ margin: '10px 0' }} item xs={12}>
                  <TextField
                    onKeyUp={this.handleKeyUp}
                    type="password"
                    name="password"
                    placeholder="Password"
                  />
                </Grid>
                <Grid style={{ margin: '10px 0' }} item xs={12}>
                  <Button type="submit" variant="contained" color="primary">
                    Signup
                  </Button>
                </Grid>
                <Grid item xs={12}>
                  <Typography>Already have an accout?</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography>
                    <Link to="/login">Login</Link>
                  </Typography>
                </Grid>
              </form>
            </CardContent>
          </Card>
        </Grid>
      </div>
    );
  }
}

export default LoginPage;

import React from 'react';
import { Link } from 'react-router-dom';
import AuthApi from '../utils/AuthApi';
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
    loggedIn: false,
    token: '',
  };

  handleSubmit = async e => {
    try {
      e.preventDefault();
      const { email, password } = this.state;
      const { success, token } = await AuthApi.authenticate(email, password);
      console.log(success, token);
      if (success) {
        window.localStorage.setItem('x-access-token', token);
        window.location.href = '/';
      } else {
        console.log(success, token);
      }
    } catch (error) {}
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
              <CardHeader title="Login" />
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
                    Login
                  </Button>
                </Grid>
                <Grid item xs={12}>
                  <Typography>Don't have an accout?</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography>
                    <Link to="/signup">Create one!</Link>
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

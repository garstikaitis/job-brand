import React from 'react';
import AuthApi from '../utils/AuthApi';

class LoginPage extends React.Component {
  state = {
    email: '',
    password: '',
    loggedIn: false,
    token: '',
  };

  handleSubmit = async e => {
    try {
      const { email, password } = this.state;
      e.preventDefault();
      const { success, token } = await AuthApi.authenticate(email, password);
      console.log(success, token);
      if (success) {
        window.localStorage.setItem('x-access-token', token);
        window.location.href = '/';
      }
    } catch (error) {}
  };

  handleKeyUp = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          onKeyUp={this.handleKeyUp}
          type="email"
          name="email"
          placeholder="Email"
        />
        <input
          onKeyUp={this.handleKeyUp}
          type="password"
          name="password"
          placeholder="Password"
        />
        <input type="submit" />
        {this.state.loggedIn ? (
          <div>LoggedIn {this.state.token}</div>
        ) : (
          <div>Logged out</div>
        )}
      </form>
    );
  }
}

export default LoginPage;

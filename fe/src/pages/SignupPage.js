import React from 'react';
import AuthApi from '../utils/AuthApi';

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

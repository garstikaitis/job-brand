import React from 'react';
import Api from '../utils/Api';

class LoginPage extends React.Component {
  state = {
    email: '',
    password: '',
    loggedIn: false,
    token: '',
  };

  handleSubmit = async e => {
    const { email, password } = this.state;
    e.preventDefault();
    const {
      data: { success, token },
    } = await Api.authenticate(email, password);
    if (success) {
      this.setState({ loggedIn: true, token });
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

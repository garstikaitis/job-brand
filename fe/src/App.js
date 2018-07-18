import React, { Component } from 'react';
import './App.css';
import Api from './utils/Api';
import LoginPage from './pages/LoginPage';

class App extends Component {
  state = {
    users: [],
    loading: true,
  };
  async componentDidMount() {
    this.setState({ users: await Api.getUsers(), loading: false });
  }
  render() {
    return (
      <div className="App">
        <h1>JOB BRAND</h1>
        {!this.state.loading ? (
          <div>{this.state.users.map(user => <div>{user.name}</div>)}</div>
        ) : (
          <div>Loading...</div>
        )}
        <LoginPage />
      </div>
    );
  }
}

export default App;

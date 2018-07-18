import React, { Component } from 'react';
import './App.css';
import UserApi from './utils/UserApi';

class App extends Component {
  state = {
    users: [],
    loading: true,
  };
  async componentDidMount() {
    this.setState({ users: await UserApi.getUsers(), loading: false });
  }
  render() {
    return (
      <div className="App">
        <h1>JOB BRAND</h1>
        {!this.state.loading ? (
          <div>
            {this.state.users.map(user => (
              <div key={user._id}>{user.name}</div>
            ))}
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    );
  }
}

export default App;

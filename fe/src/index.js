import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './index.css';
import registerServiceWorker from './registerServiceWorker';

import App from './App';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';

class Root extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={App} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/signup" component={SignupPage} />
          </Switch>
        </Router>
      </div>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();

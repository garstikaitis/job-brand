import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import theme from './utils/pallete';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import registerServiceWorker from './registerServiceWorker';

import Organizations from './pages/Organizations';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import Organization from './pages/Organization';

class Root extends React.Component {
  render() {
    return (
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <React.Fragment>
          <CssBaseline />
          <MuiThemeProvider theme={theme}>
            <Router>
              <Switch>
                <Route exact path="/" component={Organizations} />
                <Route exact path="/login" component={LoginPage} />
                <Route exact path="/signup" component={SignupPage} />
                <Route exact path="/companies/:name" component={Organization} />
              </Switch>
            </Router>
          </MuiThemeProvider>
        </React.Fragment>
      </div>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();

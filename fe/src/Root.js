import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import theme from './utils/pallete';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import Organizations from './pages/Organizations';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import Organization from './pages/Organization';
import Job from './pages/Job';

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
                <Route exact path="/companies/:slug" component={Organization} />
                <Route exact path="/companies/:slug/:jobSlug" component={Job} />
              </Switch>
            </Router>
          </MuiThemeProvider>
        </React.Fragment>
      </div>
    );
  }
}

export default Root;

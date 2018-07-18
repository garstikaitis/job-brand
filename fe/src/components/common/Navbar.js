import React from 'react';
import { AppBar, Typography } from '../../../node_modules/@material-ui/core';

class Navbar extends React.Component {
  render() {
    return (
      <AppBar
        style={{ padding: 20, textAlign: 'center', marginBottom: 30 }}
        position="static"
      >
        <Typography variant="title" color="inherit">
          Choose Organization
        </Typography>
      </AppBar>
    );
  }
}

export default Navbar;

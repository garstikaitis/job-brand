import React from 'react';
import {
  AppBar,
  Typography,
  Icon,
} from '../../../node_modules/@material-ui/core';
import ArrowBackIos from '@material-ui/icons/ArrowBackIos';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
  render() {
    const style = {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 20,
      textAlign: 'center',
      marginBottom: 30,
    };
    return (
      <AppBar style={style} position="static">
        <div style={{ marginLeft: 20 }}>
          <Link style={{ color: 'white' }} to={this.props.backUrl}>
            <ArrowBackIos />
          </Link>
        </div>
        <div>
          <Typography variant="title" color="inherit">
            {this.props.title}
          </Typography>
        </div>
        <div />
      </AppBar>
    );
  }
}

export default Navbar;

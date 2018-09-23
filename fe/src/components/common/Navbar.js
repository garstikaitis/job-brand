import React from 'react';
import {
  IconButton,
  AppBar,
  Typography,
  Menu,
  MenuItem,
} from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ArrowBackIos from '@material-ui/icons/ArrowBackIos';
import { Link, withRouter } from 'react-router-dom';
import AuthApi from '../../utils/AuthApi';

class Navbar extends React.Component {
  state = {
    anchorEl: null,
  };
  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };
  handleClose = () => {
    this.setState({ anchorEl: null });
  };
  logout = async () => {
    const { redirect } = await AuthApi.logout();
    console.log(redirect);
    this.props.history.push(redirect);
  };
  render() {
    const style = {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 20,
      textAlign: 'center',
      alignItems: 'center',
      marginBottom: 30,
    };
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);
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
        <div>
          <IconButton
            aria-owns={open ? 'menu-appbar' : null}
            aria-haspopup="true"
            onClick={this.handleMenu}
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={open}
            onClose={this.handleClose}
          >
            <MenuItem onClick={this.handleClose}>My account</MenuItem>
            <MenuItem onClick={this.logout}>Logout</MenuItem>
          </Menu>
        </div>
      </AppBar>
    );
  }
}

export default withRouter(Navbar);

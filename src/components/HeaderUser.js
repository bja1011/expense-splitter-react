import React, {Component} from 'react';
import {IconButton, Menu, MenuItem} from "material-ui";
import {AccountCircle} from "material-ui-icons";
import {connect} from "react-redux";
import * as actionCreators from "../store/actions/index";

class HeaderUser extends Component {

  state = {
    menuOpen: false,
    menuElRef: null
  };

  handleClick = event => {
    this.setState({
      menuOpen: true,
      menuElRef: event.currentTarget
    });
  };

  handleRequestClose = (event) => {
    this.setState({
      ...this.state,
      menuOpen: false
    });

    event === 'logout' ? this.props.onUserLogout() : null;
  };

  render() {
    return (
      <div>
        <IconButton
          aria-haspopup="true"
          onClick={this.handleClick}
          color="contrast"
        >
          <AccountCircle />
        </IconButton>
        <Menu
          anchorEl={this.state.menuElRef}
          id="simple-menu"
          open={this.state.menuOpen}
          onRequestClose={this.handleRequestClose}
        >
          <MenuItem onClick={this.handleRequestClose}>{this.props.user.email}</MenuItem>
          <MenuItem onClick={this.handleRequestClose}>My account</MenuItem>
          <MenuItem onClick={this.handleRequestClose.bind(this, 'logout')}>Logout</MenuItem>
        </Menu>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onUserLogout: () => dispatch(actionCreators.logout()),
  }
};

export default connect(null, mapDispatchToProps)(HeaderUser);
/**
 * Created by adam on 26.11.17.
 */
import React, {Component} from 'react';
import {AUTH_LOGIN_PATH, INDEX_PATH, MANAGE_PATH, SETTINGS_PATH} from "../../constants/RouterConstants";
import {Link} from "react-router-dom";
import './Header.css';
import {AppBar, Button, IconButton, Toolbar, Typography} from 'material-ui'
import MenuIcon from 'material-ui-icons/Menu';
import {connect} from "react-redux";
import HeaderUser from "../../components/HeaderUser";
import PropTypes from 'prop-types';

/**
 * Main navigation component
 */
class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <AppBar position="static">
          <Toolbar>
            <IconButton color="contrast" aria-label="Menu">
              <MenuIcon/>
            </IconButton>
            <Typography type="title" className="appTitle" color="inherit">
              Expense splitter
            </Typography>
            <div className="userInfo">
              {this.props.user ?
                <HeaderUser user={this.props.user}/>
                :
                <Link to={{pathname: AUTH_LOGIN_PATH}}><Button raised color="accent">Login</Button></Link>}
            </div>
          </Toolbar>
        </AppBar>
        <div className="temp-nav">
          <Link to={{pathname: INDEX_PATH}}><Button raised color="primary">Dashboard</Button></Link>
          <Link to={{pathname: MANAGE_PATH}}><Button raised color="primary">Manage</Button></Link>
          <Link to={{pathname: SETTINGS_PATH}}><Button raised color="primary">Settings</Button></Link>
        </div>
      </header>
    )
  }
}

Header.propTypes = {
  user: PropTypes.object
};

const mapStateToProps = state => {
  return {
    user: state.user
  }
};

export default connect(mapStateToProps, null)(Header);
/**
 * Created by adam on 26.11.17.
 */
import React from 'react';
import {AUTH_LOGIN_PATH, INDEX_PATH, MANAGE_PATH, SETTINGS_PATH} from "../../constants/RouterConstants";
import {Link} from "react-router-dom";
import './Header.css';
import {AppBar, Button, IconButton, Toolbar, Typography} from 'material-ui'
import MenuIcon from 'material-ui-icons/Menu';
import {connect} from "react-redux";

/**
 * Main navigation component
 */
const Header = (props) => {
  return (
    <header className="App-header">
      <AppBar position="static">
        <Toolbar>
          <IconButton color="contrast" aria-label="Menu">
            <MenuIcon/>
          </IconButton>
          <Typography type="title" color="inherit">
            Expense splitter
          </Typography>
          <Link to={{pathname: AUTH_LOGIN_PATH}}><Button raised color="accent">Login</Button></Link>
          <div>
            User: {props.user ? props.user.email : null}
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
};

const mapStateToProps = state => {
  return {
    user: state.user
  }
};

export default connect(mapStateToProps, null)(Header);
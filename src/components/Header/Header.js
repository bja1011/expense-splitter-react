/**
 * Created by adam on 26.11.17.
 */
import React from 'react';
import {AUTH_LOGIN_PATH, INDEX_PATH, MANAGE_PATH, SETTINGS_PATH} from "../../constants/RouterConstants";
import {Link} from "react-router-dom";
import './Header.css';
import {AppBar, Button, IconButton, Toolbar, Typography} from "material-ui";
import MenuIcon from 'material-ui-icons/Menu';

/**
 * Main navigation component
 */
const Header = () => {
  return (
    <header className="App-header">
      <AppBar position="static">
        <Toolbar>
          <IconButton color="contrast" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography type="title" color="inherit">
            Expense splitter
          </Typography>
          <Link to={{pathname: INDEX_PATH}}><Button  raised color="accent">Dashboard</Button></Link>
          <Link to={{pathname: MANAGE_PATH}}><Button raised color="primary">Manage</Button></Link>
          <Link to={{pathname: SETTINGS_PATH}}><Button raised color="primary">Settings</Button></Link>
          <Link to={{pathname: AUTH_LOGIN_PATH}}><Button raised color="primary">Login</Button></Link>
        </Toolbar>
      </AppBar>

    </header>
  )
}

export default Header;
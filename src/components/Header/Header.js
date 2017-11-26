/**
 * Created by adam on 26.11.17.
 */
import React, {Component} from 'react';
import {INDEX_PATH, MANAGE_PATH, SETTINGS_PATH} from "../../constants/RouterConstants";
import {Link} from "react-router-dom";
import './Header.css';
import {Button} from "material-ui";

/**
 * Main navigation component
 */
const Header = () => {
  return (
    <header className="App-header">
      <Link to={{pathname: INDEX_PATH}}><Button raised color="primary">Dashboard</Button></Link>
      <Link to={{pathname: MANAGE_PATH}}><Button raised color="primary">Manage</Button></Link>
      <Link to={{pathname: SETTINGS_PATH}}><Button raised color="primary">Settings</Button></Link>
    </header>
  )
}

export default Header;
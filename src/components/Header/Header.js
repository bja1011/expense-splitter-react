/**
 * Created by adam on 26.11.17.
 */
import React, {Component} from 'react';
import {INDEX_PATH, MANAGE_PATH, SETTINGS_PATH} from "../../constants/RouterConstants";
import {Link} from "react-router-dom";
import './Header.css';

/**
 * Main navigation component
 */
const Header = () => {
  return (
    <header className="App-header">
      <ul>
        <li><Link to={{pathname: INDEX_PATH}}>Dashboard</Link></li>
        <li><Link to={{pathname: MANAGE_PATH}}>Manage</Link></li>
        <li><Link to={{pathname: SETTINGS_PATH}}>Settings</Link></li>
      </ul>
    </header>
  )
}

export default Header;
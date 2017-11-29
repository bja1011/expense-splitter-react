/**
 * Created by adam on 26.11.17.
 */
import React, {Component} from 'react';
import {AUTH_LOGIN_PATH, INDEX_PATH, MANAGE_PATH, SETTINGS_PATH} from "../../constants/RouterConstants";
import {Link} from "react-router-dom";
import './Header.css';
import {
  AppBar, Button, createMuiTheme, Divider, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText,
  MuiThemeProvider, Toolbar,
  Typography,
  withStyles
} from 'material-ui'
import MenuIcon from 'material-ui-icons/Menu';
import {connect} from "react-redux";
import HeaderUser from "../../components/HeaderUser";
import PropTypes from 'prop-types';

const styles = {
  drawer: {
    width: 250,
  }
};

const theme = createMuiTheme({
  palette: {
    type: 'dark', // Switching the dark mode on is a single property value change.
  }
});
/**
 * Main navigation component
 */
class Header extends Component {

  state = {
    drawerOpen: false
  }

  toggleDrawer = () => {
    console.log('sdf')
    this.setState({
      drawerOpen: !this.state.drawerOpen
    });
  };

  render() {
    return (
      <MuiThemeProvider theme={theme}>

        <header className="App-header">
          <AppBar position="static">
            <Toolbar>
              <IconButton onClick={this.toggleDrawer} color="contrast" aria-label="Menu">
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
          <Drawer open={this.state.drawerOpen} onRequestClose={this.toggleDrawer}>
            <div
              tabIndex={0}
              role="button"
              onClick={this.toggleDrawer}
              onKeyDown={this.toggleDrawer}
              style={styles.drawer}
            >
              <List>
                <Link to={{pathname: INDEX_PATH}}>
                  <ListItem button>
                    <ListItemText primary="Dashboard"/>
                  </ListItem>
                </Link>
                <Link to={{pathname: MANAGE_PATH}}>
                  <ListItem button>
                    <ListItemText primary="Manage"/>
                  </ListItem>
                </Link>
                <Link to={{pathname: SETTINGS_PATH}}>
                  <ListItem button>
                    <ListItemText primary="Settings"/>
                  </ListItem>
                </Link>
              </List>
              <Divider />
              <List>
                <ListItem button>
                  <ListItemText primary="Placeholder"/>
                </ListItem>
                <ListItem button component="a" href="#simple-list">
                  <ListItemText primary="Placeholder"/>
                </ListItem>
              </List>
            </div>
          </Drawer>
        </header>
      </MuiThemeProvider>
    )
  }
}

Header.propTypes = {
  user: PropTypes.object
};

const mapStateToProps = state => {
  return {
    user: state.user.data
  }
};

export default withStyles(styles)(connect(mapStateToProps, null)(Header));
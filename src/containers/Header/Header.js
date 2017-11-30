/**
 * Created by adam on 26.11.17.
 */
import React, {Component} from 'react';
import {AUTH_LOGIN_PATH, INDEX_PATH, MANAGE_PATH, SETTINGS_PATH} from "../../constants/RouterConstants";
import {Link} from "react-router-dom";
import './Header.css';
import {
  AppBar, Button, Divider, Drawer, IconButton, List, ListItem, ListItemText, Toolbar, Typography, withStyles
} from 'material-ui'
import MenuIcon from 'material-ui-icons/Menu';
import HeaderUser from "../../components/HeaderUser";
import PropTypes from 'prop-types';

const styles = theme => ({
  root: {
    width: '100%',
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  drawer: {
    width: 320,
  }
});

/**
 * Main navigation component
 */
class Header extends Component {

  state = {
    drawerOpen: false
  };

  toggleDrawer = () => {
    this.setState({
      drawerOpen: !this.state.drawerOpen
    });
  };

  render() {

    const {classes} = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static" color="primary">
          <Toolbar>
            <IconButton onClick={this.toggleDrawer} color="contrast" aria-label="Menu">
              <MenuIcon/>
            </IconButton>
            <Typography type="title" className={classes.flex} color="inherit">
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
            <Divider/>
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
      </div>
    )
  }
}

Header.propTypes = {
  user: PropTypes.object,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Header);
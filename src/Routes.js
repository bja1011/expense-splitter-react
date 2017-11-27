/**
 * Created by adam on 26.11.17.
 */
import React from 'react';
import {Route} from "react-router-dom";
import Dashboard from "./containers/Dashboard";
import Manage from "./containers/Manage";
import Settings from "./containers/Settings";
import {AUTH_LOGIN_PATH, INDEX_PATH, MANAGE_PATH, SETTINGS_PATH} from "./constants/RouterConstants";
import Auth from "./containers/Auth";

const Routes = () => {
  return (
    <div>
      <Route exact path={INDEX_PATH} component={Dashboard}/>
      <Route exact path={MANAGE_PATH} component={Manage}/>
      <Route exact path={SETTINGS_PATH} component={Settings}/>
      <Route exact path={AUTH_LOGIN_PATH} component={Auth}/>
    </div>
  )
};

export default Routes;
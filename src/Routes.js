/**
 * Created by adam on 26.11.17.
 */
import React from 'react';
import {Route} from "react-router-dom";
import Dashboard from "./containers/Dashboard";
import Manage from "./containers/Manage";
import Settings from "./containers/Settings";
import {
  AUTH_LOGIN_PATH, EXPENSE_DETAILS_PATH, INDEX_PATH, MANAGE_PATH,
  SETTINGS_PATH
} from "./constants/RouterConstants";
import Auth from "./containers/Auth";
import {Redirect, Switch} from "react-router-dom";
import ExpenseDetails from "./containers/ExpenseDetails";

const Routes = (props) => {

  let routes = (
    <Switch>
      <Route exact path={AUTH_LOGIN_PATH} component={Auth}/>
      <Route render={() => <Redirect to={AUTH_LOGIN_PATH}/>}/>
    </Switch>
  );

  if (props.auth) routes = (
    <Switch>
      <Route exact path={INDEX_PATH} component={Dashboard}/>
      <Route exact path={MANAGE_PATH} component={Manage}/>
      <Route exact path={SETTINGS_PATH} component={Settings}/>
      <Route exact path={EXPENSE_DETAILS_PATH} component={ExpenseDetails}/>
      <Route render={() => <Redirect to={INDEX_PATH}/>}/>
    </Switch>
  )

  return (
    <div>
      {routes}
    </div>
  )
};

export default Routes;